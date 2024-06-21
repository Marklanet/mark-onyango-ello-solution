import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import "./welcome.css";

import { EffectCreative, Autoplay } from "swiper/modules";
import cover1 from "../../../assets/banners/background.avif";
import cover2 from "../../../assets/banners/banner.png";
import cover3 from "../../../assets/banners/banner2.png";

const Welcome = () => {
  const images = [cover1, cover2, cover3];
  return (
    <div className="welcome">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        className="mySwiper"
        loop={true}
        /*
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        */
        autoplay={false}
        modules={[EffectCreative, Autoplay]}
      >
        <SwiperSlide>
          <div className="image-wrapper">
            <img src={images[0]} alt="cover image" />
          </div>
          <div className="overlay">
            <div className="text">
              <h1>Ello for Teachers</h1>
              <span className="light-text-gradient">
                © Ello Technologies 2024. All rights reserved
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Welcome;
