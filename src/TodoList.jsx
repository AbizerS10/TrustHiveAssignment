import React from "react";

const ToDoLists = ({onSelect, text, id}) => {
  return (
    <div className="todo-style">
      <i
        className="fas fa-times-circle"
        aria-hidden="true"
        onClick={() => {
          onSelect(id);
        }}
      ></i>
      <li>{text}</li>
    </div>
  );
};

export default ToDoLists;
