import React, { useState } from 'react'
import Form from './Form'

function List() {
    const [toDos, setToDos] = useState([])

    const addtoDo = (toDo) => {
        console.log(toDo)
        const toDosCopy = [...toDos]
        toDosCopy.push(toDo)
        setToDos(toDosCopy);
        console.log(toDos)
    }

    const markAsCompleted = (name) => {
        const idx = toDos.findIndex(todo => todo.name === name)
        const toDosCopy = [...toDos];
        toDos[idx].completed = !toDosCopy[idx].completed;
        setToDos(toDosCopy);
    }
    return (
        <div>
            <div>
                {toDos.map((toDo) => {
                    return <p key={toDo.name} onClick={() => markAsCompleted(toDo.name)}
                        className={toDo.completed ? "strike": ""}
                    >{toDo.name}</p>
                })}
            </div>
            <Form onaddtoDoCallback={addtoDo} />
        </div>
    )

}
export default List;