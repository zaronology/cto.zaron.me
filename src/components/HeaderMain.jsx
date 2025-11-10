"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import headerMainData from "@/data/HeaderMainData";
import { useRootContext } from "@/Provider/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight as btnIcon } from "@awesome.me/kit-d469f7d4aa/icons/duotone/regular";

const { navItems, logo, btn_text, btn_href, btn_modal } = headerMainData;
const HeaderMain = () => {
  const { toggleSearch, handleToggle } = useRootContext();
  return (
    <header
      className={`main-header-six sticky-header sticky-header--normal sticky-header--cloned  active`}
    >
      <div className="main-header-six__inner">
        <div className="main-header-six__logo">
          <Link href="/">
            <Image
              src={logo}
              alt="Zaronology | Consulting Services Logo"
              width={300}
              style={{ height: "auto" }}
            />
          </Link>
        </div>
        <nav className="main-header-six__nav main-menu">
          <ul className="main-menu__list">
            {navItems.map((item) => (
              <NavItems key={item.id} item={item} />
            ))}

            <li className="dot"></li>
          </ul>
        </nav>
        <div className="main-header-six__right">
          <div
            onClick={handleToggle}
            className="mobile-nav__btn mobile-nav__toggler"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* <Link onClick={toggleSearch} href="#" className="search-toggler main-header-six__search">
                            <i className="icon-magnifying-glass" aria-hidden="true"></i>
                            <span className="sr-only">Search</span>
                        </Link> */}
          <Link
            href={btn_href}
            className="zaron-btn-two main-header-six__btn"
            {...(btn_modal
              ? {
                  "data-bs-toggle": "modal",
                  "data-bs-target": "#bookingModal",
                }
              : {})}
          >
            <span className="zaron-btn-two__left-star yellow"></span>
            <span>
              {btn_text}&nbsp;
              <FontAwesomeIcon icon={btnIcon} />
            </span>
            <span className="zaron-btn-two__right-star yellow"></span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
