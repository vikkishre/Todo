// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useEffect, useState } from "react"
import classes from "./components/styles.module.css"
import TodoItem from "./components/toDoItem"
import TodoDetails  from "./components/toDoDetails";

function App() {
  // const [count, setCount] = useState(0)
  const [todoList,settodoList]=useState([]);
  const [loadingState,setloadinState]=useState(false);
  const [errorMsg,seterrorMsg]=useState(null);
  const [todoDetails,settodoDetails]=useState(null);
  const [openDialog,setopenDialog]=useState(false)
  async function fetchListToDos()
  {
    try{
      setloadinState(true)
      const apiResponse=await fetch('https://dummyjson.com/todos');
      const result=await apiResponse.json();
      console.log(result)
      if(result?.todos && result?.todos.length>0)
        {
          settodoList(result?.todos)
          setloadinState(false)
          seterrorMsg('')
        }
        else
        {
          settodoList([])
          setloadinState(true)
          seterrorMsg('')
        }
    }
    catch(error)
    {
      console.log(error);
      seterrorMsg("Some error ocuured");
    }
  }
  async function fetchDetailsofToDos(getToDoItemId)
  {
   try{
    console.log(getToDoItemId)
    const apiResponse=await fetch(`https://dummyjson.com/todos/${getToDoItemId}`)
    const details=await apiResponse.json()
    console.log(details)
    if(details)
      {
        settodoDetails(details)
        setopenDialog(true)
      }
      else
      {
        settodoDetails(null)
        setopenDialog(false)
      }
   }catch(error)
   {
    console.log("Some error Occurred")
   }
  }
  useEffect(()=>{
    fetchListToDos();
  

  },[])
  console.log(todoList)
  return (
    <>
      <div className={classes.mainWrapper}>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
        <h1 className={classes.headerTitle}>To Do App Using Material UI</h1>
      </div>
      <TodoDetails settodoDetails={settodoDetails} setopenDialog={setopenDialog} openDialog={openDialog} todoDetails={todoDetails}/>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more */}

      {/* </p> */}
      {/* <ul>
      {
        todoList && todoList.length>0?todoList.map((Singletodo)=>
        {
          return <li key={Singletodo.id}>{Singletodo.todo}</li>
        }):null
      }
      </ul> */}
      <div className={classes.todoListWrapper}>
        {
          todoList && todoList.length>0?todoList.map(todoItem=><TodoItem todo={todoItem} todoId={fetchDetailsofToDos}/>):null
        }
       
      </div>
    </>
  )
}

export default App
