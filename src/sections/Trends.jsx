import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { trend } from "../constants/index.js";

const Trends = () => {
  return (
    <section className="mt-10">
      <div>
        <div className="flex justify-between p-8">
          <p className="trend-p1">Trends</p>
        </div>
        <div className="p-8 flex">
          <Swiper
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
            {trend.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="relative">
                  <a href={item.href} className="relative block">
                    <img
                      className="block w-full h-auto"
                      src={item.imgHref}
                      alt={item.name}
                    />
                    <div className="trend-gradient"></div>
                    <p className="trend-name">{item.name}</p>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Trends;
