import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
    const expenses = [
        { title: 'Car Insurance', amount: 294.68, date: new Date(2022, 2, 28) },
        { title: 'Car Insurance', amount: 284.68, date: new Date(2022, 4, 14) },
        { title: 'Car Insurance', amount: 274.68, date: new Date(2022, 6, 8) },
        { title: 'Car Insurance', amount: 264.68, date: new Date(2022, 8, 18) },
    ];

    const addExpenseHandler = (expense) => {
        console.log('In App.js');
        console.log(expense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
