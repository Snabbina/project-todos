import React from "react";
import { useSelector } from "react-redux";

import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  return (
    <>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          name={item.name}
          isCompleted={item.isCompleted}
        />
      ))}
    </>
  );
};
