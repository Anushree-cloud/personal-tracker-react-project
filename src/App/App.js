import { useState } from 'react';
import Header from '../components/Header'
import Tasks from '../components/Tasks';
function App() {

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
      reminder: true
    },
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div> 
  );
}

export default App;
