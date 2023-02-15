import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useTransition,
} from "@remix-run/react";

import Header from "./shared/components/Header";
import Footer from "./shared/components/Footer";
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
    const transitions = useTransition();
    const pendingLocation = transitions.state === "loading";


    console.log(pendingLocation);

    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                <main className={
                    pendingLocation
                    ? "main page-transition"
                    : "main"
                }>
                    <Outlet />
                </main>
                <Footer />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

