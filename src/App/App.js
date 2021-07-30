import { useState, useEffect } from 'react';
import Header from '../components/Header'
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';


function App() {
  const [toggleAddBtn, setToggleAddBtn] = useState(false)
  const [tasks, setTasks] = useState([])

  //fetch data from mock api
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:8000/tasks')
    const data = await response.json()
    console.log(data)
    return data
  }

  //get tasks from mock api
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //delete tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  //add task
  const addTask = async (task) => {
    const response = await fetch('http://localhost:8000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const newTask = await response.json()
    setTasks([...tasks, newTask])
  }

  // reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (
      (task.id === id) ? {...task, reminder: !task.reminder} : task 
    )))
  }


  return (
    <div className="container">
        <Header onToggleAddBtn={() => setToggleAddBtn(!toggleAddBtn)} showAdd={toggleAddBtn} />
        
        {
          toggleAddBtn ? <AddTask onAdd={addTask} /> : (tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onRemind={toggleReminder} /> : "No Tasks to Show. Add some!" )
        }

    </div> 
  );
}

export default App;
