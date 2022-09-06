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

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selectedYear={filteredYear}
                    onChangeFilter={changeFilterHandler}
                />
                {expenses.map((expense) => (
                    <ExpenseItem
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
