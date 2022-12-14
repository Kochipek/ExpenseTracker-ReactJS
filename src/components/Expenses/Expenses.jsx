import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState('2022');
  //creating handler
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const [isEditing, setIsEditing] = useState(false);

  const chartOpeningHandler = () => {
      setIsEditing(true);
  }
  const chartClosingHandler = () => {
      setIsEditing(false);
  }
  return (
    
    <div>

      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={filterChangeHandler}
        />
        <div className = 'buttonBox'>
      { !isEditing && <button className = 'openChartButton' onClick={chartOpeningHandler}> Show Chart </button>}
      </div>
     {isEditing && <ExpensesChart expenses={filteredExpenses} onCloseChart={chartClosingHandler}/>}
        <ExpensesList items={filteredExpenses} />
      </Card>

    </div>

  );
};

export default Expenses;
