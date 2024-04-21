import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import backArrow from "../assets/back-arrow.svg";
import forwardArrow from "../assets/forward-arrow2.svg";

import { arrivals } from "../constants/index.js";

const Arrivals = () => {
  return (
    <section className="mt-10">
      <div>
        <div className="flex justify-between p-8">
          <p className="font-semibold text-3xl max-sm:text-xl flex items-center">
            New Arrivals
          </p>
        </div>
        <div className="p-8 flex">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
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
              798: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              }
            }}
          >
            {arrivals.map((items) => (
              <SwiperSlide key={items.name}>
                <div className="swiper-slide hover:border-2 hover:border-black hover:p-4">
                  <a href={items.href}>
                    <img src={items.imgHref} alt={items.name} />
                    <p className="text-xl tracking-wide pt-5">{items.name}</p>
                    <p className="text-sm font-semibold">{items.category}</p>
                    <p className="text-sm font-semibold">{items.price}</p>
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

export default Arrivals;
