import { type LoaderFunction, type MetaFunction } from "@remix-run/node";
import {Link, Outlet, useLoaderData} from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import {FaDownload, FaPlus} from "react-icons/fa";
import { getExpenses } from "~/infra/db/expenses.server";
import type { Expense } from "~/types/expense.model";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Your expenses' }
}

export const loader: LoaderFunction = async () => {
    const expenses: Expense[] = await getExpenses();
/*     if (!expenses || expenses.length === 0) {
        throw json({
            message: 'Could not find any expenses.'
        }, {
            status: 404,
            statusText: 'No expenses found'
        });
    } */
    return expenses;
}

export default function ExpensesLayout() {
    const expenses: Expense[] = useLoaderData();
    const hasExpense = expenses && expenses.length > 0;
    
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
                {hasExpense && (<ExpensesList expenses={ expenses } />)}
                {!hasExpense && (
                    <section id="no-expenses">
                        <h1>No expenses found</h1>
                        <p>Start <Link to={'add'}>adding some</Link> today.</p>
                    </section>
                )}
            </main>
        </>
    )
}

/* export function CatchBoundary() {
    return (
        <>
        <Outlet />
        <p>Error</p>
        </>
    )
} */
