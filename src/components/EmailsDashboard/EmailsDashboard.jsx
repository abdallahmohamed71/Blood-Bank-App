import React, { useState } from 'react'
import './EmailsDashboard.scss'
import Accordion from 'react-bootstrap/Accordion';
import db from '../../data/db.json'
export default function EmailsDashboard() {
    const [Emails]=useState(db.Email)
  return (
    <div className='col-12 container' id='Users'>
    <div className='container'>
      <div className='row'>
           <div className='col-12 head_table'>
      <h2>Emails</h2>
      {/* <form action="">
      <input type="text" placeholder='Search'onKeyUp={(e)=>{
       setinputdata(e.target.value)
    }} />
      </form> */}
    </div>
      <div className='row'>
      <Accordion defaultActiveKey="0">
        {Emails.map((email)=>{
            return( <Accordion.Item eventKey="1">
        <Accordion.Header>{email.name}</Accordion.Header>
        <Accordion.Body>
            <h3>{email.subject}</h3>
            {email.message}
            <br />
            <br />
            <a href={email.email}>{email.email}</a>
        </Accordion.Body>
      </Accordion.Item>

            )
        })

        }
     
     
    </Accordion>
      </div>
      </div>
    </div>

        </div>
  )
}
