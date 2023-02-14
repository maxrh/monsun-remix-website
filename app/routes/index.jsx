import { json } from "@remix-run/node";
import { useLoaderData } from '@remix-run/react';
import { Grid } from "~/shared/components/Grid";
import { Hero } from "~/shared/components/Hero";

export const loader = async () => {
    return json([
        {   
            id: 1,
            size: 2,
            order: 1,
            title: "Project 01",
            description: "Size 1",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
        {   
            id: 2,
            size: 4,
            order: 2,
            title: "Project 02",
            description: "Size 3",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
        {   
            id: 3,
            size: 6,
            order: 3,
            title: "Project 03",
            description: "Size 4",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
        {   
            id: 4,
            size: 3,
            order: 9,
            title: "Project 04",
            description: "Size 2",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
        {   
            id: 5,
            size: 3,
            order: 10,
            title: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
            description: "Size 2",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
        {   
            id: 6,
            size: 2,
            order: 6,
            title: "Project 06",
            description: "Size 4",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
        {   
            id: 7,
            size: 2,
            order: 7,
            title: "Project 07",
            description: "Size 2",
            image: "https://dummyimage.com/1440x400/eee/aaa",
        },
        {   
            id: 8,
            size: 2,
            order: 8,
            title: "Project 08",
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
            <Grid items={items} />
        </>
    );
}