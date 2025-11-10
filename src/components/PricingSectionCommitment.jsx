'use client'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const icon = "tolak-icons-two-sign-in-alt1";

const PricingSectionCommitment = () => {

    return (
        <section className="bg-blue my-5" data-aos='zoom-in-up' data-aos-delay="200">
            <h2 className="main-title nb mb-0">
                <span className="main-title-content">Commitment & Flexibility</span>
            </h2>
            <Container className='py-5 my-md-5 home-page-container'>
                <Row>
                    <Col xs={12} className='' data-aos='fade-up' data-aos-delay="200">
                        <div className="plans-packages">
                            <Row>
                                <Col xs={12} className='mb-5'>
                                    <div className='plans-packages-inner'>
                                        <h4>Recommended Initial Commitment</h4>
                                        <p>
                                            We recommend an initial commitment of four (4) months to ensure sufficient time for delivering meaningful progress
                                            and measurable results. This period allows us to implement strategies effectively and generate insights that drive your
                                            business forward.
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} className='mb-5'>
                                    <div className='plans-packages-inner'>
                                        <h4>Why We Recommend a Four-Month Commitment</h4>
                                        <ul className="nice-list mt-3">
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Strategic initiatives take time to fully implement and assess results.
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Short-term changes may not reflect the true impact of our advisory efforts.
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    A longer commitment allows us to optimize and refine based on actionable data.
                                                </h5>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={12} className='mb-5'>
                                    <div className='plans-packages-inner'>
                                        <h4>Annual Pricing Lock</h4>
                                        <p>
                                            our pricing is locked in for <b>one (1) year</b> from the start of your contract. This means no unexpected changes or price
                                            increases during your engagement.
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} className=''>
                                    <div className='plans-packages-inner'>
                                        <h4>Client Flexibility</h4>
                                        <p>
                                            We understand that circumstances may change. After the first month, if you feel our services aren’t the right fit, you
                                            can cancel at any time with a <b>thirty (30) days’</b> notice.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PricingSectionCommitment;
