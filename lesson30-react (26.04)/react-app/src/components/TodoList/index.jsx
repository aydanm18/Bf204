import React from 'react'
import PropTypes from 'prop-types'

const TodoList = ({ children }) => {
    return (
        <ul>{children}</ul>
    )
}
TodoList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
export default TodoList