import {LinksFunction} from "@remix-run/node";
import {Outlet} from "@remix-run/react";
import expensesStyle from '~/styles/expenses.css';

export default function ExpensesAppLayout() {
    return (
        <Outlet />
    )
}

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: expensesStyle }]
}
