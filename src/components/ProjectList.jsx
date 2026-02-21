import { useState } from "react";
import { Project } from "./Project";

export const ProjectList = ({ projects, onDeleteProject, onSaveProject }) => {

  return(
    <>
      <ul>
        {
          projects.map((project, i) => {
            return (
              <Project 
                key={project.id}
                id={project.id}
                name={project.name}
                tasks={project.tasks}
                onDeleteProject={onDeleteProject}
                onSaveProject={onSaveProject}
              />
            )
          })
        }
      </ul>
    </>
  )
}