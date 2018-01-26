import {combineReducers} from 'redux';
import UserReducer from './reducerusers';

const allReducers =combineReducers({
    users: UserReducer  
});

export default allReducers;