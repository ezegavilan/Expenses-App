import type { MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Add new expense' }
}

export default function ComponentPage() {
    return (
        <ExpenseForm />
    )
}
