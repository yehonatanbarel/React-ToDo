import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'


function SingleToDo(props) {
    return (
        <div className="single--toDo--div">
            {props.singleFromToDo}
            <Button variant="danger" onClick={props.handleX} name={props.singleFromToDo} className="close">
                X
            </Button>

        </div>
    )
}



export default SingleToDo;
