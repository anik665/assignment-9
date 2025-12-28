import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      className="h-[80vh]"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)",
          }}
        >
          <div className="bg-black/60 h-full flex items-center">
            <div className="container mx-auto px-6 text-white">
              <h1 className="text-5xl font-bold mb-4">Learn New Skills</h1>
              <p className="mb-6 max-w-xl">
                Exchange skills with real people. No money, just growth.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7)",
          }}
        >
          <div className="bg-black/60 h-full flex items-center">
            <div className="container mx-auto px-6 text-white">
              <h1 className="text-5xl font-bold mb-4">Teach What You Know</h1>
              <p className="mb-6 max-w-xl">
                Share your knowledge and help others grow.
              </p>
              <button className="btn btn-secondary">Become a Mentor</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
