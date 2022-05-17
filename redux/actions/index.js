import { USER_STATE_CHANGE } from '../constants/index'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if(snapshot.exists) {
                    // console.log(snapshot.data()); // shows the user data
                    dispatch({type : USER_STATE_CHANGE, currentUser: snapshot.data()}); // dispatch 함수를 통해 reducer로 전달
                }
                else {
                    console.log('does not exist');
                }
            })
    })
}