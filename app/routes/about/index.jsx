import { useLoaderData } from "@remix-run/react"
import { getProjects } from "~/api/projects"
import { Grid } from "~/shared/components/Grid";
import { ProjectsContext } from "~/context/ProjectsContext";
import { useContext, useEffect } from "react";

export const meta = () => ({
    title: "About | Monsun",
    description: "The About page of Monsun",
});

export const loader = async () => {
    return getProjects();
}

const About = () => {

    const { projectItems, setProjectItems } = useContext(ProjectsContext);
    const projects = useLoaderData()
    
    useEffect(() => {
        setProjectItems(projects);
    }, [setProjectItems]);

    return ( 

        <article className="page">
                <header className="page-header">
                    <code className="page-prefix">{"<AboutPage />"}</code>
                    <h1 className="page-title"> Morbi tristique senectus et netus et malesuada fames</h1>
                    <p className="page-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </header>

                <Grid items={projectItems} />

                <p>Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Vitae elementum curabitur vitae nunc sed velit dignissim. Orci sagittis eu volutpat odio facilisis mauris. Duis ultricies lacus sed turpis. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Sem nulla pharetra diam sit amet nisl. Diam maecenas ultricies mi eget mauris pharetra. Morbi tristique senectus et netus et malesuada fames ac. Viverra justo nec ultrices dui sapien eget mi proin sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Blandit libero volutpat sed cras. Quis viverra nibh cras pulvinar mattis nunc sed.</p>
        

        </article>

    );
}
 
export default About;