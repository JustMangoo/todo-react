import React, { useState } from "react";
import ToDoList from "./ToDoList";

const ToDo = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to store the input value
  const [input, setInput] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]); // Add the new task to the tasks array
      setInput(""); // Clear the input field
    }
  };

  // Function to remove a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index); // Filter out the task at the given index
    setTasks(newTasks); // Update the tasks state
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {/* Input field for adding tasks */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update the input state as the user types
        placeholder="Add a new task"
      />
      {/* Button to add the task */}
      <button onClick={addTask}>Add Task</button>

      {/* Render the ToDoList component and pass tasks and removeTask as props */}
      <ToDoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default ToDo;
