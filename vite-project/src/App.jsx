import { useState } from "react";

import "./style.css";

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveToDoLiar = (event) => {
    let toname = event.target.toname.value.trim();

    if (toname === "") {
      alert(`Please enter a Name`);
    }

    if (!todolist.includes(toname)) {
      let finalList = [...todolist, toname];
      setTodolist(finalList);
    } else {
      alert("todo is alerdy Exits");
    }

    event.preventDefault();
  };

  let list = todolist.map((value, index) => {
    return (
      <TodoListItems
        key={index}
        value={value}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={saveToDoLiar}>
        <input type="text" name="toname" />
        <button>Save</button>
      </form>
      <div className="outerdiv">
        <ul>{list}</ul>
      </div>
    </>
  );
}

export default App;

function TodoListItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);

  let deletItem = () => {
    let finalData = todolist.filter((value, index) => index !== indexNumber);

    setTodolist(finalData);
  };
  const checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {indexNumber + 1} &nbsp;
      {value}
      <span onClick={deletItem}>&times;</span>
    </li>
  );
}
