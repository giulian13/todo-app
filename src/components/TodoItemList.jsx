import "../components/TodoItemList.css";
import TodoItem from "./TodoItem";

export default function TodoItemList(props) {
  const { toDoList, setToDoList } = props;

  return (
    <div className="frameList">
      {toDoList.map((x, index) => {
        return (
          <TodoItem
            message={x}
            keyValue={index}
            toDoList={toDoList}
            setToDoList={setToDoList}
          />
        );
      })}
    </div>
  );
}
