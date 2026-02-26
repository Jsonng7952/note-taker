import { useState } from "react";
import { Project } from "./Project";

export const ProjectList = ({ projects, onDeleteProject, onSaveProject, onCreateTask }) => {

  return(
    <ul>
      {
        projects.map((project) => {
          return (
            <Project 
              key={project.id}
              id={project.id}
              name={project.name}
              tasks={project.tasks}
              onDeleteProject={onDeleteProject}
              onSaveProject={onSaveProject}
              onCreateTask={onCreateTask}
            />
          )
        })
      }
    </ul>
  )
}