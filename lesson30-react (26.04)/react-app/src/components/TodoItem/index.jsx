import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DeleteToDo from '../DeleteToDo'
import MarkToDo from '../MarkToDo'

const TodoItem = ({ todo, setTodos }) => {
    return (
        <li>
            <span style={{textDecoration:todo.isDone?"line-through":"none"}}>{todo.title},
                <i>{moment(todo.createAt).format('MMM Do YY, h:mm a')}</i></span>
            <MarkToDo id={todo.id} setTodos={setTodos} />
            < DeleteToDo id={todo.id} setTodos={setTodos} />
        </li>

    )
}
TodoItem.proptypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        createAt: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Date),
        ]).isRequired,
        isDone: PropTypes.bool.isRequired
    }),
    setTodos: PropTypes.func.isRequired
}
export default TodoItem