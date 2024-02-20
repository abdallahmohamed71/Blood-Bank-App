import React, { useEffect } from 'react'
import eror from '../../Assets/eroe.webp'
import './Eror.scss';
import { useLocation } from 'react-router-dom';


export default function () {

  
        
     
  return (
    <div className="col-12 error" id="error">
            <div className="container">
                <div className="content centered">
                    <img src={eror} width="500px" alt="" />
                    <h1>Oops, looks like the page is lost.</h1>
                    <p  className="sub-header text-block-narrow">This is not a fault, just an accident that was not intentional.</p>
                </div>
        </div>



</div>
  )
}
