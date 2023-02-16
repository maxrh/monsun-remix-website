

export function Hero({text}) {

    return ( 
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">{text}</h1>
                <p className="hero__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </section>
    );
}