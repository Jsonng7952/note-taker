import { useState } from 'react'
import { ProjectList } from './components/ProjectList';
import { Task } from './components/Task';

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

    console.log("Create Task", projects);
  }

  const handleDeleteTask = (projectId, taskId) => {
    const updatedProject = projects.map(project => {
      if(project.id === projectId) {
        const filteredTask = project.tasks.filter(task => task.id !== taskId);
        return {...project, tasks: filteredTask};
      }
      return project;
    })
    setProjects(updatedProject);    

    console.log("Delete Task", projects);    
  }

  const handleSaveTask = (projectId, taskId, taskName, taskDescription) => {
    const updatedProject = projects.map(project => { 
      if(project.id === projectId) { 
        const updatedTask = project.tasks.map(task => {
          if(task.id === taskId) { 
            return {...task, name: taskName, description: taskDescription};
          }
          return task;
        })
        return {...project, tasks: updatedTask};
      }
      return project;
    })
    setProjects(updatedProject);

    console.log("Save Task", projects);    
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
        onDeleteTask={handleDeleteTask}
        onSaveTask={handleSaveTask}
      />
    </>
  );
}

