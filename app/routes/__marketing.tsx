import {Outlet} from "@remix-run/react";
import {LinksFunction} from "@remix-run/node";
import marketingStyle from '~/styles/marketing.css';

export default function MarketingLayout() {
    return (
        <Outlet />
    )
}

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: marketingStyle }]
}
