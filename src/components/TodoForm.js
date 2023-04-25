import { useEffect, useRef, useState } from "react";
// import styles from '../App.module.css';

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    // to not refresh the form
    e.preventDefault();
    if (!input) {
      alert("enter todo !");
      return;
    }

    props.submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          className="input"
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={props.edit ? "Update Todo" : " Add Todo"}
          ref={inputRef}
        />
        <button className={`btn ${props.edit ? "updateTodo" : "addTodo"}`}>
          {" "}
          {props.edit ? "Update Todo" : "Add Todo"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
