import { Task } from "./Task"

export const TaskList = ({tasks}) => {

  return (
    <ul>
      {tasks.map((task) => {
        return(
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
          />
        )
      })}
    </ul>
  )
}