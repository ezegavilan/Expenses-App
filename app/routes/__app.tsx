import {LinksFunction} from "@remix-run/node";
import {Outlet} from "@remix-run/react";
import expensesStyle from '~/styles/expenses.css';
import ExpensesHeader from "~/components/navigation/ExpensesHeader";

export default function ExpensesAppLayout() {
    return (
        <>
            <ExpensesHeader />
            <Outlet />
        </>
    )
}

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: expensesStyle }]
}
