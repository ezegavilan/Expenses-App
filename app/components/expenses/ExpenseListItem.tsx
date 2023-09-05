import { type FetcherWithComponents, Link, useFetcher} from "@remix-run/react";

interface ExpenseListItemProps {
  id: string
  title: string
  amount: number
}

function ExpenseListItem({ id, title, amount }: ExpenseListItemProps) {
  const fetcher: FetcherWithComponents<any> = useFetcher();
  /*
    useFetcher() permite load o submit requests sin trigerear acciones de navegación subsecuentes.
    No hace nada luego de ser enviada la request.
  */

  const deleteExpenseItemHandler = () => {
    const deleteExpense: boolean = confirm('Are you sure to delete this expense?');
    if (!deleteExpense) {
      return;
    }
    fetcher.submit(null, {
      method: 'DELETE',
      action: `/expenses/${id}`
    });
  }

  if (fetcher.state !== 'idle') {
    return (
      <article className="expense-item locked">
        <p>Deleting...</p>
      </article>
    )
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
      <button onClick={deleteExpenseItemHandler}>Delete</button>
{/*     No conviene, luego del DELETE hace un GET request al action (/expenses/id)

        <Form method="DELETE" action={`/expenses/${id}`}>
          <button onClick={deleteExpenseItemHandler}>Delete</button>
        </Form>
*/}
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
