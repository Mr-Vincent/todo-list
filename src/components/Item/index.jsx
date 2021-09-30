import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    handleCheck = (id)=>{
        // 闭包调用，返回一个函数，这个函数中调用的是父组件传的props的函数
       return (event)=>{
        this.props.updateTodo(id,event.target.checked)
       }
    }
    mouseEvent = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    deleteTodo = (id)=>{
        return ()=>{
            this.props.deleteTodo(id)
        }
    }

    state = {mouse:false} //标识鼠标移入、移出

    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.mouseEvent(true)} onMouseLeave={this.mouseEvent(false)}>
                <label>
                    <input type='checkbox' checked={done} onChange={this.handleCheck(id)}></input>
                    <span>{name}</span>
                </label>
                <button onClick={this.deleteTodo(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}
