import { useInView } from "framer-motion";
import { useRef } from 'react';
import imagePlaceholder from "~/images/joey-huang-small-unsplash.jpg";

export function GridItem(item) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const delay = (item.order % 4) * 0.1;


    return ( 
        <div className={`grid--tile size-${item.size} order-${item.order}`} ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0) scale(1)" : "translateY(75px) scale(.95)",
                transition: `all .5s ease-in-out ${delay}s`,
            }}
        >

            <img src={item.image} alt={item.title} className="grid--tile__image"/>
            <div className="grid--tile__overlay">
                <h5 className="grid--tile__title">{item.title}</h5>
                <p className="grid--tile__desc">Size {item.size} / Order {item.order}</p>
            </div>
          
        
        </div>
    );
}