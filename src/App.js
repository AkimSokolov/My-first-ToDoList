import React, { useState } from 'react';
import './App.css';
import TasksCreatorForm from './TasksCreator/TasksCreator.js';
import ToDoItem from './ToDoItem/ToDoItem';

function App(){
    const [tasksList, SetTasksList] = useState([]);
    const [startId, SetStartId] = useState(0);
    const [startPriority, setStartPriority] = useState(0);
    
    const createTask = (value) => {
        const currentId = startId;
        const currentPriority =startPriority;
        const currentTasksList = [...tasksList];
        SetStartId(currentId + 1);
        setStartPriority(currentPriority + 1);
        SetTasksList([...currentTasksList, {
          task: value,
          id: currentId,
          priority: currentPriority,
        }])
    }

    const handleChangePriority = (risingElementPriority) => {
        if(!(risingElementPriority % tasksList.length)){
          return;
        }
        const newPriority = risingElementPriority - 1;
        const newTasksList = [...tasksList];
        newTasksList[newPriority].priority = risingElementPriority;
        newTasksList[risingElementPriority].priority = newPriority;
        newTasksList.sort( (toDoItem1,toDoItem2) =>{
          return(toDoItem1.priority - toDoItem2.priority)
        })
        SetTasksList(newTasksList);
    }

    const handleRemove = (removeElementPriority) => {
        const removePriority = removeElementPriority;
        const newTasksList = [...tasksList];
        newTasksList.splice(removePriority,1)
        newTasksList.forEach((item,index) => {
          item.priority=index;
        })
        const currentPriority = newTasksList.length;
        SetTasksList(newTasksList);
        setStartPriority(currentPriority);
    }

    const toDoList = tasksList.map(item => {
      return(
        <ToDoItem
          key = {item.id}
          description = {item.task}
          handleUpgrade = {() => handleChangePriority(item.priority)}
          handleDowngrade = {() => handleChangePriority(item.priority+1)}
          handleRemove = {() => handleRemove(item.priority)}
        />
      )
    })

    return (
      <div className="App">
        <div className="ToDoHeader">
          <h1>ToDo</h1>
         </div>
        <TasksCreatorForm
        createTask = {(i) => createTask(i)}
        /> 
       {toDoList}
      </div>
    )
}

export default App;
