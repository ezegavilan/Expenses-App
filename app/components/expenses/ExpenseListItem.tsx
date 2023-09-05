import {Form, Link} from "@remix-run/react";

interface ExpenseListItemProps {
  id: string
  title: string
  amount: number
}

function ExpenseListItem({ id, title, amount }: ExpenseListItemProps) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <Form method="DELETE" action={`/expenses/${id}`}>
          <button onClick={deleteExpenseItemHandler}>Delete</button>
        </Form>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
