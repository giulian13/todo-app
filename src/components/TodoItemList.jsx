import "../components/TodoItemList.css";
import TodoItem from "./TodoItem";
import Counter from "./Counter";

export default function TodoItemList(props) {
  const { toDoList, setToDoList } = props;
  const counter = toDoList.length;

  const modifiedToDoList = toDoList.map((toDoItem) => ({
    id: toDoItem.id,
    insertedText: toDoItem.insertedText,
    completed: false,
  }));

  function removeItem(idToRemove) {
    const updatedList = toDoList.filter((item) => item.id !== idToRemove);
    setToDoList(updatedList);
  }

  function clearCompleted() {
    setToDoList([]);
  }

  function isCompleted(id) {
    const status = toDoList.find((item) => item.id === id);
    return status.completed;
  }

  const changeToDoItem = (id) => {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="frameList">
      {modifiedToDoList.map((toDoItem) => {
        // console.log(toDoItem.completed);
        return (
          <TodoItem
            key={toDoItem.id}
            message={toDoItem.insertedText}
            keyValue={toDoItem.id}
            change={changeToDoItem}
            completed={toDoItem.completed}
            removeItem={removeItem}
            markAsComplet={changeToDoItem}
            isCompleted={isCompleted}
          />
        );
      })}
      <Counter numberOfItems={counter} clearCompleted={clearCompleted} />
    </div>
  );
}
