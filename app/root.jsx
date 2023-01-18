import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import GlobalNav from "./components/GlobalNav";

export const meta = () => ({
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
});

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <main className="site-container">
                    <header className="site-header">
                        <GlobalNav />
                    </header>
                    <div className="site-inner">
                        <Outlet />
                    </div>
                    <footer className="site-footer"></footer>
                </main>

                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
