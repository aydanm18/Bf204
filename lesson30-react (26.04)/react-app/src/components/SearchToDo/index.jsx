import React from 'react'
import PropTypes from 'prop-types'

const SearchToDo = ({ setSearchQuery }) => {
    function handleSearch(e) {
        setSearchQuery(e.target.value)
    }
    return (
        <input onKeyUp={(e) => handleSearch(e)} type="text" placeholder='Search Todo' />
    )
}

SearchToDo.propTypes = {
    setSearchQuery: PropTypes.func.isRequired
}
export default SearchToDo