import React from "react";
import TodoTextInput from "./TodoTextInput";
import { useSetRecoilState } from "recoil";
import { todos } from "../recoil/todos";

const Header = () => {
  const setTodos = useSetRecoilState(todos);

  const save = (text) => {
    if (text.length !== 0) {
      setTodos((todos) => [
        ...todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ]);
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        onSave={save}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
