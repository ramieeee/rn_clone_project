import { StatusBar } from 'expo-status-bar';
import React from 'react';

import firebase from 'firebase/compat/app';
const firebaseConfig = {
  apiKey: "AIzaSyCR_ryB7aSJ75xv8RmrhMeH_75-s8yWB04",
  authDomain: "first-project-4963b.firebaseapp.com",
  projectId: "first-project-4963b",
  storageBucket: "first-project-4963b.appspot.com",
  messagingSenderId: "188939245553",
  appId: "1:188939245553:web:00bc8b12fcbc824a181650",
  measurementId: "G-9CY0VT36E6"
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}