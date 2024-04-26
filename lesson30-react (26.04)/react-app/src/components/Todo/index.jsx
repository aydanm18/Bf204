import React, { useState } from 'react'
import AddToDo from '../AddToDo'
import SearchToDo from '../SearchToDo'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    let filterTodos = todos.filter((todo) => {
        return todo.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
    })

    return (
        <>
            <h2>Todo React App</h2>
            <AddToDo todos={todos} setTodos={setTodos} />
            <SearchToDo setSearchQuery={setSearchQuery}/>
            <h3>Todo List</h3>
            <TodoList>
                {
                    filterTodos && filterTodos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
                    })
                }
            </TodoList>
        </>
    )
}

export default Todo