import "../components/TodoItem.css";
import iconCross from "../img/icon-cross.svg";
import iconCheck from "../img/icon-check.svg";
import { useState } from "react";

export default function TodoItem(props) {
  const { message, keyValue, toDoList, setToDoList } = props;
  const [checkState, setCheckState] = useState(false);

  let divStyle = {
    textDecoration: "line-through",
    color: "hsl(233, 14%, 35%)",
  };

  function removeItem(idToRemove) {
    const updatedList = toDoList.filter((item) => item.id !== idToRemove);
    setToDoList(updatedList);
  }

  return (
    <div className="toDoItem">
      <div
        className={` checkButton ${checkState ? "checkButtonBackground" : ""}`}
        onClick={() => {
          checkState ? setCheckState(false) : setCheckState(true);
        }}
      >
        {checkState && <img src={iconCheck} alt="check bullet" />}
      </div>
      <p style={checkState ? divStyle : {}}>{message}</p>
      <img
        className="deleteButton"
        src={iconCross}
        alt="delete button"
        onClick={() => {
          removeItem(keyValue);
        }}
      />
    </div>
  );
}
