import { members } from "../constants/index.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Members = () => {
  return (
    <section>
      <div>
        <div className="flex justify-between p-8">
          <p className="trend-p1">Member Benefits</p>
        </div>

        <div>
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
            {members.map((item) => (
              <SwiperSlide key={item.name}>
                <a href={item.href}>
                  <div className="h-full">
                    <div>
                      <img src={item.imghref} width={"100%"} alt="" />
                    </div>
                    <div className="absolute inset-10 flex flex-col justify-end items-start text-white">
                      <p className="text-sm font-semibold">{item.category}</p>
                      <p className="text-2xl">{item.name}</p>
                      <button className="hover:bg-gray-400 text-lg rounded-full py-[1%] px-[4%] mt-8 bg-white text-black font-semibold">
                        {item.buttonName}
                      </button>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Members;
