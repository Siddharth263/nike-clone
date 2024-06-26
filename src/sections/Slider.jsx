import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Slider = () => {
  return (
    <Swiper
      simulateTouch={false}
      autoplay={{
        delay: 2000
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div className="swiper-slide">
          <h1 className="text-center">Save Up To 40%</h1>
          <a href="https://www.nike.com/in/w/sale-3yaep">
            <p className="text-center text-sm font-semibold underline">
              Shop All Our New Markdowns
            </p>
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <p className="text-center text-lg">
            Move, Shop, Customise & Celebrate With Us.
          </p>
          <p className="text-center text-xs">
            No matter what you feel like doing today, It’s better as a Member.
          </p>
          <a href="https://www.nike.com/in/membership">
            <p className="text-center text-sm underline font-semibold">
              Join Us
            </p>
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
