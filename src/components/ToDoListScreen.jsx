import "./ToDoListScreen.css";

import TodoItemList from "./TodoItemList";
import InputComponent from "./InputComponent";
import FiltersTodo from "./FiltersTodo";

import { useState } from "react";

export default function ToDoListScreen(props) {
  const { isLightTheme } = props;

  const [toDoList, setToDoList] = useState([]);

  const [itemNumber, setItemNumber] = useState(0);
  const [filteredBy, setFilteredBy] = useState("all");

  const pushNewItem = (inputText) => {
    setToDoList([
      ...toDoList,
      { id: itemNumber, insertedText: inputText, completed: false },
    ]);
    setItemNumber(itemNumber + 1);
  };

  return (
    <div className="listFrame">
      <InputComponent
        insertToDoItem={pushNewItem}
        isLightTheme={isLightTheme}
      />
      <TodoItemList
        toDoList={toDoList}
        setToDoList={setToDoList}
        filteredBy={filteredBy}
        isLightTheme={isLightTheme}
      />
      <FiltersTodo setFilteredBy={setFilteredBy} isLightTheme={isLightTheme} />
    </div>
  );
}
