import { combineReducers } from 'redux';
import { user } from './user';

const Reducers = combineReducers({
    userState: user // connected to user that is imported
})

export default Reducers;