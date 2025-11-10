import headerMainData from "@/data/HeaderMainData";
import { useRootContext } from "@/Provider/context";
import React from "react";
import { Image } from "react-bootstrap";
import MobileNavItems from "./MobileNavItems";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { social, navItems, logo, btn_text, btn_href, btn_modal } =
  headerMainData;
const MobileNav = () => {
  const { isExpanded, handleToggle } = useRootContext();
  return (
    <div className={`mobile-nav__wrapper ${isExpanded ? "expanded" : ""}`}>
      <div
        onClick={handleToggle}
        className="mobile-nav__overlay mobile-nav__toggler"
      ></div>

      <div className="mobile-nav__content">
        <span
          onClick={handleToggle}
          className="mobile-nav__close mobile-nav__toggler"
        >
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <Image
              src={logo.src}
              alt="Zaronology | Tech Advisory Services Logo"
              width={220}
              style={{ height: "auto" }}
            />
          </Link>
        </div>

        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navItems.map((navItem) => (
              <MobileNavItems key={navItem.id} navItem={navItem} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
