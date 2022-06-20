import ToDoList from './comp/ToDoList'
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'





function App() {

  const [toDoArr, setToDoArr] = React.useState([])
  const toDoInput = React.useRef();



  function handleToDoInput(event) {
    const userInput = toDoInput.current.value
    if (userInput === '') {
      return
    }
    setToDoArr(prev => [...prev, userInput])
    toDoInput.current.value = ''
    console.log(userInput)
  }

  function removeFromList(event) {
    console.log(typeof (event.target.name))
    const arrAfterRemove = toDoArr.filter(arr => arr !== event.target.name);
    setToDoArr(arrAfterRemove);
  }

  function clearToDo() {
    setToDoArr([])
  }

  return (
    <>

      <ToDoList toDoArr={toDoArr} handleX={removeFromList} />
      <div className='btn--div'>
        <Button onClick={handleToDoInput} className="btn--add">Add ToDo</Button>
        <span className='span--for--space'></span>
        <Button variant="danger" onClick={clearToDo} className="btn--claer-all">Clear ToDo</Button>
      </div>
      <div className='input--div'>
        <input ref={toDoInput} type="text" className="input--text"></input>
      </div>
      <h1 className='h1'>
        {toDoArr.length > 0 ? `${toDoArr.length} more left` : 'The TO-DO list is empty'}
      </h1>

    </>

  );
}

export default App;
