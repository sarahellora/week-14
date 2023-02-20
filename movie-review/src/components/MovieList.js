import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {

  
return (
    <div>
        <Movie movies={props.movies}/>

    </div>
    )
}
export default MovieList