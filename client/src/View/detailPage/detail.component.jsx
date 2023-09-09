import { useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";

import {getByID} from '../../redux/actions/index';

import './detail.styles.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Detail() {
  const dispatch = useDispatch();
  const videogame = useSelector((state)=> state.videogame);
  const params = useParams();

  useEffect(()=>{
    dispatch(getByID(params.id))
  },[dispatch])

    return (
      <div className='detail'>
        <p>DetailPage</p>
      </div>
    );
  }
  
  export default Detail;