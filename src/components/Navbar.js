import TodoFilter from "./TodoFilter";

const Navbar = ({ unCompTodos ,filterTodos ,selectedFilterOption,filterOnchange}) => {
  
  if (!unCompTodos) return (
    <header className="header">
      <span>{unCompTodos}</span> <h2>Set Your Today Todos!</h2>
      <TodoFilter filterOnchange={filterOnchange} filterTodos={filterTodos} selectedFilterOption={selectedFilterOption}/>
    </header>
  );

  return (
    <header className="header" >
      <span>{unCompTodos}</span> <h2> Tasks are not completed</h2>
      <TodoFilter filterOnchange={filterOnchange} filterTodos={filterTodos} selectedFilterOption={selectedFilterOption}/>
    </header>
  );
};

export default Navbar;
