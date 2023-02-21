import React from 'react'

const Movie = (props) => {
return (
    <div key={props.index} >
        <img src = {props.image} width={200} height={200} />
        <h3>{props.title}</h3>
        <h3>{props.review}</h3>
    </div>)
}
export default Movie