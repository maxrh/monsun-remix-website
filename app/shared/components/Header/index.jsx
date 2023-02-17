import { Link } from "@remix-run/react";
import logo from "~/images/monsun_logo_full.svg";

export default function Header() {
    return ( 

        <header className="site-header">

            <Link to="/" prefetch="intent" className="logo">
                <img src={logo} className="logo-icon" alt="logo" />
            </Link>
            
            <nav className="site-nav" aria-label="Main">
                <Link to="/" aria-label="Home">Home </Link>{" "}
                <Link to="/contact" aria-label="Contact">Get in touch </Link>
                <Link to="/about" aria-label="About">About us </Link>{" "}

            </nav>

        </header>
        
    );
}