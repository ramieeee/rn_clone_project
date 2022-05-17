import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';

export class Main extends Component {
  componentDidMount() { // 컴포넌트를 생성하고 첫 렌더링이 끝났을때 호출
    this.props.fetchUser();    
  }
  render() {
    const { currentUser } = this.props;

    // console.log(currentUser);
    if (currentUser == undefined) {
        return(
            <View></View>
        )
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>{currentUser.name} is logged in</Text>
      </View>
    )
  }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);