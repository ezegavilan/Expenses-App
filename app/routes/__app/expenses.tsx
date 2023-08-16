import type { MetaFunction } from "@remix-run/node";
import {Link, Outlet} from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import {EXPENSES} from "~/routes/__app/expenses.analysis";
import {FaDownload, FaPlus} from "react-icons/fa";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Your expenses' }
}

export default function ExpensesLayout() {
    return (
        <>
            <Outlet />
            <main>
                <section id="expenses-actions">
                    <Link to='add'>
                        <FaPlus />
                        <span>Add expense</span>
                    </Link>
                    <a href="/expenses/raw">
                        <FaDownload />
                        <span>Load Raw Data</span>
                    </a>
                </section>
                <ExpensesList expenses={ EXPENSES } />
            </main>
        </>
    )
}
