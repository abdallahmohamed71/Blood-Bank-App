import React from 'react'
import loader from '../../Assets/loader.gif'
// import ContentLoader from 'react-content-loader';
import { ThreeCircles } from 'react-loader-spinner'
import './Loader.scss'
export default function Loader(props) {
  return (
    <>
    <div id="preloader">
            <span className="margin-bottom">
                {/* <img src="images/loader.gif" alt=""> */}
                    <img src={loader} alt="" />

                </span>
        </div>
    </>

  
  )
}
{/* <ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="red"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /> */}