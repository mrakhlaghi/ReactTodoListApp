import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// import styles from "../App.module.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedFilterOption, setSelectedFilterOption] = useState({
    value: "",
    label: "All",
  });

  useEffect(() => {
    async function getTodos() {
      setLoading(true);
      await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          let todosData = res.data.slice(0, 6);
          setTodos(todosData);
          setLoading(false);
        })
        .catch((error) => {
          setFetchError(error);
          setLoading(false);
          console.log(fetchError);
        });
    }

    getTodos();
  }, []);

  useEffect(() => {
    filterTodos(selectedFilterOption);
  }, [todos, selectedFilterOption]);

  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.completed = !selectedTodo.completed;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    console.log(filteredTodos);
    setTodos(filteredTodos);
  };
  const unCompTodos = todos.filter((todo) => !todo.completed).length;

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.title = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const filterTodos = (selectedFilterOption) => {
    switch (selectedFilterOption.value) {
      case "completed":
        setFilteredTodos(todos.filter((t) => t.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((t) => !t.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
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
        loading={loading}
        fetchError={fetchError}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
