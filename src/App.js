import React, {useState} from "react";
import './Style.css';
import uniqid from "uniqid";
import { Overview } from "./components/Overview";



const App = () => {
  const [state, setState] = useState(
    {task:
      {id: uniqid(), 
      text: '',
      completed: false}, 
    tasks: []}
  );

  const onChange = (e) => {
    setState({
      task: 
      {id: state.task.id, 
        text: e.target.value},
      tasks: state.tasks,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setState({
      tasks: state.tasks.concat(state.task),
      task: {id: uniqid(), text: ''}
    });
  }

  const {task, tasks} = state;
  
  return (
    <div className="container">
      <h1>Todo List</h1>
      <form className="addTask" onSubmit={onSubmit}>
        <input id="taskText" type="text" value={task.text} onChange={onChange} required/>
        <input type="submit"/>
      </form>
      <div className="taskListContainer">
        <Overview tasks={tasks}/>
      </div>
    </div>
  );
};


export {App}
