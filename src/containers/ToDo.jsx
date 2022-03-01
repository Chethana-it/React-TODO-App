import React, { useState } from "react";

import ToDoList from "../components/ToDoList";

 const ToDo = () => {

  const [newTodo, setNewTodo] = useState(''); //usestete is afunction. this returns array. setState eken karana ekamai me setNewTOdo eken karanneth
  const [toDoItems, setTodoItems ] = useState([]);
//   const todoState = useState[''];
//   newTodo  = todoState[0];
//   setNewTOdo = todoState[1];

    return(
        <div  style = {{textAlign: 'center'}}>
             <h1>TODO</h1>
             <h2>Add My</h2>
             <input value= {newTodo} onChange = {(event) => {
                 setNewTodo(event.target.value);
           }}
 />
             <button onClick={()=> {

                setTodoItems([...toDoItems, {
                    id: Math.random(),
                    name: newTodo
               }])
             }}
 >ADD</button>
             <h2>Today's Task List</h2>
            <ToDoList toDoItems={toDoItems} name = 'Hello'/>
         </div> 
    )
            }
    export default  ToDo;



