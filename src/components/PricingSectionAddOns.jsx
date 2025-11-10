'use client'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const icon = "tolak-icons-two-sign-in-alt1";

const PricingSectionAddOns = () => {

    return (
        <section className="bg-blue my-5" data-aos='zoom-in-up' data-aos-delay="200">
            <h2 className="main-title nb mb-0">
                <span className="main-title-content">Flexibility with Add-Ons</span>
            </h2>
            <Container className='py-5 my-md-5 home-page-container'>
                <Row>
                    <Col xs={12} className='' data-aos='fade-up' data-aos-delay="200">
                        <div className="plans-packages">
                            <p>Choose the add-on option that best fits your needs, with guaranteed access through monthly commitments or flexibility
                                through à la carte services.</p>
                            <Row>
                                <Col md={6} className='mb-5'>
                                    <div className='plans-packages-inner'>
                                        <h4>Monthly Add-Ons</h4>
                                        <h5>Guaranteed Access</h5>
                                        <ul className="nice-list mt-3">
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Additional Deliverables: $2,000 each
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Additional Strategy Meetings: $1,000 each
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    30-Minute Touch Base Calls: $250 each
                                                </h5>
                                            </li>
                                        </ul>
                                        <p>
                                            <em>Lock in guaranteed availability by adding services to
                                                your monthly package.</em>
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6} className='mb-5'>
                                    <div className='plans-packages-inner'>
                                        <h4>À La Carte Add-Ons</h4>
                                        <h5>As-Available Basis</h5>
                                        <ul className="nice-list mt-3">
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Additional Deliverables: $2,250 each
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Additional Strategy Meetings: $1,250 each
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    30-Minute Touch Base Calls: $500 each
                                                </h5>
                                            </li>
                                        </ul>
                                        <p>
                                            <em>Request services as needed, subject to availability.</em>
                                        </p>
                                        <p className='m-0'>&emsp;</p>
                                    </div>
                                </Col>
                                <Col xs={12} className=''>
                                    <div className='plans-packages-inner'>
                                        <h4>Flexible Management</h4>
                                        <h5>Monthly Adjustments</h5>
                                        <ul className="nice-list mt-3">
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Add or remove services monthly based on your needs
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Scale down when additional capacity isn't needed
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Secure access to our flexible add-ons by including them in your monthly retainer before the next billing cycle, or
                                                    add them à la carte at any time, subject to availability.
                                                </h5>
                                            </li>
                                        </ul>
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

export default PricingSectionAddOns;
