// 该文件专门用于暴露一个store对象，真个文档只有一个store对象

// 引入createStore
import { createStore, applyMiddleware } from 'redux';
// 引入为Count组件服务的reducer
import countReducer from './count_reducer';
import thunk from 'redux-thunk';

// 暴露store
export default createStore(countReducer, applyMiddleware(thunk));
