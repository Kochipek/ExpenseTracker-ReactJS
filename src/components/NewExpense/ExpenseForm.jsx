import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {

  const[enteredTitle,setEnteredTitle] = useState('');
  const[enteredPrice,setEnteredPrice] = useState('');
  const[enteredDate,setEnteredDate] = useState('');


  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

  };

  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);

  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);

  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredPrice,
      date: new Date(enteredDate)
    };
    //clearing inputs after form submission
    
    //execute function
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredDate('');
    setEnteredPrice('');
  };


  return (
    <form onSubmit={submitHandler}>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter a product"
            value={enteredTitle}
            onChange={titleChangeHandler}
            
          />
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={enteredPrice}
            placeholder="Enter a price"
            onChange={priceChangeHandler}
            
          />
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01.01.2019"
            max="30.12.2022"
            value={enteredDate}
            onChange={dateChangeHandler}
            
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="submit">Submit</button>
     <button type="button" onClick={props.onCancel}>Close</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
