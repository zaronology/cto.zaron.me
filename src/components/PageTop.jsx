"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PageTopData from "@/data/PageTopData";
import { Col, Container, Row } from "react-bootstrap";
import { usePathname } from "next/navigation";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

const PageTop = () => {
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const data = PageTopData.find((d) => d.id == pathname);
  const {
    id,subTitle, title, text, floatingText
  } = data || { }


  useEffect(() => {
    setMounted(true);

  }, []);




  if (!mounted) {
    return null;
  }
  const settings = {
    lazyload: true,
    mode: "static",
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    animateDelay: 5000,
    slideBy: "page",
    nav: false,
    mouseDrag: true,
    loop: false,
    items: 1,
    autoplay: false,
    autoplayTimeout: 7000,
    autoHeight: true,
    controls: false,

    gutter: 0,
    autoplayButton: false,
    autoplayButtonOutput: false,


  };

  const defaultOptions = {
    maxTilt: 7,
    scale: 1,
    speed: 700,
    glare: false,
    maxGlare: 0,
  };


  return (
    <section className='main-slider-one' id='home' >


      {
        mounted && <TinySlider settings={settings} className='main-slider-one__carousel'>
              <div className='item' key={id}>
                <div className='main-slider-one__item'>
                  <div
                    className='main-slider-one__bg'
                  ></div>

                  <Container style={{position:"relative"}}>
                    <Row>
                      <Col md={12}>
                        <div className='main-slider-one__content'>
                          <h5 className='main-slider-one__sub-title'>
                            {subTitle}
                          </h5>
                          <h2
                            className='main-slider-one__title'
                            dangerouslySetInnerHTML={{ __html: title }}
                          ></h2>
                          <div className='main-slider-one__text'>
                            <p
                              className='main-slider-one__text__one'
                              dangerouslySetInnerHTML={{ __html: text }}
                            ></p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className='main-slider-one__floating-text'>{floatingText}</div>
                  </Container>

                  
                </div>
              </div>
        </TinySlider>
      }

    </section>
  );
};

export default PageTop;
