import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete,onGoToEdit}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} 
        task={task} 
        onDelete={onDelete}
        onEdit={onGoToEdit}/> 
    ))}
    </>
  )
}

export default Tasks