import React, { useState } from 'react';
import './App.css';
import TasksCreatorForm from './TasksCreator/TasksCreator.js';
import ToDoItem from './ToDoItem/ToDoItem';

function App(){
    const [tasksList, setTasksList] = useState([]);
    const [startId, setStartId] = useState(0);
    const [sortMode, setSortMode] = useState(null);


    const createTask = (value) => {
        const newTasksList = [{
          task: value,
          id: startId,
          priority: 0,
          checked: false,
        },...tasksList];
        newTasksList.forEach((item,index) => {
          item.priority=index;
        });
        setStartId(startId + 1);
        setTasksList(newTasksList);
    }

    const handleChangePriority = (risingElementPriority ,direction) => {
        if (direction === "up"){
            const interleavedElement =  tasksList.filter(item => (sortMode === null ? true : item.checked === sortMode) && item.priority < risingElementPriority).pop();
            if (interleavedElement !== undefined){
              const newPriority = interleavedElement.priority;
              const newTasksList = [...tasksList];
              newTasksList[newPriority].priority = risingElementPriority;
              newTasksList[risingElementPriority].priority = newPriority;
              newTasksList.sort((item1,item2) => {return (item1.priority - item2.priority)});
              setTasksList(newTasksList);
            }
          }
        else if(direction === "down"){
            const interleavedElement = tasksList.filter(item => (sortMode === null ? true : item.checked === sortMode) && item.priority > risingElementPriority)[0];
            if (interleavedElement !== undefined){
              const newPriority = interleavedElement.priority;
              const newTasksList = [...tasksList];
              newTasksList[newPriority].priority = risingElementPriority;
              newTasksList[risingElementPriority].priority = newPriority;
              newTasksList.sort((item1,item2) => {return (item1.priority - item2.priority)});
              setTasksList(newTasksList);
            }
        }
        }
    

    const handleRemove = (removeElementPriority) => {
        const newTasksList = [...tasksList];
        newTasksList.splice(removeElementPriority,1)
        newTasksList.forEach((item,index) => {
          item.priority=index;
        })
        setTasksList(newTasksList);
    }

    const handleChecked = (checkedElementPriority) => {
        const newTasksList = [...tasksList];
        const checkedElement = newTasksList[checkedElementPriority];
        checkedElement.checked = !checkedElement.checked;
        setTasksList(newTasksList);
    }

    const toDoList = tasksList.filter(item => {
      if (sortMode === null){
        return true
      }
      return item.checked === sortMode;
    }).map(item => {
      return(
        <ToDoItem
          key = {item.id}
          description = {item.task}
          checked = {item.checked}
          handleUpgrade = {() => handleChangePriority(item.priority, "up")}
          handleDowngrade = {() => handleChangePriority(item.priority, "down")}
          handleRemove = {() => handleRemove(item.priority)}
          handleChecked = {() => handleChecked(item.priority)}
        />
      )
    })
   
    return (
      <div className="App">
        <button className={sortMode === null ? 'current-sort-button' : 'sort-button'} onClick={() => {setSortMode(null)}}>All</button>
        <button className={sortMode === false ? 'current-sort-button' : 'sort-button'} onClick={() => {setSortMode(false)}}>Undone</button>
        <button className={sortMode === true ? 'current-sort-button' : 'sort-button'} onClick={() => {setSortMode(true)}}>Done</button>
        <div className="ToDoHeader">
          <h1>ToDo</h1>
         </div>
        <TasksCreatorForm
        createTask = {(value) => createTask(value)}
        /> 
       {toDoList}
      </div>
    )
}

export default App;
