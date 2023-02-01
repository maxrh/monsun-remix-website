import { PortfolioGrid } from "~/shared/components/PortfolioGrid";

export async function loader() {

    return [
        {   
            id: 1,
            size: 1,
            title: "Project 1",
            description: "This is a project",
            image: "https://dummyimage.com/640x360/eee/aaa",
        },
        {   
            id: 2,
            size: 4,
            title: "Project 2",
            description: "This is a project",
            image: "https://dummyimage.com/640x360/eee/aaa",
        },
    ];
}

export default function Index() {

    return (
        <>
            <h1>A remix website</h1>

            <PortfolioGrid />
        
        </>
    );
}
