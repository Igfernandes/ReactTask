import { useState, useEffect } from 'react';
import './App.css'
import Tasks from './components/tasks/tasks';
import AddTask from './components/addTask/addTask';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/_header';
import Button from './components/button/_button';
import Details from './components/detailsTask/_detailsTask';
import axios from 'axios';


function App() {
  
  const [$tasks, setTasks] = useState([
    {
      id: 0,
      title: "José migueira",
      completed: true
    },
    {
      id: 1,
      title: "Gabriela Pereira",
      completed: false
    },
  ]);

  useEffect(() =>{
    const fetchTasks = async () =>{
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      setTasks(data);
    }

    fetchTasks();
  }, [])

  const handleClickIT = ($id) =>{
    
    const NewTasks = $tasks.map( (task) =>{
      
      if(task.id == $id) return {... task, completed: !task.completed}
      
      return task;
    })

    setTasks(NewTasks);
  }

  const handleClickRemove = ($id) =>{
    const NewTask = $tasks.filter(task => task.id != $id)

    setTasks(NewTask);
  }

  const handleAddTask = ($inputTtitle)=>{
    const New$tasks = [... $tasks, {
      id: ($tasks.length + 1),
      title: $inputTtitle,
      completed: false
    }]

    setTasks(New$tasks);
  }

  return (
    <div className="content">
      <Router>
        <div className="task">
          <Header></Header>
         <Routes>
            <Route path="/" exact element={
              <>
                <AddTask handleAddTask={handleAddTask} ></AddTask>
                <Tasks $tasks={$tasks} handleClickIT={handleClickIT} handleClickRemove={handleClickRemove}></Tasks>  
              </>
              }>
            </Route>  
             <Route path="/:task" exact element={
                <Details></Details>
              }>
            </Route> 
         </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
