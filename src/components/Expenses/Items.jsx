import React, { useState} from 'react';


import ExpenseDate from "./ExpenseDate";
import ExpenseItems from "./ExpenseItem.css";
import Card from "../UI/card";
const Items = (props) => {
  const [title, setTitle] = useState(props.title);

    //using event listeners with React
    const clickHandler = () => {
      setTitle('updated!');
    }

  return (
    <Card className="expense-item">
      
  <ExpenseDate date={props.date}/>

      <div className="expense-item__date"></div>
      <div className="expense-item__title">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default Items;
