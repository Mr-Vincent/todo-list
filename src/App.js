import './App.css';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';


import React from 'react'
class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      todoList:[
        {id:1,name:"吃饭",done:false},
        {id:2,name:"睡觉",done:false},
        {id:3,name:"拉屎",done:false}
      ]
    }
  }

  addTodo = (obj)=>{
    const {todoList} = this.state
    const newTodo = [obj,...todoList]
    console.log(newTodo)
    this.setState({todoList:newTodo})
  }

  updateTodo = (id,done)=>{
    const {todoList} = this.state
    const newTodo = todoList.map(r=>{
      if(r.id === id) return {...r,done}
      else return r
    })
    this.setState({todoList:newTodo})
  }

  clearDone = ()=>{
    // 将状态为checked 的数据过滤掉就完事了 更新state
    const {todoList} = this.state
    const newTodo = todoList.filter(r=>{
      return !r.done
    })
    this.setState({todoList:newTodo})
  }

  // 全选操作 将数据中的done全部置为checked状态 item必须使用checked属性，否则更新不了ui的状态（不能defaultChecked属性）
  handleCheckAll = (done)=>{
    const {todoList} = this.state
    const newTodo = todoList.map(r=>{
       return {...r,done}
    })
    this.setState({todoList:newTodo})
  }

  deleteTodo = (id)=>{
    const {todoList} = this.state
    const newTodo = todoList.filter(r=>{
      return id !== r.id
    })
    this.setState({todoList:newTodo})
  }
  

  render(){
    return(
      <div>
        {/* <Header addTodo = {this.addTodo}></Header>
        <List todos={this.state.todoList} updateTodo = {this.updateTodo} deleteTodo={this.deleteTodo}></List>
        <Footer todos={this.state.todoList} clearDone = {this.clearDone} handleCheckAll = {this.handleCheckAll}></Footer> */}
        <Counter/>
      </div>
    )
  }
}
export default App;
