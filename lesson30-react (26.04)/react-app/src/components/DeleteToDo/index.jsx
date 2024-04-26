import React from 'react'
import PropTypes, { string } from "prop-types"

const DeleteToDo = ({ id, setTodos }) => {

    function handleDelete() {
        if (window.confirm("are you sure to delete?")) {
            setTodos((todos) => {
                return todos.filter((todo) => {
                    return todo.id !== id
                })
            })
        }
    }
    return (
        <button onClick={handleDelete}

        >Delete</button>
    )
}
DeleteToDo.propTypes = {
    id: PropTypes.string.isRequired,
    setTodos: PropTypes.func.isRequired
}
export default DeleteToDo