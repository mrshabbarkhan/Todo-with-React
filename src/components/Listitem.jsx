import React, { useEffect, useState } from "react";

const Listitem = ({ todos, deletetodo, editFunc }) => {
  // console.log(color)
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    (() => {
      const randomColor =
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
      console.log(randomColor);
      setColor(randomColor);
    })();

  }, []);

  return (
    <li
      style={{ backgroundColor: color }}
      className="list-group-item shadow-sm">
      <span className="float-end">
        <p>{todos.text}</p>
        <button
          onClick={() => editFunc(todos)}
          className="btn btn-sm btn-warning mx-1">
          <i id="edit" class="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className="btn btn-sm btn-danger mx-1"
          onClick={() => deletetodo(todos.id)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </span>
    </li>
  );
};

export default Listitem;
