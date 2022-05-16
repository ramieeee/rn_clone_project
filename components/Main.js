import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class MainScreen extends Component {
  componentDidMount() { // 컴포넌트를 생성하고 첫 렌더링이 끝났을때 호출
    
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>User is logged in</Text>
      </View>
    )
  }
}

export default MainScreen;