import type { LoaderFunction } from "@remix-run/node";
import { getExpenses } from "~/infra/db/expenses.server";

export const loader: LoaderFunction = () => {
    return getExpenses();
}
