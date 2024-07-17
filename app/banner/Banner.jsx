"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import styles from "../../style/banner.module.css";
import Image from "next/image";
import B1 from "../../public/banner/b1.jpg";
import B2 from "../../public/banner/b2.jpg";
import B3 from "../../public/banner/b3.jpg";
import B4 from "../../public/banner/b4.jpg";
import B5 from "../../public/banner/b5.jpg";

const Banner = () => {
  return (
    <div className="pr-5">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed="600"
        slidesPerView="auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.res_slide}>
          <div className={styles.res_slide_img}>
            <Image
              src={B1}
              alt="banner"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "12px", width: "100%" }}
            />
          </div>
          <div className={styles.slide_overlay}>
            <h2>Midnight Moods</h2>
            {/* <button>
              Listen Now <i class="fa-solid fa-circle-play"></i>
            </button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.res_slide}>
          <div className={styles.res_slide_img}>
            <Image
              src={B2}
              alt="banner"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "12px" }}
            />
          </div>
          <div className={styles.slide_overlay}>
            <h2>Party Starters</h2>
            {/* <button>
              Listen Now <i class="fa-solid fa-circle-play"></i>
            </button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.res_slide}>
          <div className={styles.res_slide_img}>
            <Image
              src={B3}
              alt="banner"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "12px" }}
            />
          </div>
          <div className={styles.slide_overlay}>
            <h2>Relaxing Tones</h2>
            {/* <button>
              Listen Now <i class="fa-solid fa-circle-play"></i>
            </button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.res_slide}>
          <div className={styles.res_slide_img}>
            <Image
              src={B4}
              alt="banner"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "12px" }}
            />
          </div>
          <div className={styles.slide_overlay}>
            <h2>Smooth Jazz Journey</h2>
            {/* <button>
              Listen Now <i class="fa-solid fa-circle-play"></i>
            </button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.res_slide}>
          <div className={styles.res_slide_img}>
            <Image
              src={B5}
              alt="banner"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "12px" }}
            />
          </div>
          <div className={styles.slide_overlay}>
            <h2>Uplifting Rhythms</h2>
            {/* <button>
              Listen Now <i class="fa-solid fa-circle-play"></i>
            </button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.res_slide}>
          <div className={styles.res_slide_img}>
            <Image
              src={B2}
              alt="banner"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "12px" }}
            />
          </div>
          <div className={styles.slide_overlay}>
            <h2>Party Starters</h2>
            {/* <button>
              Listen Now <i class="fa-solid fa-circle-play"></i>
            </button> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
