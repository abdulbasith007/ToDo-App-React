import Task from "./Task";

function Tasks({ tasksArr,onDel }) {

//const tasksArr=[{id:1,name:"t1"},{id:2,name:"t2"},{id:3,name:"t3"}]

    return (
        <>
            {tasksArr.map(t => (<h3 key={t.id}>
                <Task task={t} onDel={onDel}/>
            </h3>))}
        </>
    );
  }

  
  export default Tasks;
  