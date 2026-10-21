
import { useState } from 'react'
import './App.css'

function App() {
  const [tasks,setTasks] = useState([])


  function submit(e){
    e.preventDefault()
    const task = e.target.task.value
    setTasks([...tasks, task])
    e.target.reset()
  }

  function deleteTask(index){
    const newTask = tasks.filter((_task,i)=> i !== index)
    setTasks(newTask)
  }

  return (
    <>
      <h1>To-Do-List</h1>
      
      <form onSubmit={submit}>
        <input type="text" name="task" placeholder="Enter your task"  />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((task, index)=>{
          return <li key={index}>
            <span>{task}</span>
            <button onClick={()=>deleteTask(index)}>delete</button> </li>
        })}
      </ul>
    </>

  )
}

export default App
