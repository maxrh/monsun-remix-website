import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import GlobalNav from "./shared/components/GlobalNav";
import styles from "./styles/global.css";

export const meta = () => ({
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
});

export const links = () => {
    return [
        { 
            rel: "stylesheet", 
            href: styles, 
            as: "style",
        },
        {
            page: "/"
        }
    ];
};


export default function App() {
  return (
    <html lang="en">
        <head>
            <Meta />
            <Links />
        </head>
        <body>
            <header>
                <GlobalNav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
        </body>
    </html>
  );
}