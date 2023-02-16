import { createContext, useState, useEffect } from 'react';

let fetchApi = "http://localhost:3000/api/projects";

export const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
   
    const [projectItems, setProjectItems] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(fetchApi);
                const projects = await response.json();
                setProjectItems(projects);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProjects();
    }, []);
  
    return (
        <ProjectsContext.Provider value={{ projectItems, setProjectItems }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export default ProjectsContextProvider;