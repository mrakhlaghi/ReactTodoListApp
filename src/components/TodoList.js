import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({
  todos,
  onComplete,
  onDelete,
  onUpdateTodo,
  loading,
  fetchError,
}) => {
  const [edit, setEdit] = useState({ id: null, title: "", completed: false });

  console.log(fetchError.message);
  console.log(loading);
  const renderTodos = () => {
    if (loading) return <div className="text-place"><p>Loading ...</p></div>;
    if (fetchError) return <div className="text-place"><p>{fetchError.message}</p></div>;
    if (todos.length === 0) {
      return (
        <div className="text-place">
          <p>add some todos</p>
        </div>
      );
    }
   if( !fetchError && !loading && todos.length !== 0){
    return (
      <div className="todoList">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={() => onComplete(todo.id)}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => setEdit(todo)}
            />
          );
        })}
      </div>
    );
   }
  };

  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, title: "" });
  };

  return (
    <div>
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
};

export default TodoList;
