import React from "react";
import Slider from "react-slick";
import css from "./Slick.module.scss";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
   autoplay: true,
  pauseOnHover: true,

};

const Slick = () => {
  return (
  <div className={`css.slide`}>
    <Slider {...settings}>
     
        <img src="https://img.ltwebstatic.com/images3_ach/2023/01/22/16743794097c8dd12421006798f17632fc34fc873a_thumbnail_1920x.webp" alt="slider" />
      
      {/* <div>
        <img src="https://img.ltwebstatic.com/images3_ach/2023/01/22/16743793966b5367e293c9ef1031d3f140beb9b3d4_thumbnail_1920x.webp" alt="slider" />
      </div> */}
     
        <img src="https://img.ltwebstatic.com/images3_ach/2023/01/18/16740294742c87e8748e8080530e1bc0a194f27343_thumbnail_1920x.webp" alt="slider" />
        
       
        <img src="https://img.ltwebstatic.com/images3_ach/2023/01/04/1672796560a1fa851b60fa6bb85f38c67847db29dc_thumbnail_1920x.webp" alt="slider" />
      
    </Slider>
  </div>
  );
};

export default Slick;
