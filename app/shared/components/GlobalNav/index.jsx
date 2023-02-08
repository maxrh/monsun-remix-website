import { Link } from "@remix-run/react";

export default function GlobalNav() {
    return ( 
        <nav className="global-nav">
            <Link to="/" prefetch="intent">Home</Link>{" "}
            <Link to="/about" prefetch="intent">About</Link>{" "}
            <Link to="/contact" prefetch="intent">Contact</Link>
        </nav>
    );
}
 
