import { useState } from 'react';
import './App.css';
import Display from './components/DisplayTask';
import TaskForm from './components/Task';



function App() {

  const [taskList, setTaskList] = useState([])
  
  return (
    <div className="App">
      <TaskForm taskList={taskList} setTaskList={setTaskList}/>
      <Display taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
