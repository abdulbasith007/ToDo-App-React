//import { FaTimes } from 'react-icons/fa'

function Task({task,onDel}) {
    // return (
    //     <span>{task.name}
    //     <FaTimes onClick={()=> onDel(task.id)}/>
    //     </span>
        
    // )
    return (
        <div>
            <h3>{task.name}</h3>
            <button onClick={()=> onDel(task.id)}>Delete</button>
        </div>
    )

}


export default Task;
