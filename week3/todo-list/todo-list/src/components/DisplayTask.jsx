import React from "react";

const Display = (props) => {
    const {taskList, setTaskList} = props;

    const completed = (task) => {
        task.completed = !task.completed;
        setTaskList([...taskList])
    }

    const slashed = (completed) => {
        if (completed === true) {
            return "completed";
        } else {
            return "notCompleted"
        }
        
    };


    const deleteButton = (idFromTask) => {
        setTaskList(
            taskList.filter((task)=>{
                return task.id !== idFromTask;
            })
        )
    }
    return (
        <>
            <div>
                {taskList.map((task)=>(
                    <div className={slashed(task.completed)} key={task.id}>
                        <p>{task.taskName}</p>
                        <input type="checkbox" onChange={() => completed(task)} />
                        <button onClick={() => deleteButton(task.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}




export default Display;