import ExpenseListItem from './ExpenseListItem';

interface ExpensesListProps {
  expenses: any[]
}

function ExpensesList({ expenses }: ExpensesListProps) {

  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
