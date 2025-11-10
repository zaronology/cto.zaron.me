'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from "aos";
import Image from 'next/image';
const icon = "tolak-icons-two-sign-in-alt1";
import image from "@/assets/images/why-us/the-struggle-is-real.jpg";

import zigImg1 from "@/assets/images/why-us/tailored-solutions.jpg";
import zigImg2 from "@/assets/images/why-us/clarity-drive-confidence.jpg";
import zigImg3 from "@/assets/images/why-us/scalable-systems.jpg";
import zigImg4 from "@/assets/images/why-us/simplified-decision-making.jpg";
import zigImg5 from "@/assets/images/why-us/future-proof-strategies.jpg";
import zigImg6 from "@/assets/images/why-us/long-term-partnerships.jpg";



const WhyPageContent = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    useEffect(() => {
        if (mounted) {
            setTimeout(() => {
                AOS.refresh();
            }, 400)
        }
    }, [mounted]);

    if (!mounted) {
        return null;
    }


    return (
        <section className="py-5 mt-5">
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">The Struggle Is Real</span>
                <span className="main-title-border"></span>
            </h2>
            <Container className='py-5 home-page-container'>
                <Row>
                    <Col md={6} data-aos='fade-right' data-aos-delay="200">
                        <div>
                            <p>
                                Zaronology is built on expertise and a deep understanding of the challenges small and medium-sized businesses face. We know how difficult it can be to compete with larger companies that have entire teams dedicated to analytics, engineering, and data strategy. We exists to empower businesses that feel stuck navigating the complexities of scaling. You shouldn’t need a massive budget to access the kind of solutions that drive clarity and growth.
                            </p>
                            <p>
                                Our experience working with high-growth brands has taught us how to build solutions that simplify complexity and make data work for you. We focus on giving you complete ownership of your systems and a clear path to growth through actionable insights.
                            </p>
                            <h6 className="sec-title-four__tagline">
                                <span className="sec-title-four__tagline__left-border"></span>
                                Transparency and Data Ownership
                            </h6>
                            <p>
                                In a world where technology evolves at breakneck speed, every new tool or software promises the next big advantage. But when your data is locked up with a vendor, you lose the flexibility to adapt and grow. You’re tethered to their ecosystem, their limitations, and their methodology.
                            </p>
                            <p>
                                And when the numbers don’t add up—when you’re left wondering how data is being collected, how it’s being attributed, or whether it’s even accurate—you’re powerless to make confident decisions. Without access to the raw data and without transparency, you’re flying blind.
                            </p>
                            <p>
                                Our mission is to put that power back in your hands. We believe you deserve systems that work for you—not the other way around. By providing complete data ownership, clear attribution models, and actionable insights, we give you the tools to make informed decisions and scale with confidence.
                            </p>
                            <p>
                                It’s not just about data—it’s about reclaiming control and building a foundation that empowers you to stay ahead, no matter how fast technology or the market changes.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className='text-center'>
                        <div className="why-choose-five__image wow slideInLeft" data-aos='fade-left'>
                            <Image src={image} alt="Zaronology will fix your muddy data" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">Empowering Growth Through Attribution-Driven Strategies</span>
                <span className="main-title-border"></span>
            </h2>
            <Container>
                <Row>
                    <Col className='mt-5 px-5' data-aos='zoom-in-up' data-aos-delay="200">
                        <p>
                            At Zaronology, we empower businesses to scale with clarity and confidence by addressing the root causes of inefficiencies and optimizing every aspect of their operations. Our focus on seamless attribution tracking ensures every customer interaction is understood, every touchpoint is optimized, and every decision is backed by actionable insights.
                        </p>
                        <p>
                            Whether you’re tackling new growth challenges or fine-tuning your processes, our attribution-driven strategies provide practical, scalable solutions designed for long-term success. Let’s refine and align your systems to build a foundation of trust, transparency, and growth.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='zigzag-container'>
                            <div className='zigzag-item' data-aos='zoom-in-right' data-aos-delay="200">
                                <h3>Tailored Solutions for Measurable Growth</h3>
                                <p>
                                    We don’t just provide generic advice—we become your partner in building strategies uniquely tailored to your challenges and goals. By aligning your systems and refining your workflows, we enable your business to grow efficiently, sustainably, and without unnecessary disruptions. Every solution we craft is rooted in actionable insights designed to deliver measurable, lasting results.
                                </p>
                            </div>
                            <Image className='zigzag-image' src={zigImg1} alt="Zaronology will fix your muddy data" data-aos='zoom-in-left' data-aos-delay="200" />
                        </div>

                        <div className='zigzag-container cr'>
                            <Image className='zigzag-image' src={zigImg2} alt="Zaronology will fix your muddy data" data-aos='zoom-in-right' data-aos-delay="200" />
                            <div className='zigzag-item' data-aos='zoom-in-left' data-aos-delay="200">
                                <h3>Clarity That Drives Confidence</h3>
                                <p>
                                    Clear data is the foundation of smart decisions. With our seamless attribution tracking and CRO expertise, you gain the transparency to see the full picture. Every customer touchpoint and operational detail becomes visible, empowering you to trust your numbers and make impactful, confident decisions.
                                </p>
                            </div>
                        </div>

                        <div className='zigzag-container'>
                            <div className='zigzag-item' data-aos='zoom-in-right' data-aos-delay="200">
                                <h3>Scalable Systems for Dynamic Growth</h3>
                                <p>
                                    Growth introduces complexity, but your systems should simplify, not stall, your progress. We design flexible, scalable infrastructures that evolve alongside your business, ensuring operations stay efficient and aligned—even in times of rapid expansion.
                                </p>
                            </div>
                            <Image className='zigzag-image' src={zigImg3} alt="Zaronology will fix your muddy data" data-aos='zoom-in-left' data-aos-delay="200" />
                        </div>
                        <div className='zigzag-container cr'>
                            <Image className='zigzag-image' src={zigImg4} alt="Zaronology will fix your muddy data" data-aos='zoom-in-right' data-aos-delay="200" />
                            <div className='zigzag-item' data-aos='zoom-in-left' data-aos-delay="200">
                                <h3>Simplified, Strategic Decision-Making</h3>
                                <p>
                                    The right decisions come from the right data. By leveraging clear, actionable insights from optimized systems and customer journeys, we help you make informed choices that align with your vision. Every recommendation we provide is designed to simplify decision-making and drive sustainable growth.
                                </p>
                            </div>
                        </div>
                        <div className='zigzag-container'>
                            <div className='zigzag-item' data-aos='zoom-in-right' data-aos-delay="200">
                                <h3>Future-Proof Strategies for Ever-Changing Markets</h3>
                                <p>
                                    Adaptability is the key to staying ahead in today’s fast-moving world. We design strategies built to evolve with market shifts, new technologies, and changing customer expectations. With us, you’re equipped to navigate the future with confidence and agility.
                                </p>
                            </div>
                            <Image className='zigzag-image' src={zigImg5} alt="Zaronology will fix your muddy data" data-aos='zoom-in-left' data-aos-delay="200" />
                        </div>
                        <div className='zigzag-container cr'>
                            <Image className='zigzag-image' src={zigImg6} alt="Zaronology will fix your muddy data" data-aos='zoom-in-right' data-aos-delay="200" />
                            <div className='zigzag-item' data-aos='zoom-in-left' data-aos-delay="200">
                                <h3>Long-Term Partnership for Sustained Success</h3>
                                <p>
                                    Scaling isn’t a one-and-done achievement—it’s an ongoing process. That’s why we offer continuous support to ensure your systems and strategies stay effective and adaptable. As your business grows, we’re here to provide the tools and guidance you need to thrive at every stage of your journey.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyPageContent;
