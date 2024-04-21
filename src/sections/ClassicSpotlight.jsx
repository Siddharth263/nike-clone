import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { classics } from "../constants/index.js";

const ClassicSpotlight = () => {
  return (
    <section className="mt-10">
      <div>
        <div className="flex justify-between p-8">
          <p className="trend-p1">Classics Spotlight</p>
        </div>
        <Swiper
          className="p-8"
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {classics.map((item) => (
            <SwiperSlide key={item.key}>
              <div className="swiper-slide hover:border-2 hover:border-black hover:p-4">
                <a href={item.href}>
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClassicSpotlight;
