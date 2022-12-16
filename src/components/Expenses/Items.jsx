import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/card";
const Items = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__date"></div>
        <div className="expense-item__title">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">{props.amount}</div>
      </Card>
    </li>
  );
};

export default Items;
