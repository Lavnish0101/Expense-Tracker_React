import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import './Expenses.css';
import { useState } from "react";
import ExpensesChart from './ExpensesChart';
import ExpensesList from "./ExpensesList";

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return(
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
    </Card>
    )
}

export default Expenses;