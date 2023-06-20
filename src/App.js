import { useEffect, useRef, useState } from 'react';
import './App.css';
import {FaSun,FaMoon} from 'react-icons/fa'
useState
import Movie from './Movie';
//c5bc0fc5
const API_URL = 'http://www.omdbapi.com?apikey=c5bc0fc5'

function App() {
  const inputRef = useRef(null);
  const [movielist,setmovielist]=useState([]);
  const [inputvalue,setinputvalue]=useState();
  const [searchitem,setsearchitem]=useState('Superman')
  const handleinputChange = ()=>{
    setinputvalue(inputRef.current.value);
  }
  const searchbhai = ()=>{
    setsearchitem(inputvalue);
    inputRef.current.value = '';
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchbhai();
    }
  };
  const searchMovie = async (title)=>{
    try{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data =await response?.json();
    //console.log(data);
    setmovielist(data?.Search);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    searchMovie(searchitem);
  },[searchitem]);
  const [showing,isshowing] = useState(false);
  const change = () =>{
    isshowing(!showing);
  }
  return (
    <div className='app-container'>
      <div className="App" style={{backgroundColor: showing ? "white" :"skyblue",color: showing ? "black" : "white"}}>
        <div className='title'>
          <input ref={inputRef} type="text" onChange={handleinputChange} 
          onKeyPress={handleKeyPress}
          className='search-bar'></input>
          <button className="button" onClick={searchbhai}>Search</button>
          <button className='but' onClick={change}>{showing ? <FaMoon/> : <FaSun/> }</button>
        </div>
        <div className='main-body'>
          {movielist?.map((movie)=>(
           <Movie name={movie?.Title} image={movie?.Poster} year={movie?.Year}></Movie>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
