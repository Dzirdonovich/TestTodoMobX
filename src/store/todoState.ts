import { makeAutoObservable } from "mobx";

class TodoState {
  todo = [
    {
      id: 0,
      name: "Насыпать корм",
      status: 0,
    },
  ];
  filtered = 0;
  constructor() {
    makeAutoObservable(this);
  }

  setFilter(payload: number) {
    this.filtered = payload;
  }

  addTodo(payload: string) {
    const newId = this.todo.length;
    const newTodo = {
      id: newId,
      name: payload,
      status: 1,
    };
    this.todo.push(newTodo);
  }

  setStatus(id: number) {
    this.todo.filter((value) => value.id === id)[0].status === 0
      ? (this.todo.filter((value) => value.id === id)[0].status = 1)
      : (this.todo.filter((value) => value.id === id)[0].status = 0);
  }

  deleteTodo(id: number) {
    console.log(id);
    let currentTodo = this.todo.findIndex((value) => value.id === id);

    console.log(currentTodo);
    this.todo.splice(currentTodo, 1);
  }
}
export default new TodoState();
