import type {  MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
    return { title: "Pricing" }
}

export default function PricingPage() {
    return (
        <main>
            <h1>Pricing</h1>
        </main>
    )
}
