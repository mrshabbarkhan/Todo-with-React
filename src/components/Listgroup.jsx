import React, { useState } from "react";
import Listitem from "./Listitem";

const Listgroup = ({ todos, deletetodo, editFunc }) => {


  return (
    <ul className="list-group">
      {todos.map((todo) => {
        return (
          <  >
            <Listitem
            key={todo.id}
              todos={todo}
              deletetodo={deletetodo}
              editFunc={editFunc}
            />
          </>
        );
      })}
    </ul>
  );
};

export default Listgroup;
