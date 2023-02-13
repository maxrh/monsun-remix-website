import { Link } from "@remix-run/react";
import logo from "~/images/monsun_logo_full.svg";

export default function Header() {
    return ( 

        <header className="site-header">

            <div className="logo">
                <Link to="/" prefetch="intent">
                    <img src={logo} className="logo-icon" alt="logo" />
                </Link>
            </div>
            
            <nav className="site-nav">
                <Link to="/" prefetch="intent">Home</Link>{" "}
                <Link to="/about" prefetch="intent">About</Link>{" "}
                <Link to="/contact" prefetch="intent">Contact</Link>
            </nav>

        </header>
        
    );
}