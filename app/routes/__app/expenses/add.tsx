import { redirect, type ActionFunction, type DataFunctionArgs, type MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { type NavigateFunction, useNavigate } from "react-router";
import type { Expense } from "~/types/expense.model";
import { save } from "~/infra/db/expenses.server";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Add new expense' }
}

export const action: ActionFunction = async ({ request }: DataFunctionArgs) => {
    const formData = await request.formData();    
    const expense: Expense = {
        title: formData.get('title')!.toString(),
        amount: Number(formData.get('amount')),
        date: new Date(formData.get('date')!.toString())
    }
    await save(expense);
    return redirect('/expenses');
}

export default function AddExpensesPage() {
    const navigate: NavigateFunction = useNavigate()

    const closeHandler = () => {
        navigate('/expenses')
    }

    return (
        <Modal onClose={closeHandler}>
            <ExpenseForm />
        </Modal>
    )
}
