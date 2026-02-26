import { useState } from "react";
import { TaskList } from "./TaskList";

export const Project = ({ id, name, tasks, onDeleteProject, onSaveProject, onCreateTask }) => {

  const [view, setView] = useState("default");
  const [newName, setNewName] = useState(name);

  const [taskForm, setTaskForm] = useState({
    name: "",
    description: ""
  });

  const handleProjectInputChange = (event) => {
    setNewName(event.target.value);
  }

  const handleSaveProject = (event) => {
    event.preventDefault();

    onSaveProject(id, newName);
    setView("default");
  }

  const handleCreateTask = (event) => {
    event.preventDefault();  

    const {name, description} = taskForm;

    onCreateTask(id, name, description);
    setView("default");
  }

  const handleTaskInputChange = (event) => {
    const {name, value} = event.target;

    setTaskForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const editView = (
    <li>
      <form onSubmit={handleSaveProject}>
        <input type="text" value={newName} onChange={handleProjectInputChange}/>
        <button type="button" onClick={() => setView("default")}>Cancel</button>
        <button type="submit">Save</button>
      </form>

      <TaskList tasks={tasks}/>
    </li>
  );

  const defaultView = (
    <li>
      <h2>{name}</h2>
      <button onClick={() => setView("edit")}>Edit</button>
      <button onClick={() => onDeleteProject(id)}>Delete</button>
      <button onClick={() => setView("newtask")}>New Task</button>

      <TaskList tasks={tasks}/>
    </li>
  );
  
  const taskFormView = (
    <li>
      <h2>{name}</h2>
      <form onSubmit={handleCreateTask}>
        <input type="text" name="name" onChange={handleTaskInputChange} placeholder="Task Title"/>
        <input type="text" name="description" onChange={handleTaskInputChange} placeholder="Description"/>

        <button type="button" onClick={() => setView("default")}>Cancel</button>
        <button type="submit">Save Task</button>
      </form>
    </li>
  )

  switch(view) {
    case "default":
      return defaultView;
    case "edit":
      return editView;
    case "newtask":
      return taskFormView;
    default:
      return defaultView;
  }

}