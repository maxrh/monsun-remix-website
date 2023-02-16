import { Grid } from "~/shared/components/Grid";
import { Hero } from "~/shared/components/Hero";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
    const response = await fetch('http://localhost:3000/api/projects');
    const data = await response.json();
    return data ;
}
    
export default function Index() {
    const items = useLoaderData();
    console.log(items, "home items");

    return (
        <>
            <Hero text={"A remix website"}/>
            <Grid items={items} />
        </>
    );
}