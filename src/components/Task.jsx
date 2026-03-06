import { useState } from "react";

export const Task = ({id, name, description, completed, priority, dueDate, onDelete, onSave}) => {

  const [view, setView] = useState("default");
  const [newTaskForm, setNewTaskForm] = useState({
    name: name,
    description: description,
    completed: completed,
    priority: priority,
    dueDate: dueDate
  });

  const {
    name: taskName, 
    description: taskDescription, 
    completed: taskCompleted, 
    priority: taskPriority, 
    dueDate: taskDueDate
  } = newTaskForm;

  const handleTaskInputChange = (event) => {
    const {name, value, checked, type} = event.target;

    setNewTaskForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));    

    console.log(newTaskForm);
  }

  const handleSaveTask = (event) => {
    event.preventDefault();

    const {name, description, completed, priority, dueDate} = newTaskForm;

    onSave(id, name, description, completed, priority, dueDate);
    setView("default");
  }

  const handleCancelTaskForm = () => {
    setNewTaskForm({
      name: name,
      description: description,
      completed: completed,
      priority: priority,
      dueDate: dueDate
    });  

    setView("default")
  }

  const editView = (
    <li>
      <form onSubmit={handleSaveTask}>
        <input type="text" value={taskName} name="name" onChange={handleTaskInputChange} placeholder="Task Title"/>
        <input type="text" value={taskDescription} name="description" onChange={handleTaskInputChange} placeholder="Description"/>
        
        <input type="date" value={taskDueDate} name="dueDate" onChange={handleTaskInputChange}/>
        <select value={taskPriority} name="priority" onChange={handleTaskInputChange}>
          <option value={"None"}>None</option>
          <option value={"Low"}>Low</option>
          <option value={"Medium"}>Medium</option>
          <option value={"High"}>High</option>
        </select>

        <button type="button" onClick={handleCancelTaskForm}>Cancel</button>
        <button type="submit">Save</button>

        <br/>
          <span>{taskPriority}</span>
          <span>{taskDueDate}</span>
        <br/>
      </form>
    </li>
  );

  const defaultView = (
    <li>
      <h3>{taskName}</h3>
      <input type="checkbox" value={taskCompleted} name="completed" onChange={handleTaskInputChange}/>
      <span>{taskDescription}</span>

      <br/>
        <span>{taskPriority}</span>
        <span>{taskDueDate}</span>
      <br/>

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