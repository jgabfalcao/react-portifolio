import React from "react";
import "./comments.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "teste teste teste",
    socialMedia: "https://www.instagram.com/joaaofalcao/",
  },
  {
    avatar: AVTR2,
    name: "Tina Snow",
    review: "teste teste teste",
    socialMedia: "https://www.instagram.com/giovana.limaa_/",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review: "teste teste teste",
    socialMedia: "https://www.instagram.com/cocielo/",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review: "teste teste teste",
    socialMedia: "https://www.instagram.com/hiibela_/",
  },
];

const Comments = () => {
  return (
    <section id="testimonials">
      <h5>Review from Coworkers</h5>
      <h2>Comments</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {data.map(({ avatar, name, review, socialMedia }, index) => {
          const handleSwiperClick = () => {
            window.open(socialMedia, "_blank");
          };
          return (
            <SwiperSlide
              onClick={handleSwiperClick}
              key={index}
              className="testimonial"
            >
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Comments;
