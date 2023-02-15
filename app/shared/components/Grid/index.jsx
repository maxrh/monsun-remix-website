import { GridItem } from "./GridItem";
import { Suspense } from "react";

export function Grid({items}) {

    

    return ( 
        <section className="grid">

            {items.map((item) => (
                <Suspense fallback={<li>Loading...</li>} key={item.id}>
                    <GridItem {...item}/>
                </Suspense>
            ))}
        
        </section>
    );
}