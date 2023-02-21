import React from 'react'
import ReviewForm from './ReviewForm'

const ReviewList = (props) => {
return (
    <div >
        <ReviewForm addReview={props.addReview}/>
    </div>
    )
}
export default ReviewList