import {
    Links,
    LiveReload,
    Meta,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";

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
    const outlet = useOutlet();
    const location = useLocation();
    
    
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />

                    <AnimatePresence mode="wait" initial={false}>
                        <motion.main 
                            key={location.pathname} 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: .5 }} 
                        >
                            {outlet}
                        </motion.main>
                    </AnimatePresence>
                <Footer />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

