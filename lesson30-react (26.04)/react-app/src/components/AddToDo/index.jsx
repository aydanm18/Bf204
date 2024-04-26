import React, { useState } from 'react'
import PropTypes from "prop-types"
import TodoItem from '../../classes/TodoItem';

const AddToDo = ({ todos, setTodos }) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (inputValue.trim() === "") {
                window.alert("Input is Required")
            } else {
                setTodos([...todos, new TodoItem(inputValue)]);
                setInputValue("");
            }
        }}>
            <input onChange={(e) => { setInputValue(e.target.value) }} type="text" placeholder='Enter your todo' value={inputValue} />
            <button type='submit'>Add</button>
        </form>
    )
}
AddToDo.propTypes = {
    todos: PropTypes.array,
    setTodos: PropTypes.func
}
export default AddToDo