import { useState} from 'react'
import { useLocation, useNavigate} from "react-router-dom"
// import Tasks from './Tasks'

const Update = () => {
  let navigate =useNavigate();
  const {state} = useLocation();
  const { id, text ,day,reminder } = state; 
  const [newtext,setNewText] =  useState(text);
  const [newday,setNewDay] =  useState(day);
  const [newreminder,setReminder] =  useState(reminder);
 
  const update = async e => { 
   
    const task={
      text:newtext , day:newday , reminder:newreminder
    }
    e.preventDefault();
    debugger
       
         const result = await fetch(`http://localhost:5000/update/${id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(task)
        })
        //  Response.JSON(result)
           navigate('/')
      }     

  return (
    <form className='add-form' onSubmit={update} >
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          //placeholder='Add Task'
          defaultValue={text}
          onChange={(e) => setNewText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          //placeholder='Add Day & Time'
          defaultValue={day}
          onChange={(e) => setNewDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          defaultChecked
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
      </div>

      <button type='submit' value='Save Task'  className='btn btn-block' >Save Task</button>
    </form>
  )
}

export default Update