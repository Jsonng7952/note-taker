import { useState } from "react";

export const Task = ({id, name, description, onDelete, onSave}) => {

  const [view, setView] = useState("default");
  const [newTaskForm, setNewTaskForm] = useState({
    name: name,
    description: description
  });

  const handleTaskInputChange = (event) => {
    const {name, value} = event.target;

    setNewTaskForm(prev => ({
      ...prev,
      [name]: value
    }));    
  }

  const handleSaveTask = (event) => {
    event.preventDefault();

    const {name, description} = newTaskForm;

    onSave(id, name, description);
    setView("default");
  }

  const editView = (
    <li>
      <form onSubmit={handleSaveTask}>
        <input type="text" value={newTaskForm.name} name="name" onChange={handleTaskInputChange} placeholder="Task Title"/>
        <input type="text" value={newTaskForm.description} name="description" onChange={handleTaskInputChange} placeholder="Description"/>
        <button type="button" onClick={() => setView("default")}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    </li>
  );

  const defaultView = (
    <li>
      <h3>{name}</h3>
      <span>{description}</span>
      <button onClick={() => setView("edit")}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );

  switch(view) {
    case "default":
      return defaultView;
    case "edit":
      return editView;
    default:
      return defaultView;
  }

}