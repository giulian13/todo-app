import "../components/TodoItem.css";
import iconCross from "../img/icon-cross.svg";
import iconCheck from "../img/icon-check.svg";
import { useState } from "react";

export default function TodoItem(props) {
  const { message, keyValue, toDoList, setToDoList } = props;
  const [checkState, setCheckState] = useState(false);

  let divStyle = { textDecoration: "line-through" };

  return (
    <div className="toDoItem">
      <div
        className="checkButton"
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
          setToDoList(toDoList.filter((x) => x !== message));
        }}
      />
    </div>
  );
}
