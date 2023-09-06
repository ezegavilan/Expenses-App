import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import sharedStyles from '~/styles/shared.css';
import Error from "./components/util/Error";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [{ rel: "stylesheet", href: sharedStyles }]),
];

export const CatchBoundary = () => {  
  const caughtResponse = useCatch();

  return (
    <Document title={caughtResponse.statusText}>
      <main>
        <Error title={caughtResponse.statusText}>
          <p>{caughtResponse.data?.message || 'Something went wrong. Please, try again later.'}</p>
          <p>Back to <Link to="/">safety.</Link></p>
        </Error>
      </main>
    </Document>
  )
}

export function ErrorBoundary({ error }: any) {
  return (
    <Document title="An error ocurred">
      <main>
        <Error title="An error ocurred">
          <p>{error.message || 'Something went wrong. Please, try again later.'}</p>
          <p>Back to <Link to="/">safety.</Link></p>
        </Error>
      </main>
    </Document>
  )
}

function Document({ title, children }: any) {
  return (
    <html lang="en">
      <head>
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
        <Links />
      </head>
      <body>
        { children }
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
