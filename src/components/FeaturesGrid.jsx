"use client";
import React from "react";
import { usePathname } from "next/navigation";
import gridData from "@/data/FeaturesGridData";
import dynamic from "next/dynamic";

const FeaturesGrid = () => {
  const pathname = usePathname();
  const data =
    gridData.find((d) => d.id == pathname) ||
    gridData.find((d) => d.id == "default");
  const midIndex = Math.floor(data.blocks.length / 2);
  const firstColumn = data.blocks.slice(0, midIndex);
  const secondColumn = data.blocks.slice(midIndex);
  return (
    <section className="features-grid">
      <div className="features-grid-content">
        <div className="features-grid-column">
          {firstColumn.map((item, idx) => (
            <div key={idx} className="features-grid-item">
              <div className="features-grid-inner-content">
                <div className="features-grid-inner-content-bkgd"></div>
                <div className="features-grid-inner-content-inner">
                  <h4 className="features-grid-title">
                    {/* <i className={item.icon}></i> */}
                    {item.title}
                  </h4>
                  <p className="features-grid-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="features-grid-column">
          {secondColumn.map((item, idx) => (
            <div key={idx} className="features-grid-item">
              <div className="features-grid-inner-content">
                <div className="features-grid-inner-content-bkgd"></div>
                <div className="features-grid-inner-content-inner">
                  <h4 className="features-grid-title">
                    {/* <i className={item.icon}></i> */}
                    {item.title}
                  </h4>
                  <p className="features-grid-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default FeaturesGrid;
