import React from "react";

const ToDoList = ({ tasks, removeTask }) => {
  return (
    <div>
      <ul>
        {/* Map through the tasks array and render each task */}
        {tasks.map((task, index) => (
          <li key={index}>
            {task} {/* Display the task text */}
            {/* Button to remove the task */}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
