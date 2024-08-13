import "../components/TodoItem.css";
import iconCross from "../img/icon-cross.svg";
import iconCheck from "../img/icon-check.svg";

export default function TodoItem(props) {
  const { message, keyValue, removeItem, markAsComplet, isCompleted, change } =
    props;

  let divStyle = {
    textDecoration: "line-through",
    color: "hsl(233, 14%, 35%)",
  };

  return (
    <div className="toDoItem">
      <div
        className={` checkButton ${
          isCompleted(keyValue) ? "checkButtonBackground" : ""
        }`}
        onClick={() => {
          change(keyValue);
          markAsComplet(keyValue);
        }}
      >
        {isCompleted(keyValue) && <img src={iconCheck} alt="check bullet" />}
      </div>
      <p style={isCompleted(keyValue) ? divStyle : {}}>{message}</p>
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
