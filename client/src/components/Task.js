import { FaTimes } from 'react-icons/fa'
import Button  from './Button'
import { useNavigate} from "react-router-dom"

export default function Task  ({ task ,onDelete,onEdit})  {
  const navigate = useNavigate();
  debugger
   return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} >
      <h3>
        {task.id}{''}
        <FaTimes style={{ color: 'red ', cursor: 'pointer' }}
         onClick={()=>onDelete(task.id)} />
        </h3>
      <p >{task.title}
      
      <Button  color={'green'} text={'Edit' } className='btn'  onClick={()=>{onEdit(task.id)
       navigate(`/Update/${task.id}`,
       { state: { id:task.id, text:`${task.title}`, day:`${task.userId}`, reminder:`${task.body}`} })
      }}>Edit</Button>
    
      
      </p>
    </div>
  )
}




// import { FaTimes } from 'react-icons/fa'

// export default function Task  ({ task ,onDelete, onToggle})  {
//   return (
//     <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
//       <h3>
//         {task.id}{''}
//         <FaTimes style={{ color: 'red ', cursor: 'pointer' }}
//          onClick={()=>onDelete(task.id)} />
//       </h3>
//       <p>{task.title}</p>
//     </div>
//   )
// }
