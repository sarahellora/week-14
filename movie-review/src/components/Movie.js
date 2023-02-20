import React from 'react'

const Movie = (props) => {

return (
    <div>
        testing
        <h3>{props.movies[0].title}</h3>
        <h3>{props.movies[0].review}</h3>
        <h3>{props.movies[0].rating}</h3>

        

    </div>)
}
export default Movie