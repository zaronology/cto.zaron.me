'use client'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const icon = "tolak-icons-two-sign-in-alt1";

const PricingSectionDevelopment = () => {

    return (
        <section className="bg-blue my-5" data-aos='zoom-in-up' data-aos-delay="200">
            <h2 className="main-title nb mb-0">
                <span className="main-title-content">Development Servicess</span>
            </h2>
            <Container className='py-5 my-md-5 home-page-container'>
                <Row>
                    <Col xs={12} className='' data-aos='fade-up' data-aos-delay="200">
                        <div className="plans-packages">
                            <div className='plans-packages-inner'>
                                <h3>
                                    $225/hour
                                </h3>
                                <h5>What’s Included:</h5>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Development Execution:
                                        </h5>
                                        Implementation of attribution tracking systems, system integrations, custom web applicaion builds, and technical improvements.
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Project Management & QA:
                                        </h5>
                                        Transparent estimates provided before work begins.
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Scope-Based Billing:
                                        </h5>
                                        Clients are charged only for development hours, with PM and QA included.
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}> </i>
                                            Billing:
                                        </h5>
                                        Clients are charged only for development hours, with PM and QA included.
                                    </li>
                                </ul>
                                <h5>Technical Expertise:</h5>
                                <Row>
                                    <Col md={6}>
                                        <ul className="nice-list two-col-lg mt-3">
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Front-End:
                                                </h5>
                                                React, Next.js, Nest.js, JavaScript, HTML/CSS
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Back-End:
                                                </h5>
                                                PHP, Node.js, Laravel, Python, Go
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}></i>
                                                    Databases:
                                                </h5>
                                                MySQL, PostgreSQL, NoSQL (MongoDB, DynamoDB), Redis
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}> </i>
                                                    Serverless & Cloud:
                                                </h5>
                                                AWS Lambda, Edge Computing, Cloudflare Workers
                                            </li>
                                        </ul>

                                    </Col>
                                    <Col md={6}>
                                        <ul className="nice-list two-col-lg mt-3">
                                            <li>
                                                <h5>
                                                    <i className={icon}> </i>
                                                    DevOps:
                                                </h5>
                                                CI/CD, Docker, Kubernetes, Infrastructure as Code (Terraform)
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}> </i>
                                                    Security & Compliance:
                                                </h5>
                                                Penetration testing, SOC2 compliance, data protection best practices.
                                            </li>
                                            <li>
                                                <h5>
                                                    <i className={icon}> </i>
                                                    APIs & Data Fetching:
                                                </h5>
                                                GraphQL, REST APIs, WebSockets
                                            </li>
                                        </ul>

                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PricingSectionDevelopment;
