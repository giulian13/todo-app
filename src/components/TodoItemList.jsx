import "../components/TodoItemList.css";
import TodoItem from "./TodoItem";

export default function TodoItemList() {
  return (
    <div className="frameList">
      <TodoItem message="test" />
      <TodoItem message="Ceva si inca ceva" />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
