import React from "react";
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
const TaskList = ({todos,deleteTodo}) => {
    return ( 
    <>
    <div className="Tasklist">
        <h3 className="taskTitle">Tasks</h3>
        <ul>
        {todos.map((todo,index) => (
          <li key={index} className=" todo-item">
            <p>{todo}</p>
            <button className="deletebtn" onClick={() => deleteTodo(index)}> <FontAwesomeIcon icon={faTrash}/></button>
          </li>
        ))}
        </ul>
    </div>
    </> 
    );
}
 
export default TaskList;