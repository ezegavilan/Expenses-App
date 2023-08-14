import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import expensesStyles from '~/styles/expenses.css';
import ExpensesList from "~/components/expenses/ExpensesList";
import {EXPENSES} from "~/routes/expenses.analysis";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: expensesStyles }
    ];
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
