import React from "react";
import { useSwiper } from "swiper/react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: "0px",
        width: "100%",
        paddingRight: "20px",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "#EAECF0",
        }}
      >
        New Releases
      </p>
      <did
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <span
          style={{
            background: "#1D2939",
            height: "32px",
            width: "32px",
            borderRadius: "50px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "3.5px",
          }}
          onClick={() => swiper?.slidePrev()}
        >
          <MdOutlineKeyboardArrowLeft size={20} color="#667085" />
        </span>
        <span
          style={{
            background: "#1D2939",
            height: "32px",
            width: "32px",
            borderRadius: "50px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "3.5px",
          }}
          onClick={() => swiper?.slideNext()}
        >
          <MdOutlineKeyboardArrowRight size={20} color="#D0D5DD" />
        </span>
      </did>
    </div>
  );
};
