import "../App.css";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Progress from "./progress";
import Urgent from "./urgent";
import Labels from "./labels";
function App() {

  return (
    <>
    <Header />
    <AddTodo />
    <Progress />
    <Urgent />
    <Labels />
    </>
    
  );
}

export default App;
