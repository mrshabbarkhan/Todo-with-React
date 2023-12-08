import React, { useEffect, useState } from "react";

const Form = ({ saveTodo, edit, updatetodo,changecolor }) => {
  const [text, setText] = useState("");
  console.log(edit);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (edit.editmode) {
      updatetodo(edit.todo.id, text);
    } else {
      saveTodo(text);
    }
    setText("");
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  return (
    <form onSubmit={handlesubmit}>
      <input
        required
        type="text"
        placeholder="Add a todo"
        className="form-control"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button  id="save" className="btn btn-success w-100 my-3">
        Save{" "}
      </button>
    </form>
  );
};

export default Form;
