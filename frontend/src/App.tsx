import './App.css';
import './global.css';

import InputField from "../src/components/ui/inputField"
import { useState } from 'react';
import { Task } from './model'
import TaskList from './components/ui/TaskList';

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (task){
      setTasks([...tasks, {id: Date.now(), task, isDone:false}])
      setTask("")
    }
    
  };

  console.log(tasks)

  return (
    <div className="App">
      <span className='heading'>Board thingy</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
      <TaskList/>
      {tasks.map( (t) => 
      <li>{t.task}</li>)}
    </div>
  );
}

export default App;
