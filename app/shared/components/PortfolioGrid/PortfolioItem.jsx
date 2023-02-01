export function PortfolioItem(item) {
    return ( 
        <>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </>
    );
}