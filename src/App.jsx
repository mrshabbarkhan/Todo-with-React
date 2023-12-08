import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Listgroup from "./components/Listgroup";

const App = () => {
  const [dark, setdark] = useState(true);
  const [todos, setTodos] = useState([
    { id: 1, text: "Code" },
    { id: 2, text: "Eat" },
    { id: 3, text: "Sleep" },
    { id: 4, text: "Repeat" },
  ]);
  const [edit, setedit] = useState({
    todo: {},
    editmode: false,
  });

  let changetheme = () => {
    if (dark) {
      setdark(false);
    } else {
      setdark(true);
    }
  };

  const saveTodo = (text) => {
    setTodos([{ id: crypto.randomUUID(), text: text }, ...todos]);
  };
  const deletetodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editFunc = (todo) => {
    setedit({
      todo: todo,
      editmode: true,
    });
  };

  const updatetodo = (oldid, newtext) => {
    setTodos(
      todos.map((item) => {
        return item.id === oldid ? { ...item, text: newtext } : item;
      })
    );
    setedit({
      todo: {},
      editmode: false,
    });
  };

  return (
    <>
      <div className="container p-5">
        <div className="box">
          <Navbar dark={dark} changetheme={changetheme} />
          <Form updatetodo={updatetodo} saveTodo={saveTodo} edit={edit}  />
          <Listgroup
            todos={todos}
            deletetodo={deletetodo}
            editFunc={editFunc}
          />
        </div>
      </div>
    </>
  );
};

export default App;
