import { getProjects } from "~/api/projects"
import { useLoaderData } from "@remix-run/react"
import { Grid } from "~/shared/components/Grid";
import { useContext, useEffect } from "react";
import { ProjectsContext } from "~/context/ProjectsContext";

export const loader = async () => {
    return getProjects();
}

export default function Index() {

    const { projectItems, setProjectItems } = useContext(ProjectsContext);
    const projects = useLoaderData()
    
    useEffect(() => {
        setProjectItems(projects);
    }, [setProjectItems]);

    return (
        <article className="page">
            <header className="page-header">
                <code className="page-prefix">{"<HomePage />"}</code>
                <h1 className="page-title">Kreativt kooperativ af journalister, grafikere, fotografer og web-udviklere</h1>
                <p className="page-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </header>

            
            <Grid items={projectItems} />
        </article>
    );
}