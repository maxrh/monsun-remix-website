export function PortfolioItem(item) {
    return ( 
        <div className={`pf-grid__item size-${item.size}`}>
            <article className="pf-teaser">
                <img src={item.image} alt={item.title} className="pf-teaser__image"/>
                <div className="pf-teaser__overlay">
                    <h6 className="pf-teaser__title">{item.title}</h6>
                    <p className="pf-teaser__desc">{item.description}</p>
                </div>
            </article>
        </div>
    );
}