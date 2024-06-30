import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import './Carousel.scss'
// import DONATE from '../DONATE/DONATE';
import { WOW } from "wowjs";
import { useEffect, useState } from 'react';
import DonateModals from '../Modals/Modals'
export default function Carousel() {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    const wow = new WOW({ live: false });
     wow.init();
   });
  return (
    <>
     {/* <DONATE /> */}
     <Swiper
      slidesPerView={1}
      loop={true}
      modules={[Navigation, Autoplay]}
      navigation
      className="main-carousel my-5 " 
      id='swiper'
    >
      <SwiperSlide className='bg1' id='bg1'>
        {/* <img className='w-100 object-fit-cover h-100' src={bg} alt=''/> */}
        <div className='animate__animated animate__bounce animate__zoomInUp'>
          <h3>Donate blood,save life !</h3>
          <h2>
          YOUR BLOOD                                      
          <br />
          CAN BRING SMILE
          <br />
          IN OTHER PERSON FACE
          </h2>
          <div>
            <a href="#"  onClick={() => setModalShow(true)}>Donate Now</a>
            <DonateModals
           show={modalShow}
            onHide={() => setModalShow(false)}
           />
            <a href="012256859700" className='btn_2'>CALL :012256859700</a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg2' id='bg2'>
        {/* <img className='w-100 object-fit-cover h-100' src={bg} alt=''/> */}
        <div className='animate__animated animate__bounce animate__zoomInUp'>
          <h3>Donate blood,save life !</h3>
          <h2>
          DONATE BLOOD
          <br />
           AND INSPIRES OTHERS.
          </h2>
      
          <a href="#"  onClick={() => setModalShow(true)}>Donate Now</a>
            <DonateModals
           show={modalShow}
            onHide={() => setModalShow(false)}
           />
        
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg3' id='bg3'>
        {/* <img className='w-100 object-fit-cover h-100' src={bg} alt=''/> */}
        <div className='animate__animated animate__bounce animate__zoomInUp '>
          <h3>Donate blood,save life !</h3>
          <h2>
          DONATE BLOOD
          <br />
           AND INSPIRES OTHERS.
          </h2>
      
          <a href="#"  onClick={() => setModalShow(true)}>Donate Now</a>
            <DonateModals
           show={modalShow}
            onHide={() => setModalShow(false)}
           />
        
        </div>
      </SwiperSlide>
    </Swiper>
    </>
   
  )
}

{/* <SwiperSlide>
<img className='w-100 object-fit-cover h-100' src='/assets/images/3.jpg' alt=''/>
</SwiperSlide>
<SwiperSlide>
<img className='w-100 object-fit-cover h-100' src='/assets/images/4.jpg' alt=''/>
</SwiperSlide> */}