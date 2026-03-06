import { Task } from "./Task"

export const TaskList = ({tasks, onDeleteTask, onSaveTask}) => {

  return (
    <ul>
      {tasks.map((task) => {
        return(
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
            completed={task.completed}
            priority={task.priority}
            dueDate={task.dueDate}
            onDelete={onDeleteTask} 
            onSave={onSaveTask}
          />
        )
      })}
    </ul>
  )
}