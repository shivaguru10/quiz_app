import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useUserStore } from '../store';
import { AGE_GROUPS } from '../constants/config';
import { Category } from '../types';

const { width } = Dimensions.get('window');

type CategoryScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Category'>;
  route: RouteProp<RootStackParamList, 'Category'>;
};

export default function CategoryScreen({ navigation, route }: CategoryScreenProps) {
  const { category } = route.params;
  const { selectedAgeGroup } = useUserStore();
  const config = selectedAgeGroup ? AGE_GROUPS[selectedAgeGroup] : AGE_GROUPS['juniors'];

  const difficulties = [
    {
      id: 'easy',
      name: 'Easy',
      emoji: '😊',
      description: 'Perfect for warming up!',
      color: '#4CAF50',
      questions: 10,
    },
    {
      id: 'medium',
      name: 'Medium',
      emoji: '🤔',
      description: 'A good challenge!',
      color: '#FF9800',
      questions: 15,
    },
    {
      id: 'hard',
      name: 'Hard',
      emoji: '🔥',
      description: 'For true champions!',
      color: '#F44336',
      questions: 20,
    },
  ];

  const handleStartQuiz = (difficulty: 'easy' | 'medium' | 'hard') => {
    if (selectedAgeGroup) {
      navigation.navigate('Quiz', {
        categoryId: category.id,
        ageGroup: selectedAgeGroup,
        difficulty: difficulty,
      });
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: config.colors.background }]}>
      {/* Header */}
      <LinearGradient
        colors={[category.color, adjustColor(category.color, -40)]}
        style={styles.header}
      >
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <Animated.View
          entering={FadeInDown.springify()}
          style={styles.categoryInfo}
        >
          <Text style={styles.categoryIcon}>{category.icon}</Text>
          <Text style={styles.categoryName}>{category.name}</Text>
          <Text style={styles.categoryDescription}>{category.description}</Text>
          
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Ionicons name="help-circle" size={16} color="rgba(255,255,255,0.8)" />
              <Text style={styles.metaText}>{category.questionsCount} Questions</Text>
            </View>
            {category.isOfflineAvailable && (
              <View style={styles.metaItem}>
                <Ionicons name="cloud-done" size={16} color="rgba(255,255,255,0.8)" />
                <Text style={styles.metaText}>Offline Ready</Text>
              </View>
            )}
          </View>
        </Animated.View>
      </LinearGradient>

      {/* Difficulty Selection */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={[styles.sectionTitle, { color: config.colors.primary }]}>
          Choose Difficulty 🎯
        </Text>

        {difficulties.map((diff, index) => (
          <Animated.View
            key={diff.id}
            entering={FadeInDown.delay(100 * index).springify()}
          >
            <TouchableOpacity
              style={styles.difficultyCard}
              onPress={() => handleStartQuiz(diff.id as 'easy' | 'medium' | 'hard')}
              activeOpacity={0.8}
            >
              <View style={[styles.difficultyIcon, { backgroundColor: diff.color }]}>
                <Text style={styles.difficultyEmoji}>{diff.emoji}</Text>
              </View>
              
              <View style={styles.difficultyInfo}>
                <Text style={styles.difficultyName}>{diff.name}</Text>
                <Text style={styles.difficultyDesc}>{diff.description}</Text>
                <Text style={styles.questionCount}>{diff.questions} questions</Text>
              </View>

              <View style={[styles.playBtn, { backgroundColor: diff.color }]}>
                <Ionicons name="play" size={20} color="#FFF" />
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}

        {/* Fun Fact Box */}
        <Animated.View
          entering={FadeInDown.delay(400).springify()}
          style={styles.funFactBox}
        >
          <Text style={styles.funFactTitle}>💡 Did you know?</Text>
          <Text style={styles.funFactText}>
            Completing quizzes regularly helps improve memory retention by up to 50%!
          </Text>
        </Animated.View>
        
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

function adjustColor(color: string, amount: number): string {
  const clamp = (num: number) => Math.min(255, Math.max(0, num));
  let hex = color.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const r = clamp(parseInt(hex.slice(0, 2), 16) + amount);
  const g = clamp(parseInt(hex.slice(2, 4), 16) + amount);
  const b = clamp(parseInt(hex.slice(4, 6), 16) + amount);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryInfo: {
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 60,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  categoryDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 15,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 20,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metaText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 13,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  difficultyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  difficultyIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  difficultyEmoji: {
    fontSize: 28,
  },
  difficultyInfo: {
    flex: 1,
    marginLeft: 15,
  },
  difficultyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  difficultyDesc: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  questionCount: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  playBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  funFactBox: {
    backgroundColor: '#FFF9E6',
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD93D',
  },
  funFactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  funFactText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
