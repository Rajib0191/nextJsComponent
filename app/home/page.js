"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../style/swiper.css";
import Image from "next/image";
import card from "../../public/card.png";
import card1 from "../../public/card1.png";
import card2 from "../../public/card2.png";
import card3 from "../../public/card3.png";
import card4 from "../../public/card4.png";
import card5 from "../../public/card5.png";
import card6 from "../../public/card6.png";
import { SwiperNavButtons } from "../component/SwiperNavButton";

const Home = () => {
  return (
    <div>
      <Swiper
        modules={[Keyboard, Navigation, A11y]}
        spaceBetween={16}
        slidesPerView={"auto"}
        keyboard={{
          enabled: true,
        }}
      >
        <SwiperNavButtons />

        <SwiperSlide className="res-slide">
          <div className="slide-image">
            <Image
              src={card}
              alt="card"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "10px" }}
            />
          </div>
          <div style={{}}>
            <p className="slider-title">Song Name will here</p>
            <p className="slider-artist">Artist Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="res-slide">
          <div className="slide-image">
            <Image
              src={card1}
              alt="card"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "10px" }}
            />
          </div>
          <div style={{}}>
            <p className="slider-title">Song Name will here</p>
            <p className="slider-artist">Artist Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="res-slide">
          <div className="slide-image">
            <Image
              src={card2}
              alt="card"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "10px" }}
            />
          </div>
          <div style={{}}>
            <p className="slider-title">Song Name will here</p>
            <p className="slider-artist">Artist Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="res-slide">
          <div className="slide-image">
            <Image
              src={card3}
              alt="card"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "10px" }}
            />
          </div>
          <div style={{}}>
            <p className="slider-title">Song Name will here</p>
            <p className="slider-artist">Artist Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="res-slide">
          <div className="slide-image">
            <Image
              src={card4}
              alt="card"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "10px" }}
            />
          </div>
          <div style={{}}>
            <p className="slider-title">Song Name will here</p>
            <p className="slider-artist">Artist Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="res-slide">
          <div className="slide-image">
            <Image
              src={card5}
              alt="card5"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "10px" }}
            />
          </div>
          <div style={{}}>
            <p className="slider-title">Song Name will here</p>
            <p className="slider-artist">Artist Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="res-slide">
          <div className="slide-image">
            <Image
              src={card6}
              alt="card"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "10px" }}
            />
          </div>
          <div style={{}}>
            <p className="slider-title">Song Name will here</p>
            <p className="slider-artist">Artist Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="res-slide">
          <div className="slide-image">
            <Image
              src={card1}
              alt="card"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "10px" }}
            />
          </div>
          <div style={{}}>
            <p className="slider-title">Song Name will here</p>
            <p className="slider-artist">Artist Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="res-slide">
          <div className="slide-image">
            <Image
              src={card}
              alt="card"
              priority
              fill
              style={{ objectFit: "fill", borderRadius: "10px" }}
            />
          </div>
          <div style={{}}>
            <p className="slider-title">Song Name will here</p>
            <p className="slider-artist">Artist Name</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
