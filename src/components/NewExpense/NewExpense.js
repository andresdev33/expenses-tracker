import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const onSaveExpenseDataHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString(),
        };
        onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
