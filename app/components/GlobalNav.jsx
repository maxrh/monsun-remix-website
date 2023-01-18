import { Link } from "@remix-run/react";
import styles from "./GlobalNav.css";

export const links = () => [
    { rel: "stylesheet", href: styles },
];

const GlobalNav = () => {
    return (

        <nav className="site-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about" prefetch="intent">About</Link></li>
                <li><Link to="/contact" prefetch="intent">Contact</Link></li>
            </ul>

        </nav>

  
    );
};
  

export default GlobalNav;