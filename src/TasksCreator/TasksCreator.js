import React, { useState } from 'react';
import './TasksCreator.css'

function TasksCreatorForm(props){
    const [value, SetValue] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === ""){
            return
        }
        props.createTask(value);
        SetValue("");
    }

    return(
        <div className="ToDoForm-shell">
            <div className='ToDoForm'>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input type="submit" value="Create" className='tasks-creator-button'/>
                    <label>
                        <input 
                            type="text" 
                            value={value} 
                            onChange={(event) => SetValue(event.target.value)}
                            placeholder="Create new task"
                            className='ToDoForm-textHolder'
                        />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default TasksCreatorForm;