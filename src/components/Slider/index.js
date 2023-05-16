import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Mousewheel } from "swiper";

import Image from 'next/image';


const Slider = (props) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(props.slides);
  }, [props.slides]);

  return (
    <div className='slider-container' style={{height: props.height}}> 
      <Swiper
        slidesPerView={"auto"}
        freeMode={{
          enabled: true,
          sticky: false,
          momentumBounce: false,
        }}
        mousewheel= {{
          enabled: true,
          sensitivity: 5.5,
        }}
        modules={[FreeMode, Mousewheel]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map (slide => (
          <SwiperSlide key={slide.id}>
            <Image className='img-fluid' src={slide.image} fluid />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   
    
  );
};

export { Slider };
