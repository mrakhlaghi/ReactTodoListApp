const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    // <div className={styles.todo}>
    <div className="todo">
      <div
        onClick={onComplete}
        // className={todo.isCompleted ? styles.completed : ""}
        className={`todoText ${todo.isCompleted ? "completed" : ""}`}
      >
        {todo.text}
      </div>
      <div>
        {/* <button className={`${styles.add} ${styles.remove}`} onClick={onEdit}> */}
        <button className="btn" onClick={onEdit}>
          Edit
        </button>
        <button className="btn remove" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
