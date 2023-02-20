import React from 'react'
import Movie from './Movie'
import Stars from './Stars'

const MovieList = (props) => {
return (
    <div>
        <Movie movies={props.movies}/>
        <Stars movies={props.movies}/>

    </div>
    )
}
export default MovieList