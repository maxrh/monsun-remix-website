import AdobeStock from '~/images/KreativtKooperativ@1x.jpg';

export function Hero({text}) {

    return ( 
        <section className="hero">
            <img src={AdobeStock} alt="Adobe Stock" className="hero__bgimage"/>

            <div id="container" className="hero__content">
            <code className="page-prefix">{"<HomePage />"}</code>

                <h1 className="hero__title">{text}</h1>
                <p className="page-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </section>
    );
}