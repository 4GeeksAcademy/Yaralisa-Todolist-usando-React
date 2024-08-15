import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListaTareas = () => {
  const [tasks, setTasks] = useState([
    { text: "Make the bed ", completed: false },
    { text: " hasndsWash my ", completed: false },
    { text: " Walk the fissh", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const countIncompleteTasks = () => {
    return tasks.filter((task) => !task.completed).length;
  };

  return (
    <div className="">
      <div className="container ">
        <h1 className="text-center">To Dos</h1>
        <div className="todo-list">
            <div className="input-group">
     <span class="input-group-text">What needs to be done?</span>
     <textarea class="form-control" aria-label="With textarea"     value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress} ></textarea>
   </div>

          {tasks.length === 0 && (
            <div
              className="alert alert-danger d-flex align-items-center mt-3"
              role="alert"
            >
              <i className="fa-solid fa-triangle-exclamation"></i>
              <div className="ms-1">No tasks, add tasks</div>
            </div>
          )}
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="todo-item text-center ">
                
                <span
                  className="todo-text"
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
                <button
                  type="button"
                  style={{ border: "none", background: "none" }}
                  className="col-1 btn btn-outline-light"
                  onClick={() => deleteTask(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
          <div className="footer">
            <span>{countIncompleteTasks()} items left</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaTareas;