import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'react-bootstrap/Image';

import { FreeMode, Mousewheel } from "swiper";

const SliderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
  .swiper{
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    
    .swiper-scrollbar{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 10px;
      background: rgba(0,0,0,.1);
      
      .swiper-scrollbar-drag{
        height: 100%;
        transition: transform .8s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
        background: rgba(0,0,0,.4);
      }
    }
    
    .swiper-wrapper{
      display: flex;
      transition: transform .8s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
    }
  
    .swiper-slide{
      height: 100%;
      width: auto !important;

      /*Styling*/
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      font-family: Sans-serif;
      text-shadow: 1px 2px 2px rgba(0,0,0,.2);
      color: #fff;
      /**/

      img{
        height: 100%;
        width: auto;
      }
    }
  }
`;

const Slider = (props) => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    setSlides(props.slides);
  }, [props.slides]);

  return (
    // add style inline and make it dynamic and !important
    <SliderContainer style={{height: props.height}}>
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
            <Image src={slide.image} fluid />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
    
  );
};

export { Slider };
