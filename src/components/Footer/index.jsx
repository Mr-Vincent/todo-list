import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    clearDone = ()=>{
        //因为数据不在这个组件里维护，所以干脆让父亲去做就好了
        this.props.clearDone()
    }
    handleCheckAll = (event)=>{
        // 同样的道理，直接交给父亲处理
        this.props.handleCheckAll(event.target.checked)
    }
    render() {
        const {todos} = this.props;
        //总数
		const total = todos.length
        const done = todos.reduce((accumulator,currentValue)=>{return accumulator + (currentValue.done?1:0)},0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={total === done && total !==0}></input>
                </label>
                <span>
                    <span>已完成{done}</span>/{total}
                </span>
                <button onClick={this.clearDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
