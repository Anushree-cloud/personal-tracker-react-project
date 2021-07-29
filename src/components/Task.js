

const Task = ({task}) => {
    return (
        <div className="task">
            <h2>{task.text}</h2>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
