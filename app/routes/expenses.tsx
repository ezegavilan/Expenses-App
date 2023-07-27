import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import expensesStyles from '~/styles/expenses.css';

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: expensesStyles }
    ];
}

export default function ExpensesLayout() {
    return (
        <main>
            <p>Shared element!</p>
            <Outlet />
        </main>
    )
}
