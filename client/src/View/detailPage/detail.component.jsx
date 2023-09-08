import { useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";

import {getByID} from '../../redux/actions/index';

import './detail.styles.css';

function Detail() {
  const dispatch = useDispatch();
  const videogames = useSelector((state)=> state.videogames);

  useEffect(()=>{
    dispatch(getByID())
  },[dispatch])

    return (
      <div className='detail'>
        <p>DetailPage</p>
      </div>
    );
  }
  
  export default Detail;