import React , {useState} from "react";

const TaskForm = (props) => {
    const [task, setTask] = useState('');
    const {taskList, setTaskList} = props
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskList([...taskList, {taskName: task, completed: false, id: crypto.randomUUID()}]);
        setTask("");
    }

    return (
        <>
            <div className="task-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={task.task} onChange={(e) => setTask(e.target.value)}/>
                    <button>Add Task</button>
                </form>
            </div>
        </>    
)}

export default TaskForm;
