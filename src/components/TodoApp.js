import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// import styles from "../App.module.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedFilterOption, setSelectedFilterOption] = useState({ value: "", label: "All" });

  useEffect(() => {
    filterTodos(selectedFilterOption);
  }, [todos, selectedFilterOption]);

  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    // setFilteredTodos()
  };
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    console.log(filteredTodos);
    setTodos(filteredTodos);
  };
  const unCompTodos = todos.filter((todo) => !todo.isCompleted).length;

  // const editTodo = (id) => {
  //   const selectedTodo = todos.find((todo) => todo.id === id);

  // };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const filterTodos = (selectedFilterOption) => {
    switch (selectedFilterOption.value) {
      case "completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
    // console.log(selectedFilterOption);
  };

  const selectHandler = (e) => {
    console.log(e.value);
    setSelectedFilterOption(e);
    filterTodos(e.value);
  };

  return (
    <div className="container">
      <Navbar
        unCompTodos={unCompTodos}
        selectedFilterOption={selectedFilterOption}
        filterOnchange={selectHandler}
        filterTodos={filterTodos}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={deleteTodo}
        // onEdit={editTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
