import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onRemind}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onRemind(task.id)}>
            <h2>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ color:"red", float:"right", cursor:"pointer" }} /> </h2>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
