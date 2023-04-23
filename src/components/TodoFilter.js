import React from "react";
import Select from "react-select";

const FilterOptions = [
  { value: "", label: "All" },
  { value: "completed", label: "completed" },
  { value: "uncompleted", label: "uncompleted" },
];

const TodoFilter = ({selectedFilterOption,filterOnchange}) => {
  
console.log(selectedFilterOption);


  return (
  <div className="filter-select">
    <Select
      className="filter"
      value={selectedFilterOption}
      onChange={filterOnchange}
      options={FilterOptions}
    />
  </div>
    
  );
};

export default TodoFilter;
