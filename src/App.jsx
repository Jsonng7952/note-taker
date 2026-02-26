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

  const handleSaveProject = (projectId, newName) => {
    const updatedProject = projects.map(project => {
      if(project.id === projectId) {
        return {...project, name: newName};
      }
      return project;
    })
    setProjects(updatedProject);

    console.log("Save Project", projects);
  }

  const handleCreateTask = (projectId, taskName, taskDescription) => {
    const updatedProject = projects.map(project => {
      if(project.id === projectId) {
        const newTask = {id: crypto.randomUUID(), name: taskName, description: taskDescription};

        return {...project, tasks: [...project.tasks, newTask]};
      }
      return project;
    })
    setProjects(updatedProject);
  }

  return (
    <>
      <h1>My Projects</h1>
      <form onSubmit={handleCreateProject}>
        <input type='text' value={projectName} onChange={handleInputChange} placeholder="Project Name"/>
        <button type='submit'>Add Project</button>
      </form>


      <ProjectList 
        projects={projects} 
        onDeleteProject={handleDeleteProject} 
        onSaveProject={handleSaveProject}
        onCreateTask={handleCreateTask}
      />
    </>
  );
}

