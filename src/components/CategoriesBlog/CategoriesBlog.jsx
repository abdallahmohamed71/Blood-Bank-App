import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './CategoriesBlog.scss'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import db from '../../data/db.json'

export default function CategoriesBlog () {
    const [inputdata,setinputdata]=useState("");
    let data =db.posts;
    data.filter(post => {
        if (inputdata === ''){
          return post;
        }else if (post.title.toLocaleLowerCase().includes(inputdata.toLocaleLowerCase() )){
          return post;
        }else if (post.pragraph.toLocaleLowerCase().includes(inputdata.toLocaleLowerCase() )){
          return post;
        }



      })
  return (
    
    <div className='col-12' id='CategoriesBlog'>
            <div className='col-12 container'>
            <div className='row'>
                 <div className='col-12 search'>
                    
                        <h3>Search</h3>
                        <InputGroup className='div_search'>
                       <Form.Control aria-label="Dollar amount (with dot and two decimal places)" className='inp_search' onKeyUp={(e)=>{
                              setinputdata(e.target.value)
                                }} />
                        <InputGroup.Text className='icon_search'><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                       </InputGroup>
                 </div>
                 <div className="col-12 category">
                    <h3>Categories</h3>
                  <ListGroup as="ol" >
                   <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" >
                   <div className="ms-2 me-auto">
                   Blood Relation
                       
                       </div>
                        <Badge bg="primary" pill>
                            32
                     </Badge>
                 </ListGroup.Item>
                  <ListGroup.Item as="li"className="d-flex justify-content-between align-items-start" >
               <div className="ms-2 me-auto">
               AB- Blood Donor
               </div>
                 <Badge bg="primary" pill>
                 14
                 </Badge>
                </ListGroup.Item>
                <ListGroup.Item as="li"className="d-flex justify-content-between align-items-start">           
               <div className="ms-2 me-auto">
               Keep Safe Blood
                 </div>
              <Badge bg="primary" pill>
                14
             </Badge>
              </ListGroup.Item>
              <ListGroup.Item as="li"className="d-flex justify-content-between align-items-start">           
               <div className="ms-2 me-auto">
               Preserve Blood
                 </div>
              <Badge bg="primary" pill>
                20
             </Badge>
              </ListGroup.Item>
              <ListGroup.Item as="li"className="d-flex justify-content-between align-items-start">           
               <div className="ms-2 me-auto">
               Donation Center
                 </div>
              <Badge bg="primary" pill>
                45
             </Badge>
              </ListGroup.Item>
              <ListGroup.Item as="li"className="d-flex justify-content-between align-items-start">           
               <div className="ms-2 me-auto">
               Proper Education
                 </div>
              <Badge bg="primary" pill>
                44
             </Badge>
              </ListGroup.Item>
                   </ListGroup>
                 </div>
                 <div className='col-12 Recent_Posts'>
                    <h3>Recent Posts</h3>
                      
                    <ListGroup as="ol" >
      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" >
        <div className="ms-2 me-auto">
          <div className="inf_recent">Zomato Commits to Making Food Delivery</div>
          <p>
            <FontAwesomeIcon icon={faCalendarDays} />   April 19, 2017
          </p>
          
        </div> </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" >
        <div className="ms-2 me-auto">
          <div className="inf_recent">Make Kalam's House A Knowledge Centre</div>
         <p>
         <FontAwesomeIcon icon={faCalendarDays} />  April 18, 2017</p> 
        </div>
  
      </ListGroup.Item>
      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="inf_recent">Central Government Retracts Proposal</div>
          <p>
            <FontAwesomeIcon icon={faCalendarDays} />  April 17, 2017
          </p>
          
        </div>
      </ListGroup.Item>
    </ListGroup>
                 </div>
                 <div className='col-12 Tags'>
                           <h3>Tags</h3>
                    <div className='btn_tags'>
                        <div class=" div_tags">
                        <Button variant="outline-danger">Claycold</Button>
                        <Button variant="outline-danger">Crushing</Button>
                        <Button variant="outline-danger">Chattels</Button>
                        </div>
                        <div class=" div_tags">
                        <Button variant="outline-danger">Dinarchy</Button>
                        <Button variant="outline-danger">Cienaga</Button>
                        <Button variant="outline-danger">Doolie</Button>
                        </div>
                    </div>

                 </div>
            </div>

        </div>
        
    </div>
  )
}
