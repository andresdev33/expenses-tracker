import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [newExpense, setNewExense] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const titleChangeHandler = (event) => {
        // Don't use this way: could have a previous out of date version of the state, as it is a scheduled value
        // setNewExense({
        //     ...newExpense,
        //     title: event.target.value,
        // });

        // Use this instead: react guarantees it is the last version of the state
        setNewExense((prevState) => {
            console.log(prevState);
            return {
                ...prevState,
                title: event.target.value,
            };
        });
    };

    const amountChangeHandler = (event) => {
        setNewExense((prevState) => {
            return {
                ...prevState,
                amount: event.target.value,
            };
        });
    };

    const dateChangeHandler = (event) => {
        setNewExense((prevState) => {
            return {
                ...prevState,
                date: event.target.value,
            };
        });
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2025-12-31'
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
