// 引入Count的UI组件
import CountUI from '../../components/Count';
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action';

// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return { count: state };
}

function mapDispatchToProps(dispatch) {
    return {
        jia: number => {
            // 通知redux执行加法
            dispatch(createIncrementAction(number));
        },
        jian: number => {
            dispatch(createDecrementAction(number));
        },
        jiaAsync: (number, time) => {
            dispatch(createIncrementAsyncAction(number, time));
        },
    };
}

// 创建并暴露Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
