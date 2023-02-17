

export function Hero({text}) {

    return ( 
        <section className="hero">
            <div className="hero__content">
            <code className="page-prefix">{"<Hero className={worker} />"}</code>

                <h1 className="hero__title">{text}</h1>
                <p className="hero__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </section>
    );
}