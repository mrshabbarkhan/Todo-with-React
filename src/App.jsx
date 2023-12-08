import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Listgroup from "./components/listgroup";

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

  // let edittodo =(oldtodo)=>{
  //  setedit =({
  //   todo: oldtodo,
  // editmode: true,
  //  })
  // }

  // const saveTodo = (text) => {
  //   const newTodo = {
  //     id: crypto.randomUUID(),
  //     text:text
  //   };
  //   setTodos([newTodo, ...todos]);
  // };
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

  // const [color, setcolor] = useState("#7136f0");

  // const changecolor = () => {
  //   const color2 = "#" * Math.floor(Math.random() * 16777215).toString(16);
  //   setcolor(color2);
  // };
  // useEffect(() => {
  //   changecolor();
  // }, [todos]);

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
            // color={color}
          />
        </div>
      </div>
    </>
  );
};

export default App;
