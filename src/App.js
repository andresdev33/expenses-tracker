import ExpenseItem from './components/ExpenseItem';

function App() {
    const expenses = [
        { title: 'Car Insurance', amount: 294.68, date: new Date(2022, 2, 28) },
        { title: 'Car Insurance', amount: 284.68, date: new Date(2022, 2, 28) },
        { title: 'Car Insurance', amount: 274.68, date: new Date(2022, 2, 28) },
        { title: 'Car Insurance', amount: 264.68, date: new Date(2022, 2, 28) },
    ];

    return (
        <div>
            <h1>Hola</h1>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            ></ExpenseItem>
        </div>
    );
}

export default App;
