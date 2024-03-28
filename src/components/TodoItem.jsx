import "../components/TodoItem.css";
import iconCross from "../img/icon-cross.svg";
import iconCheck from "../img/icon-check.svg";

export default function TodoItem(props) {
  const { message } = props;
  return (
    <div className="toDoItem">
      <img className="checkButton" src={iconCheck} alt="delete button" />
      <p>{message}</p>
      <img className="deleteButton" src={iconCross} alt="delete button" />
    </div>
  );
}
