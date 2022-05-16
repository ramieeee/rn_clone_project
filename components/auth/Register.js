import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

export class Register extends Component {
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
    const { email, password, name } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)  // async
    .then((result) => {
      firebase.firestore().collection("users")  // firestore initialization
      .doc(firebase.auth().currentUser.uid)  // checks the authentication data
      .set({  // parameters that we want to save
        name,
        email
      })
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
          placeholder="name"
          onChangeText={(name) => this.setState({name})} // set state.name value
        />
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
          title="Sign Up"
        />
      </View>
    )
  }
}

export default Register