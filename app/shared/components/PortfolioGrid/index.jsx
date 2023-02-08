import { PortfolioItem } from "./PortfolioItem";
import { Suspense } from "react";

export function PortfolioGrid({items}) {

    console.log(items);

    return ( 
        <div className="pf-grid">

            {items.map((item) => (
                <Suspense fallback={<li>Loading...</li>} key={item.id}>
                    <PortfolioItem {...item}/>
                </Suspense>
            ))}
        
        </div>
    );
}