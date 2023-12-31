import React, { useRef } from "react";

interface NewToDoProps {
  onAddToDo: (todoText: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddToDo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <input type="text" id="todo-text" ref={textInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewToDo;
