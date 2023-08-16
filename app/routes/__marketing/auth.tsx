import type { LinksFunction, MetaFunction } from "@remix-run/node";
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

export default function AuthPage() {
    return (
        <AuthForm />
    )
}
