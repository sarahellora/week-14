import React from 'react'
import { FaStar } from 'react-icons/fa';


const Stars = (props) => {
const numberOfStars= [...Array(props.stars).keys()]
return (
    <div>
        <h3>{numberOfStars.map((index)=> <FaStar key={index+'faStar'} />)}</h3>
    </div>)
}
export default Stars