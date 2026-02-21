import { useState } from 'react'
import { ProjectList } from './components/ProjectList';

export const App = () => {

  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');

  const handleInputChange = (event) => {
    setProjectName(event.target.value);
  }

  const handleCreateProject = (event) => {
    event.preventDefault();

    const newProject = {id: crypto.randomUUID(), name: projectName, tasks: []}
    setProjects([...projects, newProject]);

    setProjectName('');

    console.log("Create Project", projects);
  }  

  const handleDeleteProject = (id) => {
    const filteredProjects = projects.filter(project => project.id !== id);
    setProjects(filteredProjects);

    console.log("Delete Project", projects);
  }

  const handleSaveProject = (id, newName) => {
    const updatedProject = projects.map(project => {
      if(project.id === id) {
        return {...project, name: newName};
      }
      return project;
    })
    setProjects(updatedProject);

    console.log("Save Project", projects);
  }

  return (
    <>
      <h1>My Projects</h1>
      <form onSubmit={handleCreateProject}>
        <input type='text' value={projectName} onChange={handleInputChange} placeholder="Project Name"/>
        <button type='submit'>Add Project</button>
      </form>


      <ProjectList projects={projects} onDeleteProject={handleDeleteProject} onSaveProject={handleSaveProject}/>
    </>
  );
}

