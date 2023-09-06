import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import type {LoaderFunction, MetaFunction} from "@remix-run/node";
import { getExpenses } from "~/infra/db/expenses.server";
import type { Expense } from "~/types/expense.model";
import { useLoaderData } from "@remix-run/react";
import Error from "~/components/util/Error";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Analysis' }
}

export const EXPENSES = [
    { id: 'expense-1', title: 'Frist Expense', amount: 12.99, date: new Date() },
    { id: 'expense-2', title: 'Another Expense', amount: 10.99, date: new Date() },
]

export const loader: LoaderFunction = () => {
    return getExpenses();
}

export default function ExpensesAnalysisPage() {
    const expenses: Expense[] = useLoaderData();
    const hasExpense = expenses && expenses.length > 0;
    
    return (
        <main>
            {
                hasExpense && (
                    <>
                    <Chart expenses={ expenses } />
                    <ExpenseStatistics expenses={ expenses } />
                    </>
                )
            }
            {
                !hasExpense && (
                    <Error title="No expenses found.">
                        <p>Could not load expenses to the requested analysis.</p>
                    </Error>
                )
            }
        </main>
    )
}
