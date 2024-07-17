import React from "react";
import Sidebar from "./sidebar/page";
import Home from "./home/page";
import Banner from "./banner/Banner";

const HomeScreen = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "220px",
          background: "#101828",
          height: "100vh",
          borderRight: "1px solid #1D2939",
          zIndex: "-20",
        }}
      >
        <Sidebar />
      </div>
      <div
        style={{
          width: "calc(100vw - 220px)",
          // width: "100vw",
          background: "#0D0F14",
          height: "100vh",
          padding: "40px 0px 40px 40px",
        }}
      >
        <Banner />
        {/* <Home /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
