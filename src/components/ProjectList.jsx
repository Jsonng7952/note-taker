import { useState } from "react";
import { Project } from "./Project";

export const ProjectList = ({ projects, onDeleteProject, onSaveProject, onCreateTask, onDeleteTask, onSaveTask }) => {

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
              onDelete={onDeleteProject}
              onSave={onSaveProject}
              onCreateTask={onCreateTask}
              onDeleteTask={onDeleteTask}
              onSaveTask={onSaveTask}
            />
          )
        })
      }
    </ul>
  )
}