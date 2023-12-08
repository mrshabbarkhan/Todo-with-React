import React from "react";
import Listitem from "./listitem";



const Listgroup = ({todos,deletetodo,editFunc,color}) => {
  return <ul className="list-group">
    {
        todos.map((todo)=><Listitem key={todo.id} todos={todo} deletetodo={deletetodo}  editFunc={editFunc}/>)
    }
  </ul>;
};

export default Listgroup;
