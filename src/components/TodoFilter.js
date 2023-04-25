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
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? 'rgb(255 218 117)' : 'rgb(231 196 101)',
          boxShadow: state.isFocused? ' 0 0 0 1px rgb(255 218 117)':' 0 0 0 1px rgb(255 218 117)' ,
          
          "&:hover": {
            borderColor: "rgb(206, 180, 109)"
          }
        }),
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? "#fff3d7" : "#fff3d7",
          color: state.isSelected ? "rgb(117 97 42)" : "#aeaeae",   
          "&:hover": {                                           // overriding hover
            backgroundColor: state.isSelected ? "#feecc1" : "#f8ebcc",
            color: state.isSelected ? "rgb(117 97 42)" : "rgb(179, 151, 74)", 
          },
        })
      }}

      className="filter"
      value={selectedFilterOption}
      onChange={filterOnchange}
      options={FilterOptions}
    />
  </div>
    
  );
};

export default TodoFilter;
