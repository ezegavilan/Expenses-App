import { redirect, type ActionArgs, type ActionFunction, type LinksFunction, type MetaFunction } from "@remix-run/node";
import AuthForm from "~/components/auth/AuthForm";
import authStyles from '~/styles/auth.css';

export const meta: MetaFunction = () => {
    return { title: "Auth" }
}

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: authStyles }
    ]
}

export const action: ActionFunction = async ({ request }: ActionArgs) => {
    const searchParams = new URL(request.url).searchParams;
    const authMode: string = searchParams.get('mode') || 'login';
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    console.log(credentials);

    if (authMode === 'login') {
        // login logic
    } else {
        // signup logic
    }
    return redirect('/expenses');
}

export default function AuthPage() {
    return (
        <AuthForm />
    )
}
