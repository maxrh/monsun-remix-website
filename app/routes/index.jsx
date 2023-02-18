import { Grid } from "~/shared/components/Grid";
import { Hero } from "~/shared/components/Hero";
import { useContext } from "react";
import { ProjectsContext } from "~/context/ProjectsContext";

export default function Index() {

    const { projectItems } = useContext(ProjectsContext);
    const items = projectItems;

    return (
        <article className="page">
            <header className="page-header">
                <code className="page-prefix">{"<HomePage />"}</code>
                <h1 className="page-title">Kreativt kooperativ af journalister, grafikere, fotografer og web-udviklere</h1>
                <p className="page-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </header>

            <Grid items={items} />
        </article>
    );
}