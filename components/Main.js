import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';
import FeedScreen from './main/feed';

const Tab = createBottomTabNavigator();

export class Main extends Component {
  componentDidMount() { // 컴포넌트를 생성하고 첫 렌더링이 끝났을때 호출
    this.props.fetchUser();    
  }

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    )
  }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);