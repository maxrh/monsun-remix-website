export function GridItem(item) {
    return ( 
        <div className={`grid--tile size-${item.size} order-${item.order}`}>
            <img src={item.image} alt={item.title} className="grid--tile__image"/>
            <div className="grid--tile__overlay">
                <h6 className="grid--tile__title">{item.title}</h6>
                <p className="grid--tile__desc">Size {item.size} / Order {item.order}</p>
            </div>
        </div>
    );
}