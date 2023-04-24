import { Link, NavLink } from "@remix-run/react";
import logo from "~/images/monsun_logo_full.svg";

export default function Header() {
 
    return ( 

        <header className="site-header">

            <Link to="/" prefetch="intent" className="logo">
                <img src={logo} className="logo-icon" alt="logo" />
            </Link>
            
            <nav className="site-nav" aria-label="Main">
                <NavLink to="/" className="nav-item" aria-label="Home">Home</NavLink>{" "}
                <NavLink to="/projects" className="nav-item" aria-label="Projects">Projects </NavLink>
                <NavLink to="/contact" className="nav-item" aria-label="Contact">Get in touch </NavLink>
                <NavLink to="/about" className="nav-item" aria-label="About">About us </NavLink>{" "}
            </nav>

        </header>
        
    );
}