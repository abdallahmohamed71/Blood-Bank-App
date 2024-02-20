import '../Form/Form.scss';
import { ErrorMessage, Field, Form, Formik } from "formik";
import logo2 from '../../Assets/logo2.png'
export default function REQUEST() {
  return (
 <>
 <div className='col-12 ' id='APPOINTMENT'>
  <div className='container'>
    <div className='row'>
        <div className='col-12  helpfull '> 
       
   <div>
    <h4>Good To Know</h4>
    <span></span>
    <h2>Helpful Information</h2>
    <ul className='Helpful_Information'>
      <li>Maintain a healthy iron level by eating iron rich foods.</li>
      <li>Drink an extra 16 oz. of water prior to your donation.</li>
      <li>Avoid alcohol consumption before your blood donation.</li>
      <li>Remember to bring the donor card or national ID/Passport.</li>
      <li>Finally, Try to get a good night sound sleep after donation.</li>
    </ul>
   </div>
        

 </div>
 {/* <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 animate__animated animate__bounce content_form animate__zoomIn' id='REQUEST'>
  <div className='row'> 
 <div className='text_form'>
        <h2>REQUEST APPOINTMENT</h2>
        </div>
     <div className='content_form'>
     <Formik 
     initialValues={{
      name:'',
      email:'',
      phone:'',
      date:'',
      city:{
        value:''
      },
     }}
    //  validationSchema={DonateSchemas}
    //  onSubmit={(values)=>{
    //   handelDonteData(values)
      
    //  }}
     > 
  <Form className='col-12'>
    <div className="col-12 grid-container  row">
             <div className='col-lg-5 col-md-6 col-sm-12"' >
                <Field type="text" name='name' placeholder='Name' />
                <span className="text-danger"><ErrorMessage name="name" /> </span>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12"'>
                   <Field type="email" name='email' placeholder='Email' />
                <span className="text-danger"><ErrorMessage name="email" /> </span>
              </div>
            <div className='col-lg-5 col-md-6 col-sm-12"'>
                <Field type="tel" id='phone' name='phone' placeholder='Phone' />
                <span className="text-danger"><ErrorMessage name="phone" /> </span>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12"'>
                   <Field as="select"  name="City" id="" >
                 <option label='City'></option>
                 <option value="Cairo">Cairo</option>
                 <option value="Giza">Giza</option>
              </Field>
              <span className="text-danger"><ErrorMessage name="City" /> </span>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12"'>
                  <Field type="date" name='date' placeholder='Date' />
                <span className="text-danger"><ErrorMessage name="date" /> </span>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12"'>
              <Field type='time'  name="Time" id="" />            
              <span className="text-danger"><ErrorMessage name="Time" /> </span>
            </div >
            <div className='col-12"'>
            <textarea id="yourmessage" name="yourmessage" value="" readOnly > Your Message... </textarea>
            <span className="text-danger"><ErrorMessage name="yourmessage" /> </span>
            </div>
           <div className='btn_donate'>
            <button className='GET_APPOINTMENT' type="submit">GET APPOINTMENT</button>
           </div>
                
         
    </div>
           
        </Form>

     </Formik>
    </div>  
  </div>


  
 </div> */}

    </div>
  </div>


 </div>



 </>
  )
};
            