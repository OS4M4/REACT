import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";


const Expenses = (props) => {

    const [filteredYear,setfilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    }

    return(
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseItem 
                    date={props.items[0].date}
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                ></ExpenseItem>
                <ExpenseItem 
                    date={props.items[1].date}
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                ></ExpenseItem>
                <ExpenseItem 
                    date={props.items[2].date}
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                ></ExpenseItem>
                <ExpenseItem 
                    date={props.items[3].date}
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                ></ExpenseItem>
            </Card>
        </div>
    )
};

export default Expenses;