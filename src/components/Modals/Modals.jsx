import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Donate from '../Donate/Donate';
import Logo2 from '../../Assets/logo2.png'
import './Modales.scss'
export default function DonateModals(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <div className='logo_Modals col-12'> 
       <img src={Logo2} alt="" width={100} />
         </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

   <Donate />

      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
