import { redirect, type ActionFunction, type DataFunctionArgs, type MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import {type NavigateFunction, useNavigate} from "react-router";
import type { Expense } from "~/types/expense.model";
import { update } from "~/infra/db/expenses.server";
import { validateExpenseInput } from "~/infra/validations/validation.server";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Update your expense' }
}

/*
  No es necesario volver a llamar en el loader para obtener un Expense, en el Loader
  Padre se obtienen todas las Expensas.
*/
/* export const loader: LoaderFunction = ({ params }: LoaderArgs) => {
    const expenseId: string = params.expenseId || '';
    return getExpense(expenseId);
} */

export const action: ActionFunction = async ({ params, request }: DataFunctionArgs) => {
    const expenseId: string = params.expenseId || '';
    const formData = await request.formData();
    const expense: Expense = {
        title: formData.get('title')!.toString(),
        amount: Number(formData.get('amount')),
        date: new Date(formData.get('date')!.toString()).toISOString()
    }

    try {
        validateExpenseInput(expense);
    } catch (error) {
        return error;
    }
    
    await update(expenseId, expense);
    return redirect('/expenses');
}

export default function UpdateExpensePage() {
    const navigate: NavigateFunction = useNavigate();

    const closeHandler = () => {
        navigate('/expenses')
    }

    return (
        <Modal onClose={closeHandler}>
            <ExpenseForm />
        </Modal>
    )
}
