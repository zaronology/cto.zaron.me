"use client";
import React, { useEffect, useState } from "react";
import bg from "@/assets/images/loader.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div
      className="preloader"
      style={{
        display: loading ? "" : "none",
      }}
    >
      {/* <div className="main-slider-six__item">
    <div className="main-slider-six__content">
      <h5 style={{ color: white }}>
        Smarter Data. Stronger Strategies. Bigger Profits.
      </h5>
      <h2 class="main-slider-six__title">
        <span class="main-slider-six__title-span">
          Maximize Profits with <span>Smarter Data</span> And{" "}
          <span>Revenue-Boosting</span> Strategies
        </span>
        <span class="main-slider-six__title-span"></span>
      </h2>
    </div>
  </div> */}
      <div
        className="preloader__image"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
    </div>
  );
};

export default Preloader;
