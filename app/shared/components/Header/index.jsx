import { Link } from "@remix-run/react";
import logo from "~/images/monsun_logo_full.svg";

export default function Header() {
    return ( 

        <header className="site-header">

            <Link to="/" prefetch="intent" className="logo">
                <img src={logo} className="logo-icon" alt="logo" />
            </Link>
            
            <nav className="site-nav" aria-label="Main">
                <Link to="/" >Home</Link>{" "}
                <Link to="/about" >About</Link>{" "}
                <Link to="/contact" >Contact</Link>
            </nav>

        </header>
        
    );
}