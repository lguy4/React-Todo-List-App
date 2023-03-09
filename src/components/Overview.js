import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul className="taskList">
      {tasks.map((task) => {
        return (<li key={task.id} className="taskItem">{task.text}</li>);
      })}
    </ul>
  );
};


export {Overview}
