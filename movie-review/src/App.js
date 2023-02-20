import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';

function App() {

  const movies=[{
    title:"bob the builder",
    review:"this movie was teriblle",
    rating: 4
}]    
  return (
    <div className="App">
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
