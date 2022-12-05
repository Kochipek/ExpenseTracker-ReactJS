import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //creating event listener to listen changes on date options

  const yearChangeHandler = (e) => {
    props.onChangeYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* controlling default value with props.selected */}
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
