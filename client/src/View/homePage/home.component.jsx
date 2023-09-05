import { useEffect,useState } from 'react';
import { useDispatch, useSelector} from "react-redux";

import {getVideogames, getByName} from '../../redux/actions';

import Cards from '../../components/cards/cards.component';
import Navbar from '../../components/navbar/navbar.component';

import './home.styles.css';

function Home() {

  const dispatch = useDispatch();
  const allGames = useSelector((state)=> state.allGames);
  
  const [searchString, setsearchString] = useState("");

  function handleChange (e){
    e.preventDefault();
    setsearchString(e.target.value);
 } 

 function handleSubmit(e){
  e.preventDefault();
  dispatch(getByName(searchString));
}

  useEffect(()=>{
    dispatch(getVideogames());
  },[dispatch]);

    return (
      <div className='home'>
        <h2 className='home-title'>VIDEOGAMES</h2>
        < Navbar handleChange = {handleChange} handleSubmit ={handleSubmit}/>
        < Cards allGames={allGames}/>
      </div>
    );
  }
  
  export default Home;