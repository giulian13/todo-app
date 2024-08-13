import "./FiltersTodo.css";

export default function FiltersTodo(props) {
  const { setFilteredBy } = props;

  return (
    <div className="filtersFrame">
      <p>All</p>
      <p>Active</p>
      <p>Completed</p>
    </div>
  );
}
