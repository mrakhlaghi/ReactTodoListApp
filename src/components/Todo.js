const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    // <div className={styles.todo}>
    <div className="todo">
      <div
        onClick={onComplete}
        // className={todo.completed ? styles.completed : ""}
        className={`todoText ${todo.completed ? "completed" : ""}`}
      >
        {todo.title}
      </div>
      <div>
        {/* <button className={`${styles.add} ${styles.remove}`} onClick={onEdit}> */}
        <span className="editBtn" onClick={onEdit}></span>
        {/* <span className="editBtn" onClick={onEdit}><img src={editImage} alt="edit"></img></span> */}
        <span className="editBtn" onClick={onEdit}>
          <i className="fa-regular fa-pen-to-square"></i>
        </span>

        <span className="deleteBtn" onClick={onDelete}>
          <i className="fa-regular fa-trash-can"></i>
        </span>
      </div>
    </div>
  );
};

export default Todo;
