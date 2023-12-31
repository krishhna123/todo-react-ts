import React from "react";

interface ToDoListProps {
  items: { id: string; text: string }[];
  onDeleteDoTo: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
  return (
    <div className="ToDoList">
      {" "}
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button
              onClick={props.onDeleteDoTo.bind(null, todo.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
