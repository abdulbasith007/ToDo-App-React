import { useState } from "react"

function AddTask(props) {
    
    const [nameOfTask,setNameOfTask]=useState("")

    const onSubmit=(e)=>{
            e.preventDefault()
            //console.log("Inside on Submit")
            //Validate input 
            props.onAdd(nameOfTask)
            setNameOfTask("")
    }

    return (
        <form>
            <input type="text" value={nameOfTask} onChange={e=>setNameOfTask(e.target.value)} placeholder="Name of the task" />
            <input type="submit" value="Submit" onClick={onSubmit} />
        </form>
    );
}

export default AddTask;
