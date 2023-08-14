import type { MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Update your expense' }
}

export default function UpdateExpensePage() {
    return (
        <ExpenseForm />
    )
}
