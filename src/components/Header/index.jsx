import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    constructor(props){
        super(props)
    }

    keyDown = (event)=>{
        if(event.keyCode !== 13) return
        let {target} = event
        console.log(target.value)
        const todoObj = {id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input type='text'  placeholder="请输入待办" onKeyDown={this.keyDown}></input>
            </div>
        )
    }
}
