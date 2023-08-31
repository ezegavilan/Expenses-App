import type { LoaderArgs, LoaderFunction, MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import {type NavigateFunction, useNavigate} from "react-router";
import { getExpense } from "~/infra/db/expenses.server";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Update your expense' }
}

export const loader: LoaderFunction = ({ params }: LoaderArgs) => {
    const expenseId: string = params.expenseId || '';
    return getExpense(expenseId);
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
