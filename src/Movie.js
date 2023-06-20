
import React from 'react'
import './Movie.css'
function Movie(props) {
  const {name , image, year } = props;
  return (
    <div className='container'>
        <img className='movie-image' src={image}></img>
        <div className='movie-name'>
           {name}
        </div>
        <div className='movie-year'>
            {year}
        </div>
    </div>
  )
}

export default Movie
