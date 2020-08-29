import React from "react";
import { Store } from "../store/index";
import { useSetRecoilState } from "recoil";

let id = 0;
const getId = () => {
  return id++;
};

const TodoCreator = () => {
  const [inputValue, setInputValue] = React.useState("");
  const setTodoList = useSetRecoilState(Store);

  return (
    <>
      <h3>Add Item</h3>
      <input
        type="text"
        className="create-todo"
        value={inputValue}
        onChange={({ target: { value } }) => {
          setInputValue(value);
        }}
      />
      <button
        onClick={() => {
          setTodoList((prevState) => [
            ...prevState,
            {
              id: getId(),
              text: inputValue,
              isComplete: false,
            },
          ]);
          setInputValue("");
        }}
      >
        Add
      </button>
    </>
  );
};
export default TodoCreator;
