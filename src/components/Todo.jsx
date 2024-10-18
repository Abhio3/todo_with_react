import React, { useEffect, useRef, useState } from 'react'
import Todoicon from '../assets/todo.png'
import Todoitems from './Todoitems'
const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): [] );


  const inputRef= useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
  
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  const deleteTodo = (id) => {
    setTodoList((prvtodos)=>{
      return prvtodos.filter((todo)=> todo.id !==id )
    })
  };
  const toggle = (id)=>{
    setTodoList((prevtodos)=>{
      return prevtodos.map((todo)=>{
        if(todo.id === id ){
          return {...todo,isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }
  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todoList));
  },[todoList])
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={Todoicon} alt="" />
        <h1 className='text-3xl font-bold'>Todo List</h1> 
      </div>

      <div className='flex items-center my-7 bg-gray-600 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 text-white placeholder:text-slate-200'   type="text" placeholder='Add your Task' />
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-20 h-14 text-white text-lg font-medium' >+</button>
      </div>
      {todoList.map((item,index)=>{
        return <Todoitems key = {index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo = {deleteTodo} toggle={toggle}/>

      })}

      <div>

      </div>

    </div>
  </div>
  
  )
}

export default Todo