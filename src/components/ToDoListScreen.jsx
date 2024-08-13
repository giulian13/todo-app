import "./ToDoListScreen.css";

import TodoItemList from "./TodoItemList";
import InputComponent from "./InputComponent";
import FiltersTodo from "./FiltersTodo";

import { useState } from "react";

export default function ToDoListScreen() {
  const [toDoList, setToDoList] = useState([]);

  const [itemNumber, setItemNumber] = useState(0);

  const pushNewItem = (inputText) => {
    setToDoList([
      ...toDoList,
      { id: itemNumber, insertedText: inputText, completed: false },
    ]);
    setItemNumber(itemNumber + 1);
    // console.log(toDoList);
  };

  return (
    <div className="listFrame">
      <InputComponent insertToDoItem={pushNewItem} />
      <TodoItemList toDoList={toDoList} setToDoList={setToDoList} />
      <FiltersTodo />
    </div>
  );
}
