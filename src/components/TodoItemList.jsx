import "../components/TodoItemList.css";
import TodoItem from "./TodoItem";
import Counter from "./Counter";

export default function TodoItemList(props) {
  const { toDoList, setToDoList, filteredBy } = props;

  const counter = toDoList.length;

  function removeItem(idToRemove) {
    const updatedList = toDoList.filter((item) => item.id !== idToRemove);
    setToDoList(updatedList);
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

  const removeCompletedItems = () => {
    const newList = toDoList.filter((item) => item.completed !== true);
    setToDoList(newList);
  };

  return (
    <div className="frameList">
      {toDoList.map((toDoItem) => {
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
      <Counter numberOfItems={counter} clearCompleted={removeCompletedItems} />
    </div>
  );
}
