"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./slider.css"

export default function Myslider({
  spaceBetween = 0,
  slidesPerView = 1,
  listOfImg,
  height,
}: {
  spaceBetween?: number;
  slidesPerView?: number;
  listOfImg: string[];
  height: string;
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      className={height}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation 
      pagination ={{clickable:true , renderBullet(index, className) {
         return `<span class="${className} bg-[#FFFFFF80]! "></span>`;
      },}}
    >
      {listOfImg.map((img) => (
        <SwiperSlide key={img} className="relative bg-[#00C950E5]">

          <img src={img} alt={img} className="w-full object-cover  absolute inset-0" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
