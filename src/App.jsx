import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    "Do 10 Jumping jacks",
    "Submit Assignment",
    "Cook meal",
    "Feed the dragon",
  ]);
  const [newTask, setNewTask] = useState("");
  return (
    <>
      <div
        className="container bg-white h-fit p-8 rounded-xl
       w-[450px]"
      >
        <h1 className="text-2xl font-semibold pt-0 pb-3 ">
          To-Do-List 📑{" "}
        </h1>
        <form
          className=" form bg-gray-300  rounded-3xl"
          onSubmit={(e) => {
            e.preventDefault();
            setTasks([...tasks, newTask]);
            setNewTask("");
          }}
        >
          <input
            type="text"
            placeholder="Add your task"
            className="px-5 bg-transparent  w-[70%] 
            "
            onInput={(e) =>
              setNewTask(e.target.value)
            }
            value={newTask}
          />
          <button
            className="w-[30%] bg-[#ff4500] h-12 
          rounded-3xl "
          >
            Add
          </button>
        </form>
        {tasks.map((task) => {
          return (
            <div className="flex w-full justify-between px-3 mt-2 bg-gray-200 rounded-lg items-center">
              <div className="flex items-center gap-5 p-3 ">
                <div className="rounded-full overflow-hidden items-center h-6 w-6  justify-center">
                  <input
                    type="checkbox"
                    className="check cursor-pointer h-7 w-7 -m-0.5 text-white "
                    onChange={(e) => {
                      e.target.checked
                        ? console.log("checked")
                        : console.log(
                            "unchecked"
                          );
                    }}
                  />
                </div>
                <p>{task}</p>
              </div>
              <button
                className="text-gray-500"
                onClick={() => {
                  const updatedTasks =
                    tasks.filter(
                      (item) => item !== task
                    );
                  setTasks(updatedTasks);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
