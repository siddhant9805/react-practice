
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')
  const [update, setUpdate] = useState(null)

  useEffect(() => {
    const promise_1 = fetch("http://localhost:5000/tasks/")

    promise_1.then((rep) => {
      rep.json().then((rep) => {
        console.table(rep)
        setTasks(rep)
      })
    }).catch(err => console.error(err))
  }, [])

  async function submit(e) {
    e.preventDefault()
    const taskMessage = e.target.task.value

    if (update === null) {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: taskMessage })
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    }
    else {
      const response = await fetch(`http://localhost:5000/tasks/${update}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: taskMessage })
      });
      const newtask = tasks.map((task) => {
        if (task.id != update)
          return task

        task.message = taskMessage
        return task
      })

      setTasks(newtask)
      setUpdate(null)
    }
    setInput('')
  }

  async function deleteTask(id) {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    });
    setTasks(tasks.filter((t) => t.id !== id));
    // const newTask = tasks.filter((task) => task.id !== id)
    // setTasks(newTask)
  }

  function updateTask(id, message) {
    setUpdate(id)
    setInput(message)

  }


  return (
    <>
      <div className="app-container">
        <h1>To-Do-List</h1>

        <form onSubmit={submit}>
          <input type="text" name="task" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your task" />
          <button type="submit">{update === null ? "Add" : "Update"}</button>
        </form>

        <ul>
          {tasks.map((task) => {
            return <li key={task.id}>
              <span>{task.message}</span>
              <div className="btn-group">
                <button className="edit-btn" onClick={() => updateTask(task.id, task.message)}>edit</button>
                <button className="delete-btn" onClick={() => deleteTask(task.id)}>delete</button>
              </div>
            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
