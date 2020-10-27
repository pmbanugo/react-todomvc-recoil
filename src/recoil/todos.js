import { atom, selector } from "recoil";

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../constants/TodoFilters";

export const todos = atom({
  key: "todos",
  default: [],
});

export const visibilityFilter = atom({
  key: "visibilityFilter",
  default: SHOW_ALL,
});

export const filteredTodos = selector({
  key: "filteredTodos",
  get: ({ get }) => {
    const filter = get(visibilityFilter);
    const list = get(todos);

    switch (filter) {
      case SHOW_COMPLETED:
        return list.filter((t) => t.completed);
      case SHOW_ACTIVE:
        return list.filter((t) => !t.completed);
      default:
        return list;
    }
  },
});

export const completedTodoCount = selector({
  key: "completedTodoCount",
  get: ({ get }) => {
    const list = get(todos);

    return list.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    );
  },
});
