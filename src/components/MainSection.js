import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import Footer from "./Footer";
import VisibleTodoList from "../containers/VisibleTodoList";
import { completedTodoCount, todos } from "../recoil/todos";

const MainSection = () => {
  const completedCount = useRecoilValue(completedTodoCount);
  const [todoList, setTodoList] = useRecoilState(todos);
  const todosCount = todoList.length;

  const clearCompleted = () => {
    setTodoList((previousTodos) =>
      previousTodos.filter((todo) => todo.completed === false)
    );
  };

  const completeAllTodos = () =>
    setTodoList((previousTodos) => {
      const areAllMarked = previousTodos.every((todo) => todo.completed);
      return previousTodos.map((todo) => ({
        ...todo,
        completed: !areAllMarked,
      }));
    });

  return (
    <section className="main">
      {!!todosCount && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={completeAllTodos} />
        </span>
      )}
      <VisibleTodoList />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={clearCompleted}
        />
      )}
    </section>
  );
};

export default MainSection;
