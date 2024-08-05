import "../App.css";
import React from "react";
import TaskList from "./Tasklist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faTag } from "@fortawesome/free-solid-svg-icons";
const AddTodo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tag, setTag] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      setTodo([...todo, input]);
      setTag([...tag, tagInput]);
      console.log(todo);
    }
    setInput("");
  };
  const deleteTodo = (index) => {
    setTodo(todo.filter((todo, i) => i !== index));
  };
  return (
    <div className="AddTodo">
      <div className="app-input">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value.toUpperCase());
          }}
          placeholder="Add Tasks"
          type="text"
        />
      </div>
      <div className="label">
        <FontAwesomeIcon className="label-icon" icon={faTag} />
        <input
          type="text"
          placeholder="label"
          value={tagInput}
          onChange={(e) => {
            setTagInput(e.target.value);
          }}
        />
      </div>
      <button className="add-task-btn" onClick={addTask}>
        {" "}
        Done
      </button>
      <TaskList todos={todo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default AddTodo;
