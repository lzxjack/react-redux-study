// 该文件专门用于暴露一个store对象，真个文档只有一个store对象

// 引入createStore
import { createStore, applyMiddleware, combineReducers } from 'redux';
// 引入为Count组件服务的reducer
import countReducer from './reducers/count';
// 引入为Count组件服务的reducer
import personReducer from './reducers/person';
import thunk from 'redux-thunk';

// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

// 汇总所有reducers
const allReducers = combineReducers({
    sum: countReducer,
    rens: personReducer,
});

// 暴露store
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
