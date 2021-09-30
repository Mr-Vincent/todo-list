import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    
    render() {
        // 层层传递。就是无限套娃，父亲传给孩子，孩子还能穿给孙子
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo=>{
                        return <Item key={todo.id} {...todo} updateTodo = {updateTodo} deleteTodo = {deleteTodo}></Item>
                    })
                }
            </ul>
        )
    }
}
