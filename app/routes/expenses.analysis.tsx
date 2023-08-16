import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
    return { title: 'Expenses | Analysis' }
}

export const EXPENSES = [
    { id: 'expense-1', title: 'Frist Expense', amount: 12.99, date: new Date() },
    { id: 'expense-2', title: 'Another Expense', amount: 10.99, date: new Date() },
]

export default function ExpensesAnalysisPage() {
    return (
        <main>
            <Chart expenses={ EXPENSES } />
            <ExpenseStatistics expenses={ EXPENSES } />
        </main>
    )
}
