import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    if (input.length > 0){
      setTodo([...todo, input]);
      console.log(todo);
    }
    setInput("");
  };
  const deleteTodo = (index) =>{
    setTodo(todo.filter((todo,i) => i !== index))
  }
  return (
    <div className="App">
      <div className="app-input">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value.toUpperCase());
          }}
          placeholder="Add Tasks"
          type="text"
        />
        <button onClick={addTask}>+</button>
      </div>
      <ul className="todos">
        {todo.map((todo,index) => (
          <li key={index} className=" todo-item">
            <p>{todo}</p>
            <button className="deletebtn" onClick={() => deleteTodo(index)}> delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
