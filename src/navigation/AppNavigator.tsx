import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useUserStore } from '../store';
import { AgeGroup, Category } from '../types';
import { AGE_GROUPS } from '../constants/config';

// Import Screens
import OnboardingScreen from '../screens/OnboardingScreen';
import AgeSelectionScreen from '../screens/AgeSelectionScreen';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import OfflinePacksScreen from '../screens/OfflinePacksScreen';

// ============================================
// NAVIGATION TYPES
// ============================================

export type RootStackParamList = {
  Onboarding: undefined;
  AgeSelection: { fromSettings?: boolean } | undefined;
  MainTabs: undefined;
  Category: { category: Category };
  Quiz: { categoryId: string; ageGroup: AgeGroup; difficulty: 'easy' | 'medium' | 'hard' };
  Result: { sessionId: string };
  Settings: undefined;
  OfflinePacks: undefined;
};

export type TabParamList = {
  Home: undefined;
  Leaderboard: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// ============================================
// TAB NAVIGATOR
// ============================================

function MainTabs() {
  const { selectedAgeGroup } = useUserStore();
  const colors = selectedAgeGroup ? AGE_GROUPS[selectedAgeGroup].colors : {
    primary: '#6C63FF',
    background: '#F0F0FF',
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: colors.primary,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Leaderboard') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen 
        name="Leaderboard" 
        component={LeaderboardScreen}
        options={{ tabBarLabel: 'Rankings' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

// ============================================
// ROOT NAVIGATOR
// ============================================

export default function AppNavigator() {
  const { isOnboarded, selectedAgeGroup } = useUserStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        {!isOnboarded ? (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="AgeSelection" component={AgeSelectionScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen 
              name="Category" 
              component={CategoryScreen}
              options={{ animation: 'slide_from_bottom' }}
            />
            <Stack.Screen 
              name="Quiz" 
              component={QuizScreen}
              options={{ 
                animation: 'fade',
                gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="Result" 
              component={ResultScreen}
              options={{ 
                animation: 'slide_from_bottom',
                gestureEnabled: false,
              }}
            />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="OfflinePacks" component={OfflinePacksScreen} />
            <Stack.Screen name="AgeSelection" component={AgeSelectionScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
