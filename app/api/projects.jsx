export async function getProjects() {
    const response = await fetch("http://localhost:3000/api/projects");
    const projects = await response.json();
    return projects;
}