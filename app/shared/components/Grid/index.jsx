import { GridItem } from "./GridItem";

export function Grid({items}) {

    return ( 
        <section className="grid">

            {items?.map((item) => (
                <GridItem {...item} key={item.id}/>
            ))}
        
        </section>
    );
}