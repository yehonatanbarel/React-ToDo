import React from "react";
import SingleToDo from "./SingleToDo";
import "./styles.css";



function ToDoList(props) {
    return (
        props.toDoArr.map(singleFromToDo => {
            return <SingleToDo handleX={props.handleX} key={singleFromToDo} singleFromToDo={singleFromToDo} />
        })
    )
};

export default ToDoList;