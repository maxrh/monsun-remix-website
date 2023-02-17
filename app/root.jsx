import {
    Links,
    LiveReload,
    Meta,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import ProjectsContextProvider from "./context/ProjectsContext";

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
    const location = useLocation();
    const outlet = useOutlet();
    
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                    <ProjectsContextProvider>
                        <AnimatePresence mode="wait">
                            <motion.main 
                                key={location.pathname} 
                                initial={{ opacity: 0, scale: 0.95, filter: "grayscale(100%)" }}
                                animate={{ opacity: 1, scale: 1, filter: "grayscale(0)" }}
                                exit={{ opacity: 0, scale: 0.95, filter: "grayscale(100%)"  }}
                                transition={{ duration: .2 }} 
                                className="main"
                                
                            >
                                {outlet}
                            </motion.main>
                        </AnimatePresence>
                    </ProjectsContextProvider>
                <Footer />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

