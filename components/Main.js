import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';
import FeedScreen from './main/Feed';
import AddScreen from './main/Add';
import ProfileScreen from './main/Profile';

const Tab = createBottomTabNavigator();

export class Main extends Component {
  componentDidMount() { // 컴포넌트를 생성하고 첫 렌더링이 끝났을때 호출
    this.props.fetchUser();
  }

  render() {
    // 버튼 랜더링
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} /> // check more at vector icons page
          )
          }}/>
          <Tab.Screen name="Add" component={AddScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={26} /> // check more at vector icons page
          )
          }}/>
          <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} /> // check more at vector icons page
          )
          }}/>
      </Tab.Navigator>
    )
  }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);