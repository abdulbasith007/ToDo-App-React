import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState,useEffect } from "react"
import AddTask from './components/AddTask';

function App() {
  let initTodo;
  if(localStorage.getItem("tasksArr")===null)
    initTodo=[]
  else
    initTodo=JSON.parse(localStorage.getItem("tasksArr"))

    const [showForm,setShowForm]=useState(false)
    const [tasksArr,setTasks]=useState(initTodo)

  useEffect(()=>{
    localStorage.setItem("tasksArr",JSON.stringify(tasksArr))
  },[tasksArr])  

  

  function delTask(id){
    setTasks(tasksArr.filter(t=> t.id!==id))
    //localStorage.setItem("tasksArr",JSON.stringify(tasksArr))
  }

  function addTask(taskName){
    //console.log(`In add task : ${task}`)
    let newId=0;
    if(tasksArr.length!==0)
      newId=tasksArr[tasksArr.length-1].id+1
    const newTask={id:newId,name:taskName}
    setTasks([...tasksArr,newTask])
    setShowForm(false)

    //localStorage.setItem("tasksArr",JSON.stringify(tasksArr))

  }

  function showAddTaskForm(){
    //console.log("in SHow Add Task Form ")
    setShowForm(true)
  }

  return (
    <div className="container">
      <Header websiteName="Practice Project" showAddTaskForm={showAddTaskForm}/>
      {showForm && <AddTask onAdd={addTask}/>}      
      {tasksArr.length>0 ? (<Tasks tasksArr={tasksArr} onDel={delTask}/>) : <div>No tasks to show</div>}
    </div>
  );
}


export default App;
