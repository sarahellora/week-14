import React, { Fragment } from 'react'
import Movie from './Movie'
import Stars from './Stars'

const MovieList = (props) => {

    return (
    <div className='movieContainer'>
        { props.movies.map((movie) =>
        <div>
                <Movie title={movie.title} image={movie.image} review={movie.review}/>
                <Stars stars={movie.stars}/>
        </div>       
         )}
    </div>
    )
}
export default MovieList