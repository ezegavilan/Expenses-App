import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {Link, Outlet, useLoaderData} from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import {FaDownload, FaPlus} from "react-icons/fa";
import { getExpenses } from "~/infra/db/expenses.server";
import type { Expense } from "~/types/expense.model";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Your expenses' }
}

export const loader: LoaderFunction = async () => {
    return getExpenses();
}

export default function ExpensesLayout() {
    const expenses: Expense[] = useLoaderData();
    
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
                <ExpensesList expenses={ expenses } />
            </main>
        </>
    )
}
