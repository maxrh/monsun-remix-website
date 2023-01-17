import * as Menubar from '@radix-ui/react-menubar';
import { Link } from "@remix-run/react";

const GlobalNav = () => {
    return (
        <Menubar.Root className="MenubarRoot">
            <Menubar.Menu>
                <Menubar.Trigger className="MenubarItem">
                    <Link to="/">Home</Link>
                </Menubar.Trigger>
                <Menubar.Trigger className="MenubarItem">
                    <Link prefetch="intent" to="/about">About</Link>
                </Menubar.Trigger>
                <Menubar.Trigger className="MenubarItem">
                    <Link prefetch="intent" to="/contact">Contact</Link>
                </Menubar.Trigger>
               
            </Menubar.Menu>
        </Menubar.Root>
    );
  };
  
  export default GlobalNav;