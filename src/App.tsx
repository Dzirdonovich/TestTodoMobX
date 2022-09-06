import React from "react";
// @ts-ignore
import classes from "./main.module.scss";
import Input from "./Components/Input/Input";
import Todo, { ITodoProps } from "./Components/Todo/Todo";

import todoState from "./store/todoState";
import { observer } from "mobx-react-lite";
const App = observer(() => {
  const sortType = ["ВСЕ", "ВЫПОЛНЕНЫЕ", "НЕВЫПОЛНЕНЫЕ"];

  return (
    <div className={classes.root}>
      <Input />
      <div className={classes.sort}>
        {sortType.map((value, index) => (
          <div
            onClick={() => todoState.setFilter(index)}
            className={todoState.filtered === index ? classes.setFilter : ""}
          >
            {value}
          </div>
        ))}
      </div>
      <div className={classes.todoArea}>
        {todoState.filtered === 0
          ? todoState.todo.map((value) => <Todo todo={value} />)
          : todoState.filtered === 1
          ? todoState.todo.map((value) =>
              value.status === 0 ? <Todo todo={value} /> : ""
            )
          : todoState.filtered === 2
          ? todoState.todo.map((value) =>
              value.status === 1 ? <Todo todo={value} /> : ""
            )
          : ""}
      </div>
    </div>
  );
});

export default App;
