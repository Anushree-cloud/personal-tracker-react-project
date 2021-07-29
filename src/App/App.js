import { useState } from 'react';
import Header from '../components/Header'
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';


function App() {
  const [toggleAddBtn, setToggleAddBtn] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meet Max",
      day: "29 July at 4.00pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meet Jane",
      day: "30 July at 4.30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Meet Sylvie",
      day: "31 July at 6.00pm",
      reminder: false
    },
  ])

  //delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  //add task
  const addTask = (task) => {
    console.log(task);
    const id = Date.now()
    const newTask = { id, ...task }
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
        <Header onToggleAddBtn={() => setToggleAddBtn(!toggleAddBtn)} />

        {toggleAddBtn && <AddTask onAdd={addTask} />}

        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onRemind={toggleReminder} />
        ) : "No Tasks to Show. Add some!" }

    </div> 
  );
}

export default App;
