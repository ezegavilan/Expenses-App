import type { MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import {NavigateFunction, useNavigate} from "react-router";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Update your expense' }
}

export default function UpdateExpensePage() {
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
