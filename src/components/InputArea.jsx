import React, { useState } from 'react'

function InputArea(props) {
    const [inputText, setInputText] = useState('');

    function handleChange(event) {
        let handleValue = event.target.value;
        setInputText(handleValue)
    }
    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText}/>
            <button onClick={() => {
                props.addBtn(inputText)
                setInputText('')
            }}>
            <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea