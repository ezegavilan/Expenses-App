import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import {EXPENSES} from "~/routes/__app/expenses.analysis";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Your expenses' }
}

export default function ExpensesLayout() {
    return (
        <>
            <Outlet />
            <main>
                <ExpensesList expenses={ EXPENSES } />
            </main>
        </>
    )
}
