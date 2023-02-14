import { Link } from "@remix-run/react";
import logo from "~/images/monsun_logo_full.svg";

export default function Footer() {
    return ( 

        <footer className="site-footer">

            <Link to="/" prefetch="intent" className="logo">
                <img src={logo} className="logo-icon" alt="logo" />
            </Link>
            
            <nav className="site-nav" aria-label="Main">
                <Link to="/" prefetch="intent">Home</Link>{" "}
                <Link to="/about" prefetch="intent">About</Link>{" "}
                <Link to="/contact" prefetch="intent">Contact</Link>
            </nav>

        </footer>
        
    );
}