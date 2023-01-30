import { useState, useEffect } from "react";

export function PortfolioGrid() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = new Response(
                JSON.stringify({ 
                    title: "Project 1",
                    description: "This is a project",
                    image: "This is a project"
                })
            );
            const json = await res.json();
            setData(json);
        };

        fetchData();
        
    }, []);

    console.log(data);


    return ( 
        <div className="portfolio-grid">
        
        {data ? 
        
            <p>{data.title}</p> 
        
        : <p>Loading...</p>}
        
        </div>
    );
}