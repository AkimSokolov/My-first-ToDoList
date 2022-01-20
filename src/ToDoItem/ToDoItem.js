import React, { useState } from 'react';
import './ToDoItem.css';

function ToDoItem(props){
    const [description, setDescriprion] = useState(props.description);
    const [disabled, setDisabled] = useState(true);
    
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
                        onChange={(event) => setDescriprion(event.target.value)}
                        className={props.checked ? 'task-descriprion-checked' : 'task-descriprion'}
                        disabled = {disabled}
                    />
                </label>
                <button 
                    className="change-descriprtion"
                    onClick ={() => setDisabled(!disabled)}
                >&#128393;</button>
                <button 
                    className="remove-task"
                    onClick={() => props.handleRemove()}
                >&#10006;</button>

                <input 
                    type="checkbox"
                    checked = {props.checked}
                    className="todo-checkbox"
                    onChange={() => {}}
                    onClick={() =>  props.handleChecked()}
                />        
             </div>
        </div>
    )
}
export default ToDoItem;