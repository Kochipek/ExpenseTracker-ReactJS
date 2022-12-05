import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/card";


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      }

        props.onAddExpense(expenseData);
        
    };


  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
