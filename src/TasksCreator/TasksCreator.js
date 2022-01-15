import React, { useState } from 'react';
import './TasksCreator.css'

function TasksCreatorForm(props){
    const [value, SetValue] = useState("");

    return(
        <div className="ToDoForm-shell">
            <div className='ToDoForm'>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    if (value === ""){
                        return
                    }else {
                        const currentValue = value;
                        SetValue("");
                        props.createTask(currentValue);
                    }
                }} >
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