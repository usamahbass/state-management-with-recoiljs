import React from "react";
import { useRecoilState } from "recoil";
import { Store } from "../store/index";

const replaceItem = (arr, index, newTodo) => {
  return [...arr.slice(0, index), newTodo, ...arr.slice(index + 1)];
};

const removeItem = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const TodoItem = ({ item }) => {
  const [todo, setTodo] = useRecoilState(Store);
  const index = todo.findIndex((i) => i === item);

  const editTodo = ({ target: { value } }) => {
    const newTodo = replaceItem(todo, index, {
      ...item,
      text: value,
    });

    setTodo(newTodo);
  };

  const todoComplete = () => {
    const completeTodo = replaceItem(todo, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodo(completeTodo);
  };

  const deleteTodo = () => {
    const todoDelete = removeItem(todo, index);

    setTodo(todoDelete);
  };

  return (
    <>
      <ul id="incomplete-task">
        <li>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={todoComplete}
          />
          <label>{item.text}</label>
          <input type="text" onChange={editTodo} />
          <button onClick={deleteTodo}>Delete</button>
        </li>
      </ul>
    </>
  );
};

export default TodoItem;
