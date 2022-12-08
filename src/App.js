import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from "./components/NewExpense/NewExpense";
const dummyExpenses = [
  {
    id: 'e1',
    title: 'Item',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
   title: 'Item',
    amount: 799.49,
     date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Item',
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: 'e4',
    title: 'Item',
    amount: 410,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e5',
    title: 'Item',
    amount: 120,
    date: new Date(2022, 2, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
