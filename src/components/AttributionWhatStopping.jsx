import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import image1 from '@/assets/images/faq-full-1.jpg';
import image2 from '@/assets/images/faq-full-2.jpg';
import image3 from '@/assets/images/faq-full-3.jpg';

const icon = "tolak-icons-two-sign-in-alt1";

const AttributionWhatStopping = () => {

    return (
        <section className="pb-4">
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">What’s REALLY Stopping You From Scaling?</span>
                <span className="main-title-border"></span>
            </h2>
            <Container className='mt-md-5 py-5 home-page-container'>
                <Row>
                    <Col md={6} className="wow fadeInUp" data-aos='fade-up' data-aos-delay="200">
                       <div>
                        <p>
                            Most business owners think they have the wrong team members, they’re not advertising enough, or they need to launch new products.
                        </p>
                        <p>
                            But here’s the problem that we see most often that makes it almost impossible to scale after $5M.
                        </p>
                        <h6 className="sec-title-four__tagline">
                            <span className="sec-title-four__tagline__left-border"></span>
                            Muddy data.
                        </h6>

                        <p>
                         You look at your tracking reports, and… 
                        </p>
                        <ul className="nice-list">
                            <li><h5><i className={icon}></i>Your tracking software shows one revenue number</h5></li>
                            <li><h5><i className={icon}></i>Meta reports another</h5></li>
                            <li><h5><i className={icon}></i>Your CRM displays something completely different</h5></li>
                        </ul>
                        <p>
                            Regardless of which systems you were using to track and attribute conversions, most $5M+ DTC brands are hemorrhaging money because they're making decisions based on unreliable data, or even worse, no data at all.. 
                        </p>
                        <p>
                            Conflicting data means conflicting decisions. Messy data fed to advertising algorithms means poor performance. 
                        </p>
                        <p>  
                            Worse yet, you don't actually own your customer data - you're renting it from big tech companies who control how it's collected, analyzed, and used.
                        </p>
                       </div>
                    </Col>
                    <Col md={6} >
                        <div className="faq-three__image">

                            <div className="faq-three__image__left wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
                                <Image src={image1} alt="tolak" />
                                <Image src={image2} alt="tolak" />
                            </div>
                            <div className="faq-three__image__right wow fadeInUp" data-aos="fade-up" data-aos-delay="200">
                                <Image src={image3} alt="tolak" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AttributionWhatStopping;
