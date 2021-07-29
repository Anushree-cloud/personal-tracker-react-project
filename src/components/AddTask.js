import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmitListener = (e) => {
        e.preventDefault()
        if(!text) {
            alert("Please add a task first")
            return
        }
        onAdd({text, day, reminder}) 

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmitListener} >

            <div className="form-control">
                <label>Task Name</label>
                <input 
                    type="text" 
                    placeholder="Eg. Meet Alexa" 
                    value={text}
                    onChange={ e => setText(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Day</label>
                <input 
                    type="text" 
                    placeholder="Eg. 15 August 1947" 
                    value={day}
                    onChange={ e => setDay(e.target.value)}
                />
            </div>

            <div className="form-control form-control-check">
                <label>Add Reminder</label>
                <input 
                    type="checkbox"
                    checked= {reminder}
                    value={reminder}
                    onChange={ e => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />

        </form>
    )
}

export default AddTask
