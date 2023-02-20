import React from 'react'
import { FaStar } from 'react-icons/fa';


const Stars = (props) => {
const numberOfStars= [...Array(props.movies[0].stars).keys()]



return (
    <div>
        <h3>{numberOfStars.map((index)=> <FaStar />)}</h3>
    </div>)
}
export default Stars