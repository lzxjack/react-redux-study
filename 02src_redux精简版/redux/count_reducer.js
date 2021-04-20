// 该文件创建一个为Count组件服务的reducer，reducer本质是一个函数
// reducer函数接收两个参数，之前的状态preState，动作对象action

// 设定初始化状态为0
const initState = 0;

// 若preState为undefined，则传入initState
export default function countReducer(preState = initState, action) {
    // console.log(preState, action);
    if (preState === undefined) preState = 0;
    // 从action对象中获取type，data
    const { type, data } = action;
    // 根据type决定如何加工数据
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data;
        // 初始化动作
        default:
            return preState;
    }
}
