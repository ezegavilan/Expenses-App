import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: "Home",
    name: "Expenses App",
  }
};

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  )
}
