import React from "react";
import TodoList from "../components/TodoList";
import { filteredTodos, todos } from "../recoil/todos";
import { useRecoilValue, useSetRecoilState } from "recoil";

const VisibleTodoList = () => {
  const filteredTodoList = useRecoilValue(filteredTodos);
  const setTodos = useSetRecoilState(todos);

  const completeTodo = (todoId) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== todoId)
    );
  };

  const editTodo = (todoId, text) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === todoId ? { ...todo, text } : todo
      )
    );
  };

  return (
    <TodoList
      filteredTodos={filteredTodoList}
      actions={{ completeTodo, deleteTodo, editTodo }}
    />
  );
};

export default VisibleTodoList;
