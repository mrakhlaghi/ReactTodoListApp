import { useEffect, useRef, useState } from "react";
// import styles from '../App.module.css';
// import'../App.css';



const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit? props.edit.text :"");
  const inputRef = useRef(null);
  
  useEffect(()=>{
    inputRef.current.focus()
  },[])

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
    // const newTodo = {
    //   id: Math.floor(Math.random() * 1000),
    //   text: input,
    //   isCompleted: false,
    // };

    // props.setTodos([...props.todos, newTodo]);
    // setInput("");

    props.submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='formControl'>
      <input
          className='input'
            type="text"
            value={input}
            // value={props.edit? props.edit.text :input}   // چرا نمیشه ؟؟؟؟
            onChange={changeHandler}
            placeholder={props.edit ?"Update Todo" :" Add Todo"}
            ref={inputRef}
          />
          <button className={`btn ${props.edit? "updateTodo":"addTodo"}`}> {props.edit ? "Update Todo": "Add Todo"}</button>
      </div>
    </form>
  );
};

export default TodoForm;
