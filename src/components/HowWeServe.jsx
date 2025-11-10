import howWeServeData from "@/data/HowWeServeData";
import React from "react";

const HowWeServe = () => {
  const data = howWeServeData;
  const serviceData = howWeServeData.services;

  return (
    <section className="how-we-serve my-5 py-5">
      <div className="sec-title text-center">
        <h6 className="sec-title__tagline txt-blue">
          <span className="sec-title__tagline__left"></span>
          {data.tagLine}
          <span className="sec-title__tagline__right"></span>
        </h6>
        <h3 className="sec-title__title txt-blue">{data.title}</h3>
      </div>

      <div className="how-we-serve-container">
        {serviceData.map(({ id, icon, title, text, href, arrow }) => (
          <div key={id} className="how-we-serve-item">
            <div className="how-we-serve-item-bkgd"></div>
            <div className="how-we-serve-item-inner">
              <div className="how-we-serve-item-content">
                <h4 className="how-we-serve-item-title">
                  <i className={icon}></i>&emsp;{title}
                </h4>
                <p className="how-we-serve-item-text">{text}</p>
              </div>
              <div className="how-we-serve-btn-con">
                <a className="how-we-serve-btn" href={href}>
                  Learn More <i className={arrow}></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeServe;
