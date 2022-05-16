import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { View, Text } from 'react-native';
import firebase from 'firebase/compat/app';

import { Provider } from 'react-redux';
import{ createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk'; //for dispatch function
const store = createStore(rootReducer, applyMiddleware(thunk))

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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import MainScreen from './components/Main';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loaded: false,
    }
  }

  componentDidMount() { // 
    firebase.auth().onAuthStateChanged((user) => {  // show loading screen
      if(!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }
  
  render() {
    const { loggedIn, loaded } = this.state;
    if(!loaded) {
      return(
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if(!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    return (
      // Provider is a parent tag just like <></>
      <Provider store={store}>
        <MainScreen />
      </Provider>
    )
  }
}

export default App;