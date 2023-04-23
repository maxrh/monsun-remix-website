export async function getProjects() {
    const response = await fetch("http://localhost:3000/api/projects");
    const projects = await response.json();
    return projects;
}

export async function getProjectById(id) {
    const response = await fetch(`http://localhost:3000/api/projects/${id}`);
    const project = await response.json();
    return project;
}