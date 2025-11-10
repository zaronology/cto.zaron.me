"use client";
import React from "react";
import { usePathname } from "next/navigation";
import data from "@/data/WhyZaronologyBlocksData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight as icon } from "@awesome.me/kit-d469f7d4aa/icons/duotone/regular";
import logoIcon from "@/assets/images/zaronology-logo-icon.png";

const WhyZaronologyBlocks = () => {
  const pathname = usePathname();

  return (
    <div className="why-zaronology-block-container">
      {data.blocks.map((item, idx) => (
        <div key={idx} className="why-zaronology-block">
          <div className="why-zaronology-block-bkgd"></div>
          <div className="why-zaronology-block-inner">
            <h2
              className="success-story-title"
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></h2>
            <div className="why-zaronology-block-content">
              <h4>{item.headline}</h4>
              <p className="why-zaronology-block-text">{item.text}</p>
              <ul className="nice-list checks">
                {item.listItems &&
                  item.listItems.map((listItem, index) => (
                    <li key={index}>
                      <FontAwesomeIcon icon={icon} />
                      <span>{listItem.text}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="accent-logo-con">
            <div
              className="accent-logo"
              style={{ backgroundImage: `url(${logoIcon.src})` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyZaronologyBlocks;
