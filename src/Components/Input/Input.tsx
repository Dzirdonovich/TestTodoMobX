// @ts-ignore
import classes from "./input.module.scss";
import { useState } from "react";
import todoState from "../../store/todoState";

const Input = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className={classes.root}>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Введите задачу"
        type="text"
      />
      <button onClick={() => todoState.addTodo(inputValue)} type="submit">
        Отправить
      </button>
    </div>
  );
};
export default Input;
