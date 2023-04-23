import { createContext, useState } from 'react';

export const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
   
    const [projectItems, setProjectItems] = useState([]);
  
    return (
        <ProjectsContext.Provider value={{ projectItems, setProjectItems }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export default ProjectsContextProvider;