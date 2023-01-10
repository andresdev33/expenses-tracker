import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const INITIAL_EXPENSES_STATE = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.68,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 284.68,
      date: new Date(2022, 4, 14),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 274.68,
      date: new Date(2022, 6, 8),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 264.68,
      date: new Date(2022, 8, 18),
    },
  ];

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES_STATE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
