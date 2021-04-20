import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createIncrementAction } from '../../redux/count_action';

class Count extends Component {
    add = () => {
        this.props.add(1);
    };
    render() {
        return (
            <div>
                <h2>当前求和为：{this.props.count}</h2>
                <button onClick={this.add}>点击+1</button>
            </div>
        );
    }
}

export default connect(state => ({ count: state }), { add: createIncrementAction })(Count);
