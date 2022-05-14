import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyCondent: 'center' }}>
      <Button
          title="Register"
          onPress={() => navigation.navigate("Register")} />
      <Button
          title="Login"
          onPress={() => navigation.navigate("Login")} />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems:'center',
//     justifyCondent:'center'
//   }
// })