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
        <div className='items'>
            <li 
                style={{textDecoration: isDone ? 'line-through' : null}} 
                onClick={checkItem} 
            >{props.item}</li>
            <button 
                onClick={() => {
                    props.deleteItem(props.id)
                }}
                className='deleteBtn'>
                <span>delete</span>
            </button>
        </div>
    )
}

export default TodoItem