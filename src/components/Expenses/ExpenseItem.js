import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const { date, title, amount } = props;
    const [expenseTitle, setExpenseTitle] = useState(title);

    const clickHandler = () => {
        setExpenseTitle('Hola!!!');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
