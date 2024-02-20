import React from 'react'
import './Join.scss';
import Opinion from '../Opinion/Opinion';


export default function Join() {
  return (
    <div className='col-12 'id='JOIN_WITH'> 
      <div className='col-12 header_join'>
        <div className='text_header_join'>
                <h4>Awesome Words From Members</h4>
        <span></span>
        <h2>JOIN WITH US AND SAVE LIFE</h2>
        </div>
        <div className='col-12  Opinion'>
          <div className='container'>
            <div className='row'>
            <Opinion />
            </div>
          </div>
        
        </div>
    
      </div>
    </div>
  )
}
