import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useQuizStore } from '../store';
import type { Question, QuestionOption } from '../types';
import { ConfettiEffect, FeedbackAnimation } from '../components/animations';
import { useSound } from '../hooks';
import { aiQuizGenerator } from '../services/aiQuizGenerator';

const { width, height } = Dimensions.get('window');

interface QuizScreenProps {
  navigation: any;
  route: any;
}

export default function QuizScreen({ navigation, route }: QuizScreenProps) {
  const { currentSession: session, submitAnswer, nextQuestion, startQuiz } = useQuizStore();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [scaleAnim] = useState(new Animated.Value(1));
  const [showConfetti, setShowConfetti] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'correct' | 'wrong' | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { playCorrect, playWrong, playClick } = useSound();

  const categoryId = route.params?.categoryId;
  const ageGroup = route.params?.ageGroup;

  // Load questions when screen mounts
  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    if (!categoryId || !ageGroup) {
      setError('Missing category or age group');
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const difficulty = route.params?.difficulty || 'easy';
      const questionCount = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 15 : 20;
      
      const response = await aiQuizGenerator.generateQuestions({
        topic: categoryId,
        ageGroup: ageGroup,
        questionCount: questionCount,
        difficulty: difficulty,
        questionTypes: ['mcq', 'true-false'],
      });

      if (response.questions && response.questions.length > 0) {
        startQuiz(categoryId, ageGroup, response.questions);
      } else {
        setError('No questions available for this category');
      }
    } catch (err) {
      console.error('Error loading questions:', err);
      setError('Failed to load questions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const currentQuestion = session?.questions[session.currentIndex];
  const hasTimer = route.params?.hasTimer ?? true;

  useEffect(() => {
    // Don't navigate to Result while still loading or if there's an error
    // Only navigate if we had a session and finished all questions
    if (isLoading || error) return;
    
    if (session && !currentQuestion && session.answers.length > 0) {
      // Quiz is complete - all questions answered
      navigation.navigate('Result');
      return;
    }

    // Reset timer for each question
    if (currentQuestion && hasTimer && currentQuestion.timeLimit) {
      setTimeLeft(currentQuestion.timeLimit);
    }
  }, [session?.currentIndex, isLoading, error, currentQuestion]);

  useEffect(() => {
    if (!hasTimer || !timeLeft || showFeedback) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, hasTimer, showFeedback]);

  const handleTimeout = () => {
    if (!currentQuestion) return;
    
    submitAnswer(currentQuestion.id, '', false, timeLeft);
    setShowFeedback(true);
    
    setTimeout(() => {
      handleNext();
    }, 2000);
  };

  const handleOptionSelect = (optionId: string) => {
    if (showFeedback) return;
    
    setSelectedOption(optionId);
    playClick(); // Play click sound with haptic feedback
    
    // Animate selection
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleSubmit = () => {
    if (!selectedOption || !currentQuestion || showFeedback) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    const timeSpent = hasTimer ? (currentQuestion.timeLimit || 30) - timeLeft : 0;
    
    submitAnswer(currentQuestion.id, selectedOption, isCorrect, timeSpent);
    setShowFeedback(true);
    
    // Play sound and show animation based on result
    if (isCorrect) {
      playCorrect();
      setFeedbackType('correct');
      setShowConfetti(true);
      // Hide confetti after animation
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      playWrong();
      setFeedbackType('wrong');
    }

    // Auto-advance after showing feedback
    setTimeout(() => {
      handleNext();
    }, 2500);
  };

  const handleNext = () => {
    if (!session) return;

    // Reset animation states
    setFeedbackType(null);
    setShowConfetti(false);

    if (session.currentIndex < session.questions.length - 1) {
      nextQuestion();
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      navigation.navigate('Result');
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <LinearGradient
        colors={['#667eea', '#764ba2', '#f093fb']}
        style={[styles.container, styles.centerContent]}
      >
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.loadingText}>Loading questions...</Text>
      </LinearGradient>
    );
  }

  // Error state
  if (error) {
    return (
      <LinearGradient
        colors={['#667eea', '#764ba2', '#f093fb']}
        style={[styles.container, styles.centerContent]}
      >
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadQuestions}>
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  // No session state
  if (!currentQuestion || !session) {
    return (
      <LinearGradient
        colors={['#667eea', '#764ba2', '#f093fb']}
        style={[styles.container, styles.centerContent]}
      >
        <Text style={styles.loadingText}>Preparing quiz...</Text>
      </LinearGradient>
    );
  }

  const progress = ((session.currentIndex + 1) / session.questions.length) * 100;
  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2', '#f093fb']}
      style={styles.container}
    >
      {/* Confetti Animation for Correct Answers */}
      {showConfetti && <ConfettiEffect />}
      
      {/* Feedback Animation Overlay */}
      {feedbackType && (
        <FeedbackAnimation 
          type={feedbackType} 
          onComplete={() => setFeedbackType(null)} 
        />
      )}
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressText}>
            {session.currentIndex + 1} / {session.questions.length}
          </Text>
        </View>

        {hasTimer && currentQuestion.timeLimit && (
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>⏱️ {timeLeft}s</Text>
          </View>
        )}

        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>🏆 {session.score}</Text>
          {session.streak > 0 && (
            <Text style={styles.streakText}>🔥 {session.streak}</Text>
          )}
        </View>
      </View>

      {/* Question Card */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.questionCard}>
          <Text style={styles.questionNumber}>Question {session.currentIndex + 1}</Text>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          
          {currentQuestion.hint && !showFeedback && (
            <View style={styles.hintContainer}>
              <Text style={styles.hintText}>💡 Hint: {currentQuestion.hint}</Text>
            </View>
          )}
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option: QuestionOption, index: number) => {
            const isSelected = selectedOption === option.id;
            const isCorrectOption = option.id === currentQuestion.correctAnswer;
            
            let optionStyle = styles.optionCard;
            if (showFeedback) {
              if (isCorrectOption) {
                optionStyle = styles.optionCardCorrect;
              } else if (isSelected && !isCorrect) {
                optionStyle = styles.optionCardWrong;
              }
            } else if (isSelected) {
              optionStyle = styles.optionCardSelected;
            }

            return (
              <TouchableOpacity
                key={option.id}
                onPress={() => handleOptionSelect(option.id)}
                disabled={showFeedback}
                activeOpacity={0.8}
              >
                <Animated.View
                  style={[
                    optionStyle,
                    isSelected && { transform: [{ scale: scaleAnim }] },
                  ]}
                >
                  <View style={styles.optionNumber}>
                    <Text style={styles.optionNumberText}>
                      {String.fromCharCode(65 + index)}
                    </Text>
                  </View>
                  <Text style={styles.optionText}>{option.text}</Text>
                  {showFeedback && isCorrectOption && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <Text style={styles.crossmark}>✗</Text>
                  )}
                </Animated.View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Feedback */}
        {showFeedback && (
          <View style={styles.feedbackContainer}>
            <Text style={isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}>
              {isCorrect ? '🎉 Correct!' : '❌ Incorrect'}
            </Text>
            <Text style={styles.explanation}>{currentQuestion.explanation}</Text>
            {currentQuestion.funFact && (
              <View style={styles.funFactContainer}>
                <Text style={styles.funFactLabel}>🌟 Fun Fact:</Text>
                <Text style={styles.funFactText}>{currentQuestion.funFact}</Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>

      {/* Submit Button */}
      {!showFeedback && (
        <TouchableOpacity
          style={[
            styles.submitButton,
            !selectedOption && styles.submitButtonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={!selectedOption}
        >
          <LinearGradient
            colors={selectedOption ? ['#11998e', '#38ef7d'] : ['#999', '#666']}
            style={styles.submitGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.submitButtonText}>Submit Answer</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  retryButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 15,
  },
  retryButtonText: {
    color: '#667eea',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  progressContainer: {
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  progressText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  timerContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  timerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 10,
  },
  scoreText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  streakText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  questionCard: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 20,
    padding: 25,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  questionNumber: {
    fontSize: 14,
    color: '#667eea',
    fontWeight: '600',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  questionText: {
    fontSize: 20,
    color: '#2d3748',
    fontWeight: '700',
    lineHeight: 28,
  },
  hintContainer: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#fef3c7',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  hintText: {
    fontSize: 14,
    color: '#92400e',
    fontStyle: 'italic',
  },
  optionsContainer: {
    gap: 15,
  },
  optionCard: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  optionCardSelected: {
    backgroundColor: '#e0e7ff',
    borderColor: '#667eea',
    borderWidth: 2,
  },
  optionCardCorrect: {
    backgroundColor: '#d1fae5',
    borderColor: '#10b981',
    borderWidth: 2,
  },
  optionCardWrong: {
    backgroundColor: '#fee2e2',
    borderColor: '#ef4444',
    borderWidth: 2,
  },
  optionNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#667eea',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  optionNumberText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#2d3748',
    fontWeight: '500',
  },
  checkmark: {
    fontSize: 24,
    color: '#10b981',
    fontWeight: 'bold',
  },
  crossmark: {
    fontSize: 24,
    color: '#ef4444',
    fontWeight: 'bold',
  },
  feedbackContainer: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  feedbackCorrect: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: 10,
  },
  feedbackWrong: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ef4444',
    marginBottom: 10,
  },
  explanation: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
  },
  funFactContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#dbeafe',
    borderRadius: 10,
  },
  funFactLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 5,
  },
  funFactText: {
    fontSize: 14,
    color: '#1e3a8a',
    lineHeight: 20,
  },
  submitButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  submitGradient: {
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
