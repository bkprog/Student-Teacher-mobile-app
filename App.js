import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import Home from './components/Home';
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import Login from "./components/Login";
import Register from "./components/Register";

const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Korepetytor" component={Teacher} />
        <Stack.Screen name="Uczen" component={Student} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Rejestracja" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

