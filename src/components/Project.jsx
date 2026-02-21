import { useState } from "react";

export const Project = ({ id, name, tasks, onDeleteProject, onSaveProject }) => {

  const [isEdit, setEdit] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSaveProject(id, newName);
    setEdit(false);
  }

  const editView = (
    <li>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={handleInputChange}/>
        <button type="button" onClick={() => setEdit(false)}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    </li>
  );

  const defaultView = (
    <li>
      <h2>{name}</h2>
      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={() => onDeleteProject(id)}>Delete</button>
      <button>New Task</button>
    </li>
  );

  if(isEdit)
    return editView;
  else
    return defaultView;

}