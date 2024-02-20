import React from 'react'
import './Sponsors.scss'
import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Auhrefplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgspons_1 from '../../data/db.json'
import imgspons_2 from '../../data/db.json'

// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
export default function Sponsors() {
    const [Spons_1]=useState(imgspons_1.Sponsors_1);
    const [spons_2]=useState(imgspons_2.sponsor_2);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (

<div className='col-12 sponsar '>
  <div className='container'>

    <div className="row">
    <div class="row section-heading-wrapper">
<div class="col-md-12 col-sm-12 text-center no-img-separator">
    <h2>Our Sponsors</h2>
    <span class="heading-separator"></span>
    <h4>The sponsors who give their valuable amount to fulfill our mission.</h4>
</div>                      

</div>
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      style={{ '--swiper-aspect-ratio': '2' }} // Custom aspect ratio
      className='swipspons'
    >
      <SwiperSlide>
      {Spons_1.map((spons)=>{
        return ( <img src={spons.img} alt="" />

        )
      })

      }
     </SwiperSlide>

      <SwiperSlide>
          {spons_2.map((spons)=>{
            return(<img src={spons.img} alt="" />)
          })

          }
      </SwiperSlide>
      {/* Add more slides as needed */}
    
      </Swiper>
    {/* <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
   {IMgSpons.map((spons)=>{
  return(  <Carousel.Item>
      <img
        className="d-block"
         src={spons.img}
      alt="First slide"
    />
      </Carousel.Item>

  )
})

}   
    </Carousel> */}
    </div>
  </div>

</div>

  )
}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}



      //     <section className=" sponsar">

//     <div className="container wow fadeInUp animated ">
        
//         <div className="row section-heading-wrapper">

//             <div className="col-md-12 col-sm-12 text-center no-img-separator">

//                 <h2>Our Sponsors</h2>
//                 <span className="heading-separator"></span>
//                 <h4>The sponsors who give their valuable amount to fulfill our mission.</h4>
//             </div>                     

//         </div> 
//         <div className='row'>

    

//         {/* <Swiper
    
//       modules={[ Pagination,A11y ]}
//     slidesPerView={1}
    
//              id='swiperCamp'
//                  //  navigation
//          pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
// // onSwiper={(swiper) => console.log(swiper)}
// // onSlideChange={() => console.log('slide change')}

// >

//     return(<SwiperSlide  id='Swip_slid'>
//    <div className='row'>
//     <div className='col-2'>
//     <img src={spons.img} alt="" width={100} />
//     </div>
    
//    </div>

// </SwiperSlide>

//     )

//   })

//   }




//        </Swiper>  */}

//        </div>

//     </div> 

// </section>