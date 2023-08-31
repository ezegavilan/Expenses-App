import {Form, Link, useActionData, useLoaderData, useNavigation} from "@remix-run/react";
import type { Expense } from "~/types/expense.model";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationErrors = useActionData();
  const navigation = useNavigation();
  const expense: Expense = useLoaderData();

  const defaultValue = (expense) ? expense : { id: '', title: '', amount: '', date: '' };

  const isSubmiting: boolean = navigation.state !== 'idle';  
/*   const submit = useSubmit();
 */  
/*   const submitHandler = (event: any) => {
    event.preventDefault();
    // do stuff on client side...
    submit(event.target, {
      method: 'POST'
    });
  } */

  return (
    <Form method="post" className="form" id="expense-form" /* onSubmit={submitHandler} */>
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" required maxLength={30} defaultValue={defaultValue.title} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
            defaultValue={defaultValue.amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" max={today} required defaultValue={defaultValue.date} />
        </p>
      </div>

      {
        validationErrors && (
          <ul>
            {
              Object.values(validationErrors).map((error: any) => (
                <li key={error}>{ error }</li>
              ))
            }
          </ul>
        )
      }

      <div className="form-actions">
        <button disabled={ isSubmiting }>{isSubmiting ? 'Saving...' : 'Save Expense'}</button>
          <Link to={'/expenses'}>Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
