import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import ReviewList from './components/ReviewList'
import {useState} from 'react'
function App() {

  const [movies,setMovies]=useState([{
    title:"Toy Story",
    image:"https://flxt.tmsimg.com/assets/p17420_p_v12_bc.jpg",
    review:"this movie was teriblle",
    stars: 4
},{
  title:"Toy Story 2",
  image:"https://lumiere-a.akamaihd.net/v1/images/p_toystory2_19639_4eca9113.jpeg?region=0%2C0%2C540%2C810",
  review:"this movie was teriblle",
  stars: 3
},{
  title:"Toy Story 3",
  image:"https://lumiere-a.akamaihd.net/v1/images/p_toystory3_19639_3c584e1f.jpeg",
  review:"this movie was teriblle",
  stars: 1
}]  )
function addReview(e,title,image,review,stars){
  e.preventDefault()
  setMovies([...movies,{
    title:title,
    image:image,
    review:review,
    stars:parseInt(stars)
  }])
}
  return (
    <div className="App">
      <MovieList movies={movies}/>
      <ReviewList addReview={addReview}/>
    </div>
  );
}

export default App;
