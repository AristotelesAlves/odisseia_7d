import { StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: styles.nav
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color='black' />
          ),
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
          title: 'to-do',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'checkbox' : 'checkbox-outline'} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="tarefas"
        options={{
          title: 'tarefas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'file-tray-stacked' : 'file-tray-full-outline'} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  nav: {
    borderRadius:15,
    backgroundColor:'white',
    width:'70%',
    position:'absolute',
    bottom: 10,
    left:'15%',
    borderWidth:1
  }
});
