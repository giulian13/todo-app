import "../components/Counter.css";

export default function Counter(props) {
  const { numberOfItems, setToDoList } = props;

  function clearCompleted() {
    setToDoList([]);
  }

  return (
    <div className="counter">
      <div className="counterContainer">
        <p>{numberOfItems} items left</p>
        <p onClick={clearCompleted}>Clear Completed</p>
      </div>
    </div>
  );
}
