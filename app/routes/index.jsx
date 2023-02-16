import { Grid } from "~/shared/components/Grid";
import { Hero } from "~/shared/components/Hero";
import { useContext } from "react";
import { ProjectsContext } from "~/context/ProjectsContext";

export default function Index() {

    const { projectItems } = useContext(ProjectsContext);
    const items = projectItems;

    return (
        <>
            <Hero text={"A remix website"}/>
            <Grid items={items} />
        </>
    );
}