// 该文件用于汇总所有的reducer

import { combineReducers } from 'redux';
// 引入为Count组件服务的reducer
import countReducer from './count';
// 引入为Person组件服务的reducer
import personReducer from './person';

export default combineReducers({
    sum: countReducer,
    persons: personReducer,
});
