import type { MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Update your expense' }
}

export default function UpdateExpensePage() {
    return (
        <Modal onClose={() => console.log('onClose')}>
            <ExpenseForm />
        </Modal>
    )
}
