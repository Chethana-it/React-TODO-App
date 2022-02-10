import React from "react";

const ToDoList = ({toDoItems}) => {

   console.log('is rendering..');

    return(<div style={{textAlign: 'center'}}>
            <ul>
            {toDoItems.map((toDoItem) => {
                    return <li key={toDoItem.id}>{toDoItem.name}</li>
                })}
                </ul>
        </div>)
} 

export default ToDoList;