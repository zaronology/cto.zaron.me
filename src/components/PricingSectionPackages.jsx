'use client'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import plansData from '@/data/PlansData';
const icon = "tolak-icons-two-sign-in-alt1";

const PricingSectionPackages = () => {
    const data = plansData;
    return (
        <section className="bg-blue my-5" data-aos='zoom-in-up' data-aos-delay="200">
            <h2 className="main-title nb mb-0">
                <span className="main-title-content">How We Structure Our Packages</span>
            </h2>
            <Container className='py-5 my-md-5 home-page-container'>
                <Row>
                    {plansData.map((plan)=>(<Col key={plan.id} xs={12} className='mb-5' data-aos='fade-up' data-aos-delay="200">
                        <div className="plans-packages">
                            <h2>{plan.title}</h2>
                            <div className='plans-packages-inner'>
                                <h3>
                                    – {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',maximumFractionDigits: 0 }).format(plan.price)}{plan.pricePer}
                                </h3>
                                <p>
                                    <em>{plan.overviewTxt}</em>
                                </p>
                                <h5>What You Get:</h5>
                                <ul className="nice-list mt-3">
                                    {plan.whatYouGet.map((item, idx)=>(<li key={idx}>
                                        <h5>
                                            <i className={icon}></i>
                                            {item.title} {item.description}
                                        </h5>
                                        {item.subList && (<ul className='nice-list sub-list'>
                                            {item.subList.map((subListItem, idx)=>(<li key={idx}>{subListItem}</li>))}
                                        </ul>)}
                                        
                                    </li>))}
                                </ul>
                                <h5>Best For:</h5>
                                <p className='mb-1'>
                                    {plan.bestFor.description}
                                </p>
                                <p className='disclaimer'>
                                    <em>{plan.bestFor.subText}</em>
                                </p>
                            </div>                            
                        </div>
                    </Col>))}
                </Row>
            </Container>
        </section>
    );
};

export default PricingSectionPackages;
