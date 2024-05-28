import React, { useState } from 'react'

function TodoItem(props) {
    // check todo
    const [isDone, setIsDone] = useState(false)
    function checkItem() {
        setIsDone(prevValue => {
            return !prevValue
        })
    }
    return (
        <div>
            <li 
                style={{textDecoration: isDone ? 'line-through' : null}} 
                onClick={checkItem} 
            >{props.item}</li>
        </div>
    )
}

export default TodoItem