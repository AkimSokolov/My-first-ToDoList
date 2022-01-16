import React, { useState } from 'react';
import './ToDoItem.css';

function ToDoItem(props){
    const [description, SetDescriprion] = useState(props.description);
    const [disabled, SetDisabled] = useState(true);
    
    return(
        <div className='todo-item-shell'>
            <div className='todo-item'>
                <button 
                    className="change-priority"
                    onClick={() => props.handleUpgrade()}
                >&#5123;</button>
                <button
                    className="change-priority"
                    onClick={() => props.handleDowngrade()}
                >&#5121;</button>
                <label >
                    <input 
                        type="text" 
                        value={description} 
                        onChange={(event) => SetDescriprion(event.target.value)}
                        className={props.checked ? 'task-descriprion-checked' : 'task-descriprion'}
                        disabled = {disabled}
                    />
                </label>
                <button 
                    className="change-descriprtion"
                    onClick ={() => SetDisabled(!disabled)}
                >&#128393;</button>
                <button 
                    className="remove-task"
                    onClick={() => props.handleRemove()}
                >&#10006;</button>

                <input 
                    type="checkbox"
                    className="todo-checkbox"
                    onClick={() =>  props.handleChecked()}
                />        
             </div>
        </div>
    )
}
export default ToDoItem;