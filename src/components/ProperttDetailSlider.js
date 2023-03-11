import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/all.css";
import PropertyDetailHeader from "./PropertyDetailHeader";

import { Navigation, Pagination } from "swiper";

const ProperttDetailSlider = ({ dataDetails }) => {
  let prevSlider = "";
  let nextSlider = "";
  // let swiperPagination = "";
  // const [width, setWidth] = useState(window.innerWidth);
  // const imgheigthF = () => {
  //   const arrayImgHeight = document.querySelectorAll(
  //     ".swiper-slide-img-normal"
  //   );
  //   let imgHeight = arrayImgHeight[0].clientHeight;
  //   return imgHeight;
  // };

  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  // };
  // const [stateHeight, setstateheight] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   setstateheight(imgheigthF);
  // }, [width]);

  useEffect(() => {
    nextSlider = document.querySelector(".swiper-button-next");
    prevSlider = document.querySelector(".swiper-button-prev");
    // swiperPagination = document.querySelector(".swiper-pagination");
    prevSlider.classList.add("prev-normal");
    nextSlider.classList.add("next-normal");
    // swiperPagination.classList.add("pagination-slider");
  }, []);
  return (
    <div
      className=" container"
      // onMouseEnter={() => {
      //   prevSlider.classList.add("arrow-hover");
      //   nextSlider.classList.add("arrow-hover");
      //   swiperPagination.classList.add("pagination-slider-hover");
      // }}
      // onMouseLeave={() => {
      //   prevSlider.classList.remove("arrow-hover");
      //   nextSlider.classList.remove("arrow-hover");
      //   swiperPagination.classList.remove("pagination-slider-hover");
      // }}
    >
      <PropertyDetailHeader dataDetails={dataDetails} />
      <Swiper
        pagination={true}
        loop={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper swiper-normal pb-5 pt-0 pt-md-5 "
      >
        {dataDetails.images_URL.map((d, i) => (
          <SwiperSlide
            key={"slidenormal" + i}
            className="mb-2 col-12 col-md-6 col-lg-4 d-flex justify-content-center  swiper-slide-normal"
          >
            <div
              // style={{ height: `${stateHeight}px` }}
              className="shadow-left"
            ></div>
            <div
              // style={{ height: `${stateHeight}px` }}
              className="shadow-right"
            ></div>
            <img className="swiper-slide-img-normal" src={d.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProperttDetailSlider;
