import type { LoaderFunction } from "@remix-run/node";
import { redirect, Response } from "@remix-run/node";

export const loader: LoaderFunction = ({ params }) => {
    if (params['*'] === 'exp') {
        return redirect('/expenses');
    }

    throw new Response('Not found', { status: 404 });
}
