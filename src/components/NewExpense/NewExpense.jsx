import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/card";
import React, { useState } from "react";


const NewExpense = (props) => {



    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      }

        props.onAddExpense(expenseData);
        
    };
    const [isEditing,setIsEditing] = useState(false);
    const startOpeningHandler = () => {
      setIsEditing(true);
    }

  const startClosingHandler =() => {
      setIsEditing(false);
  }
   
  return (
    <Card className="new-expense">
     {!isEditing &&<button onClick={startOpeningHandler}> Add New Expense</button>}
     {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={startClosingHandler} />}
    </Card>
  );
  
  };
export default NewExpense;
