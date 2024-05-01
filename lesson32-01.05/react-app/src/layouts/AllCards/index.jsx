import React from 'react'
import MovieCard from '../Movies/MovieCard'
import PropTypes from "prop-types"

const AllCards = ({data}) => {
  return (
    <div className='movies' style={{display:'flex',gap:"50px",padding:"60px 0"}}>
        {data && data.map((movie)=>{
           return <MovieCard movie={movie} key={movie.id}/>
        })}
    </div>
  )
}

AllCards.prototype = {
    data: PropTypes.array.isRequired
}

export default AllCards