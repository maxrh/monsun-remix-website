import { GridItem } from "./GridItem";
import { Suspense } from "react";

export function Grid({items}) {

    return ( 
        <section className="grid">

            {items?.map((item) => (
                <Suspense fallback={<li>Loading...</li>} >
                    <GridItem {...item} key={item.id}/>
                </Suspense>
            ))}
        
        </section>
    );
}