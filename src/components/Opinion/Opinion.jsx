import './Opinion.scss';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgOpinion from '../../Assets/imgopinin.png';
import User_1 from '../../Assets/user_1.png';
import User_2 from '../../Assets/user_2.png';
import User_3 from '../../Assets/user_3.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import db from '../../data/db.json'
import { useState } from 'react';
export default () => {
   const [Opinion]=useState(db.opinion);
  return (
    <>
    <div className='col-12 animate__animated animate__bounce animate__fadeInUp' id='Swiper_Opinion'>
      <div className=' container'>
        <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
              <Swiper
    
    modules={[ Pagination,Autoplay,A11y ]}
    slidesPerView={1}
    
    id='swiperopinio'
     //  navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
// onSwiper={(swiper) => console.log(swiper)}
// onSlideChange={() => console.log('slide change')}
>
{Opinion.map((opinion)=>{
return( <SwiperSlide className='Swip_slid' key={opinion.id}>
   <div>
   <h2>{opinion.title}</h2>
   <p> {opinion.pragraph}</p>
    <img src={opinion.img} alt="" />
    <h6>{opinion.name}</h6>
    <span>{opinion.posetion}</span>
   </div>

</SwiperSlide>

)
})

}




  </Swiper>
        </div>
        <div className='col-6 img_Opinio'>
          <img src={ImgOpinion} alt="" />
        </div>
        </div>
      </div>
    

    </div>
      
    </>

  );
};