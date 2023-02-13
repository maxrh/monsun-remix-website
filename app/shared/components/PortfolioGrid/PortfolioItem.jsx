export function PortfolioItem(item) {
    return ( 
        <div className={`pf-grid__item size-${item.size} order-${item.order}`}>
            <article className="pf-teaser">
                <img src={item.image} alt={item.title} className="pf-teaser__image"/>
                <div className="pf-teaser__overlay">
                    <h6 className="pf-teaser__title">{item.title}</h6>
                    <p className="pf-teaser__desc">Size {item.size} / Order {item.order}</p>
                </div>
            </article>
        </div>
    );
}