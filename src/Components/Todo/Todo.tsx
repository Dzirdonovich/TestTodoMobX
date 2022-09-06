// @ts-ignore
import classes from "./todo.module.scss";
import todoState from "../../store/todoState";
import { observer } from "mobx-react-lite";
export interface ITodoProps {
  todo: {
    id: number;
    name: string;
    status: number;
  };
}

const Todo = observer(({ todo }: ITodoProps) => {
  return (
    <div className={classes.root}>
      <div>{todo.name}</div>
      <div className={classes.settings}>
        <div onClick={() => todoState.setStatus(todo.id)}>
          {todo.status === 0 ? `+` : "-"}
        </div>
        <button onClick={() => todoState.deleteTodo(todo.id)}>Удалить</button>
      </div>
    </div>
  );
});
export default Todo;
