import { json } from "@remix-run/node";
import { useLoaderData } from '@remix-run/react';
import { PortfolioGrid } from "~/shared/components/PortfolioGrid";
import { Hero } from "~/shared/components/Hero";

export const loader = async () => {
    return json([
        {   
            id: 1,
            size: 1,
            title: "Project 01",
            description: "Size 1",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
        {   
            id: 2,
            size: 3,
            title: "Project 02",
            description: "Size 3",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
        {   
            id: 3,
            size: 4,
            title: "Project 03",
            description: "Size 4",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
        {   
            id: 4,
            size: 2,
            title: "Project 04",
            description: "Size 2",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
        {   
            id: 5,
            size: 2,
            title: "Project 05",
            description: "Size 2",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
    ]);
}

export default function Index() {

    const items = useLoaderData();

    return (
        <>
            <Hero />
            <PortfolioGrid items={items} />
        </>
    );
}