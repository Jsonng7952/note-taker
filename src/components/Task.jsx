
export const Task = ({id, name, description}) => {
  return (
    <li>
      <h3>{name}</h3>
      <span>{description}</span>
      <button>Edit</button>
      <button>Delete</button>
    </li>    
  )
}