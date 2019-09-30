import React from 'react';
import Slick from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles.css';

import slide1 from '../../../assets/images/slide-001.jpg';
import slide2 from '../../../assets/images/slide-002.jpg';
import slide3 from '../../../assets/images/slide-003.jpg';

export default function Slider() {
  const settings = {
    autoplay: true,
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slick {...settings}>
      <div>
        <img src={slide1} alt="" />
      </div>

      <div>
        <img src={slide2} alt="" />
      </div>

      <div>
        <img src={slide3} alt="" />
      </div>
    </Slick>
  );
}
