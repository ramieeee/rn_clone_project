import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

export class Login extends Component {
  constructor(props) { // first one to be called whenever component is created
    super(props);

    this.state = {
        email : '',
        password: '',
        name: ''
    }

    this.onSignUp = this.onSignUp.bind(this)
  }

  onSignUp(){
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)  // async
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({email})}
        />
        
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />

        <Button
          onPress={() => this.onSignUp()}
          title="Sign In"
        />
      </View>
    )
  }
}

export default Login;