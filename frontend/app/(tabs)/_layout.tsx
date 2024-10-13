import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Receipt',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cloud-upload' : 'cloud-upload-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fridge"
        options={{
          title: 'Fridge',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'fridge' : 'fridge-outline'} // Use MaterialCommunityIcons for fridge
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recipe"
        options={{
          title: 'Recipe',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="camera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}
