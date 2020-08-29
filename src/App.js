import React from "react";
import { useRecoilState } from "recoil";
import { Store } from "./store/index";
import { Title, Title3 } from "./components/titleTodo";
import Container from "./components/containerTodo";
import TodoCreator from "./components/todoCreator";
import TodoItem from "./components/todoItem";

const App = () => {
  const todos = useRecoilState(Store);

  return (
    <Container>
      <Title title="Todo List" />
      <TodoCreator />
      <Title3 title="Todo" />
      {todos[0].map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </Container>
  );
};

export default App;
