import { useState } from "react";
import { TaskList } from "./TaskList";

export const Project = ({ id, name, tasks, onDelete, onSave, onCreateTask, onDeleteTask, onSaveTask }) => {

  const [view, setView] = useState("default");
  const [newName, setNewName] = useState(name);

  const [taskForm, setTaskForm] = useState({
    name: "",
    description: "",
    completed: undefined,
    priority: "",
    dueDate: ""
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

    const {name, description, completed, priority, dueDate} = taskForm;

    onCreateTask(id, name, description, completed, priority, dueDate);

    setTaskForm({
      name: "",
      description: "",
      completed: false,
      priority: "",
      dueDate: ""
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

  const handleSaveTask = (taskId, taskName, taskDescription, taskCompleted, taskPriority, taskDueDate) => {
    onSaveTask(id, taskId, taskName, taskDescription, taskCompleted, taskPriority, taskDueDate);
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

        <input type="date" name="dueDate" onChange={handleTaskInputChange}/>
        <select name="priority" onChange={handleTaskInputChange}>
          <option value={"None"}>None</option>
          <option value={"Low"}>Low</option>
          <option value={"Medium"}>Medium</option>
          <option value={"High"}>High</option>
        </select>

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