import type { LoaderFunction } from "@remix-run/node";
import {EXPENSES} from "~/routes/__app/expenses.analysis";

export const loader: LoaderFunction = () => {
    return EXPENSES;
}
