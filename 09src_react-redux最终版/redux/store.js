// 该文件专门用于暴露一个store对象，真个文档只有一个store对象

// 引入createStore
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import allReducers from './reducers';

// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

// 暴露store
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
