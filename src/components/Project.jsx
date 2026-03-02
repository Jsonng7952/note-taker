import { useState } from "react";
import { TaskList } from "./TaskList";

export const Project = ({ id, name, tasks, onDelete, onSave, onCreateTask, onDeleteTask, onSaveTask }) => {

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

    onSave(id, newName);
    setView("default");
  }

  const handleCreateTask = (event) => {
    event.preventDefault();  

    const {name, description} = taskForm;

    onCreateTask(id, name, description);

    setTaskForm({
      name: "",
      description: ""      
    })

    setView("default");
  }

  const handleTaskInputChange = (event) => {
    const {name, value} = event.target;

    setTaskForm(prev => ({
      ...prev,
      [name]: value
    }));
  }
  
  const handleDeleteTask = (taskId) => {
    onDeleteTask(id, taskId);
  }

  const handleSaveTask = (taskId, taskName, taskDescription) => {
    onSaveTask(id, taskId, taskName, taskDescription);
  }

  const editView = (
    <li>
      <form onSubmit={handleSaveProject}>
        <input type="text" value={newName} onChange={handleProjectInputChange}/>
        <button type="button" onClick={() => setView("default")}>Cancel</button>
        <button type="submit">Save</button>
      </form>

      <TaskList 
        tasks={tasks} 
        onDeleteTask={handleDeleteTask} 
        onSaveTask={handleSaveTask}
      />
    </li>
  );

  const defaultView = (
    <li>
      <h2>{name}</h2>
      <button onClick={() => setView("edit")}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => setView("newtask")}>New Task</button>

      <TaskList 
        tasks={tasks} 
        onDeleteTask={handleDeleteTask} 
        onSaveTask={handleSaveTask}
      />
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