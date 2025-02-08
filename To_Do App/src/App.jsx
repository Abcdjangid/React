import React, { useState } from 'react'
import './App.css'

const App = () => {
  const[tasks, setTasks] = useState([]) // state for task
  const[task, setTask] = useState("") // state for input value.

  // function to handling a task..
  const addTask = () => {
    if(task.trim() === ""){
      alert("Plz enter a task!");
      return;
    }

    setTasks([...tasks, task]); //Add task to the list
    setTask(""); // clear input field  
  }

  // handle delate task...
  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index); // Filter out task at given index
    setTasks(newTasks) 
  }




  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <div>
        <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter your Task' ></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
      {tasks.map((t,index)=>(
        <li key={index}>
        {t}
        <button onClick={()=> deleteTask(index)}>Delete</button>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default App