// 该文件专门为Count组件生成action对象
import { INCREMENT, DECREMENT } from '../constant';
// import store from './store';

// 异步action：action的值为对象
export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });

// 异步action：action的值为函数,异步action一般都会调用同步action
// 异步action不是必须要用
export const createIncrementAsyncAction = (data, time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    };
};
