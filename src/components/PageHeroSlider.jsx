"use client";
import React, { useEffect, useState, Fragment } from "react";
import { Container } from "react-bootstrap";
import PageHeroSliderData from "@/data/PageHeroSliderData";
import Image from "next/image";
import { usePathname } from "next/navigation";
import selectedNeedData from "@/data/SelectedNeedData";

const PageHeroSlider = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const data = PageHeroSliderData.find((d) => d.id == pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  if (pathname === "/book-call/next-steps") {
    const need_data = selectedNeedData;
    const selected_need = localStorage.getItem("selected_need")
      ? localStorage.getItem("selected_need")
      : "tech-not-working";
    data.title = need_data[selected_need]?.title
      ? need_data[selected_need]?.title
      : data.title;
    data.titleSpan = need_data[selected_need]?.titleSpan
      ? need_data[selected_need]?.titleSpan
      : data.titleSpan;
    data.text = need_data[selected_need]?.paragraph
      ? need_data[selected_need]?.paragraph
      : data.text;
  }

  return (
    <>
      <section className="main-slider-six" id="home">
        <div className="main-slider-six__carousel">
          <div
            className="main-silder-bkgd"
            style={{ backgroundImage: `url(${data.bg.src})` }}
          ></div>
          <div className="main-slider-six__item">
            <Container className="home-page-container">
              <div className="main-slider-six__content">
                <h5 className="main-slider-six__sub-title">{data.subTitle}</h5>
                <h2 className="main-slider-six__title">
                  <span
                    className="main-slider-six__title-span"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                  ></span>
                  {data.titleSpan !== "" && (
                    <span
                      dangerouslySetInnerHTML={{ __html: data.titleSpan }}
                    ></span>
                  )}
                  {data.titleLast !== "" && (
                    <span className="main-slider-six__title-span">
                      {data.titleLast}
                    </span>
                  )}
                </h2>
                <p className="main-slider-six__text">
                  {data.text.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </p>
                <div className="main-slider-six__btn">
                  {data.btnOne && (
                    <a
                      className="zaron-btn-two"
                      href={data.btnOne.href}
                      {...(data.btnOne.modal && {
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#bookingModal",
                      })}
                    >
                      <span className="zaron-btn-two__left-star"></span>
                      <span>{data.btnOne.text}</span>
                      <span className="zaron-btn-two__right-star"></span>
                    </a>
                  )}

                  {data.btnTwo && (
                    <a
                      className="zaron-btn-two"
                      href={data.btnTwo.href}
                      {...(data.btnTwo.modal && {
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#bookingModal",
                      })}
                    >
                      <span className="zaron-btn-two__left-star"></span>
                      <span>
                        {data.btnTwo.text}
                        <i className="tolak-icons-two-arrow-right-short"></i>
                      </span>
                      <span className="zaron-btn-two__right-star"></span>
                    </a>
                  )}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeroSlider;
