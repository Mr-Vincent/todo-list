import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'

export default class Counter extends Component {
    onIncrement = () => {
        store.dispatch(createIncrementAction(1))
    }

    onDecrement = () => {
        store.dispatch(createDecrementAction(1))
    }
    render() {
        return (<div>
            <h1>{store.getState()}</h1>
            <button onClick={this.onIncrement}>+</button>
            <button onClick={this.onDecrement}>-</button>
        </div>)
    }
}