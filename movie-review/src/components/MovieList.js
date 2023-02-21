import React, { Fragment } from 'react'
import Movie from './Movie'
import Stars from './Stars'

const MovieList = (props) => {

    return (
    <div className='movieContainer'>
        { props.movies.map((movie, index) =>
        <div key={index+'movieDiv'}>
                <Movie title={movie.title} index={index} image={movie.image} review={movie.review}/>
                <Stars stars={movie.stars} index={index}/>
        </div>       
         )}
    </div>
    )
}
export default MovieList