import { PortfolioItem } from "./PortfolioItem";
import { useLoaderData } from '@remix-run/react';

export default function PortfolioGrid() {

    const items = useLoaderData();

    return ( 
        <div className="pf-grid">

            {items.map((item) => (
                <div className="pf-grid__item" key={item.id}>
                    {item.loading ? <p>Loading...</p> : 
                        <PortfolioItem {...item}/>
                    }
                </div>
            ))}
        
        </div>
    );
}