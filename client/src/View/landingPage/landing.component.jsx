import {Link} from "react-router-dom";
import './landing.styles.css';

function Landing() {
    return (
      <div className='landing'>
        <div className='center'>
        <p className="p">W E L C O M E</p>
        <Link to="/home" >
         <button className='btn'>S T A R T </button>
        </Link>
        </div>
      </div>
    );
  }
  
  export default Landing;