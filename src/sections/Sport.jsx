import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { sport } from "../constants/index.js";

const Sport = () => {
  return (
    <section className="mt-10">
      <div>
        <div className="flex justify-between p-8">
          <p className="trend-p1">Shop By Sport</p>
        </div>
        <div className="p-8">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
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
            {sport.map((item) => (
              <a href={item.href} key={item.name}>
                <SwiperSlide>
                  <div>
                    <img
                      src={item.imghref}
                      alt={item.name}
                      className="hover:cursor-pointer"
                    />
                    <p className="text-lg font-semibold mt-8">{item.name}</p>
                    <p className="text-sm font-semibold text-gray-500">
                      {item.desc}
                    </p>
                    <button className="sport-button">Shop</button>
                  </div>
                </SwiperSlide>
              </a>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Sport;
