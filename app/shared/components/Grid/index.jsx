import { GridItem } from "./GridItem";

export function Grid({items}) {

    return ( 
        <section className="grid alignfull">

            {items?.map((item) => (
                <GridItem {...item} key={item.id}/>
            ))}
        
        </section>
    );
}