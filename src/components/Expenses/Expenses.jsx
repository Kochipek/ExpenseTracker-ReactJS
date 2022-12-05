import React, { useState } from "react";
import Items from "./Items";
import "./Expenses.css";
import Card from "../UI/card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState();
  //creating handler
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };


  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={filterChangeHandler}
        />

        {filteredExpenses.map((expense) => (
          <Items
          //adding key because we used mapping
            key ={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
