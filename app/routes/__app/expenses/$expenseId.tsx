import type { MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import {type NavigateFunction, useNavigate} from "react-router";

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
