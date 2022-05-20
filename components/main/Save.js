import React, { useState } from 'react';
import { View, TextInput, Image, Button } from 'react-native';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

export default function Save(props) {
  const [caption, setCaption] = useState("");
  const childPath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`
  console.log(childPath);

  const uploadImage = () => {
    const uri = props.route.params.image;

    const response = async () => await fetch(uri);
    const blob = async () => await response.blob();

    const task = firebase
      .storage()
      .ref()
      .child(childPath)
      .put(blob);

    const taskProgress = (snapshot) => {
        console.log('transferred: ', (snapshot.bytesTransfererd / snapshot.totalBytes) * 100, '%');
    }

    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
          console.log(snapshot);
      })
    }

    const taskError = (snapshot) => {
    //   console.log(snapshot);
    }

    task.on("state_changed", taskProgress, taskError, taskCompleted);
  }
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: props.route.params.image }}/>
      <TextInput
        placeholder='Write a Caption . . .'
        onChangeText={(caption) => setCaption(caption)}
      />

      <Button title="Save" onPress={() => uploadImage()}/>
    </View>
  )
}
