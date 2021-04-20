import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/person';

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value * 1;
        const personObj = { id: nanoid(), name, age };
        // console.log(personObj);
        this.props.addPerson(personObj);
        this.nameNode.value = '';
        this.ageNode.value = '';
    };
    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <input ref={c => (this.nameNode = c)} type="text" placeholder="输入姓名" />
                &nbsp;
                <input ref={c => (this.ageNode = c)} type="text" placeholder="输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {this.props.personArr.map(p => {
                        return (
                            <li key={p.id}>
                                姓名：{p.name}------年龄：{p.age}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        personArr: state.persons,
        count: state.sum,
    }),
    { addPerson: createAddPersonAction }
)(Person);
