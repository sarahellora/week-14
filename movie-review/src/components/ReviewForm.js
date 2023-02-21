import React  from 'react'
import Review from './Review'
import { useState } from 'react'

const ReviewList = (props) => {
    const [image,setImage]=useState('https://upload.wikimedia.org/wikipedia/en/4/48/Bluey_%282018_TV_series%29_title_card.jpg')
    const [title,setTitle]=useState('Bluey')
    const [stars,setStars]=useState(1)
    const [review,setReview]=useState('Its really good')
    
    const handleRatingsReview = (e) =>{
        const reviewText = e.target.value
        setReview(reviewText)
      }
      const handleImage = (e) =>{
        const image = e.target.value
        setImage(image)
      }
      const handleTitle = (e) =>{
        const title = e.target.value
        setTitle(title)
      }
      const handleStars = (e) =>{
        const stars = e.target.value
        setStars(stars)
      }


return (
    <div className='reviewList' >
      <form>
    <textarea value={image}  placeholder='Image Link' onChange={(e)=> handleImage(e)}></textarea>
    <textarea value={title}  placeholder='Title' onChange={(e)=> handleTitle(e)}></textarea>
    <textarea value={review}  placeholder='Tell us what you think' onChange={(e)=> handleRatingsReview(e)}></textarea>
    <input type="number" value={stars}  placeholder='Number of Stars' onChange={(e)=> handleStars(e)}></input>


      <input type="submit" value="Submit" onClick={(e)=> props.addReview(e,title,image,review,stars)} />
    </form>
    </div>
    )
}
export default ReviewList