import "../components/TodoItemList.css";
import TodoItem from "./TodoItem";

export default function TodoItemList(props) {
  const { toDoList, setToDoList } = props;

  const modifiedToDoList = toDoList.map((toDoItem, index) => ({
    id: index + 1,
    insertedText: toDoItem.insertedText,
  }));

  return (
    <div className="frameList">
      {modifiedToDoList.map((toDoItem) => {
        return (
          <TodoItem
            key={toDoItem.id}
            message={toDoItem.insertedText}
            keyValue={toDoItem.id}
            toDoList={modifiedToDoList}
            setToDoList={setToDoList}
          />
        );
      })}
    </div>
  );
}
