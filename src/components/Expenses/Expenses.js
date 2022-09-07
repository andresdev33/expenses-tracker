import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {
    const { expenses } = props;
    const [filteredYear, setFilteredYear] = useState('2020');

    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    // Other conditional rendering way:
    // let filteredExpensesContent = <p>No expenes found</p>;

    // if(filteredExpenses.length > 0) {
    //     filteredExpensesContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ))
    // }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selectedYear={filteredYear}
                    onChangeFilter={changeFilterHandler}
                />
                {/* {other conditional rendering way} */}
                {/* {filteredExpensesContent} */}
                {filteredExpenses.length === 0 && <p>No expenes found</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
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
