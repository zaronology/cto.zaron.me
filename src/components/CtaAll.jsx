'use client'
import ctaData from '@/data/CtaData';
import React, { Fragment } from 'react';
import JarallaxImage from './JarallaxImage';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from "next/navigation";
const Jarallax = dynamic(() => import("@/components/Jarallax"), {
    ssr: false,
});

const CtaAll = () => {
    const pathname = usePathname();
    const data = ctaData.find((d) => d.id == pathname);
    const { bg, shape1, shape2, title, text, href, btnText, listItems } = data

    return (
        <section className="cta-primary">
            <Jarallax className="cta-primary__bg" speed={0.3} imgPosition="center cnter">
                <JarallaxImage src={bg.src} />
            </Jarallax>
            {/* <div className="cta-primary__bg jarallax" data-jarallax data-speed="0.3" data-imgPosition="50% -100%" style="background-image: url(assets/images/backgrounds/cta-8-bg.jpg);"></div> */}
            <div className="cta-primary__shape-one" style={{ backgroundImage: `url(${shape1.src})` }}></div>
            <div className="cta-primary__shape-two" style={{ backgroundImage: `url(${shape2.src})` }}></div>
            <Container className="container">
                <Row>
                    <Col lg={8} className="wow fadeInLeft" data-aos='fade-right' data-aos-delay="00ms">
                        <div className="cta-primary__content">
                            <h2 className="cta-primary__content__title">
                                {title.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}
                            </h2>
                            <div className="cta-primary__box">
                                <div className="cta-primary__box__icon"><span className="tolak-icons-two-sign-in-alt1"></span></div>
                                <div className="cta-primary__box_text">{text.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}</div>
                                <ul className='nice-list two-col checks mt-3'>{listItems.map((item, idx) => (
                                    <li key={idx}><h5>
                                        <i className="fas fa-check-circle"></i>
                                        {item}
                                    </h5>
                                    </li>
                                ))}</ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className=" d-flex align-items-center justify-content-center wow fadeInUp" data-aos='fade-up' data-aos-delay="100">
                        <Link href={href} className="zaron-btn-two">
                            <span className="zaron-btn-two__left-star"></span>
                            <span>{btnText}<i className="tolak-icons-two-arrow-right-short"></i></span>
                            <span className="zaron-btn-two__right-star"></span>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CtaAll;