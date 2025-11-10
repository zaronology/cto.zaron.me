'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from "aos";
import Image from 'next/image';
const icon = "tolak-icons-two-sign-in-alt1";
const iconQ = "tolak-icons-two-question";
import image from "@/assets/images/customer-experience.jpg";
import image2 from "@/assets/images/customer-journey.jpg";



const CustomerLoyaltyRetention = () => {
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
                <span className="main-title-content">Building Bridges to Loyalty</span>
                <span className="main-title-border"></span>
            </h2>
            <Container className='py-5'>
                <Row>
                    <Col md={6} data-aos='fade-right' data-aos-delay="200">
                        <div>
                            <p>
                                We all know it’s more cost-effective to retain or sell to an existing customer than it is to acquire a new one.
                            </p>
                            <h6 className="sec-title-four__tagline">
                                <span className="sec-title-four__tagline__left-border"></span>
                                But here’s the challenge:
                            </h6>
                            <ul className='nice-list nopad'>
                                <li><h5><i className={iconQ}></i>What truly drives your customer?</h5></li>
                                <li><h5><i className={iconQ}></i>How do you create customer loyalty?</h5></li>
                                <li><h5><i className={iconQ}></i>What shapes your customer's experience?</h5></li>
                                {/* <li><h5><i className={icon}></i></h5></li> */}
                            </ul>
                            <p>
                                Are you motivating them to return, to buy more, or to recommend you? Where do they spend their time? And most importantly, what do they need to know about your product or service to make them not just a buyer—but a believer?
                            </p>
                            <p>
                                The answers to these questions aren’t universal. They change depending on your audience, your industry, and even your product. And the only way to uncover those answers is to ask the right questions. If you’re not actively learning about your audience—who they are, what they value, where they spend their time, and what would make their lives easier; you’re not building your product or messaging for them. You’re building it for yourself.
                            </p>
                            <p>
                                Knowing your customer is the most important thing your business can do. The deeper your understanding of your audience, the better positioned you are to bring them value. And the more value you bring, the more loyalty they’ll give in return. But achieving that level of understanding doesn’t happen by chance. It requires the right systems—systems that let you ask the right questions, dig into the answers, and segment your audience effectively.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className='text-center'>
                        <div className="why-choose-five__image wow slideInLeft" data-aos='fade-left'>
                            <Image src={image2} alt="Zaronology will fix your muddy data" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">Understanding the Why Behind the Buy</span>
                <span className="main-title-border"></span>
            </h2>
            <Container className='py-5'>
                <Row>
                    <Col md={6} className='text-center'>
                        <div className="why-choose-five__image wow slideInLeft" data-aos='fade-left'>
                            <Image src={image} alt="Zaronology will fix your muddy data" />
                        </div>
                    </Col>
                    <Col md={6} data-aos='fade-right' data-aos-delay="200">
                        <p>
                            Let’s face it: just because someone signed up for your newsletter and bought a weight loss supplement doesn’t mean weight loss is their only concern. Why do they want to lose weight? Is it about looking better for an upcoming event? Managing a health condition? Improving their energy levels to keep up with their kids? Or is it something more deeply rooted in confidence and self-worth?
                        </p>
                        <p>
                            These deeper questions unlock opportunities to serve your customers in ways they didn’t even realize they needed. When you go beyond the surface, you move from simply selling a product to solving a problem—and that’s where loyalty is born. Customers don’t just remember the transaction; they remember how you made them feel, how you addressed their pain points, and how you brought value to their lives.
                        </p>
                        <p>
                            The key to unlocking this understanding is having the right systems in place. Systems that don’t just track a purchase but reveal the patterns, preferences, and deeper motivations behind it. With these insights, you can craft experiences and solutions that resonate, creating a connection that turns one-time buyers into lifelong advocates.
                        </p>
                        <p>
                            That’s where we come in—helping you build the infrastructure to understand your audience on a deeper level, connect authentically, and deliver what they need before they even realize they need it. This is how you foster trust, nurture loyalty, and drive sustainable growth.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">Mapping the Customer Journey</span>
                <span className="main-title-border"></span>
            </h2>
            <Container className='py-5'>
                <Row>
                    <Col>
                        <div className='zigzag-container'>
                            <div className='zigzag-item' data-aos='zoom-in-right' data-aos-delay="200">
                                <h3>Understanding the Journey</h3>
                                <p>
                                    The customer journey is the roadmap your audience takes from discovery to purchase—and beyond. It’s the series of interactions they have with your brand, from their first click on an ad to the moment they open your product. Knowing this journey allows you to anticipate their needs at every stage and deliver the right message at the right time.
                                </p>
                            </div>
                            <Image className='zigzag-image' src={zigImg1} alt="Zaronology will fix your muddy data" data-aos='zoom-in-left' data-aos-delay="200" />
                        </div>

                        <div className='zigzag-container cr'>
                            <Image className='zigzag-image' src={zigImg2} alt="Zaronology will fix your muddy data" data-aos='zoom-in-right' data-aos-delay="200" />
                            <div className='zigzag-item' data-aos='zoom-in-left' data-aos-delay="200">
                                <h3>Uncovering Key Touchpoints</h3>
                                <p>
                                    Every customer interaction is an opportunity to learn. Are they visiting your website after seeing an ad? Do they read your blog before signing up for a newsletter? Pinpointing these key touchpoints allows you to optimize the journey, creating a seamless path that reduces friction and builds trust.
                                </p>
                            </div>
                        </div>

                        <div className='zigzag-container'>
                            <div className='zigzag-item' data-aos='zoom-in-right' data-aos-delay="200">
                                <h3>Eliminating Silos, Enhancing Insights</h3>
                                <p>
                                    Disconnected systems and fragmented data make it impossible to understand the customer journey fully. By integrating your tools and creating a unified view, you gain the clarity needed to see the big picture. This transparency helps you make smarter decisions, from where to spend your marketing dollars to how to improve conversion rates.
                                </p>
                            </div>
                            <Image className='zigzag-image' src={zigImg3} alt="Zaronology will fix your muddy data" data-aos='zoom-in-left' data-aos-delay="200" />
                        </div>
                        <div className='zigzag-container cr'>
                            <Image className='zigzag-image' src={zigImg4} alt="Zaronology will fix your muddy data" data-aos='zoom-in-right' data-aos-delay="200" />
                            <div className='zigzag-item' data-aos='zoom-in-left' data-aos-delay="200">
                                <h3>Building for the Future</h3>
                                <p>
                                    The customer journey doesn’t end at the sale. Post-purchase touchpoints like support, follow-up emails, and additional offers are vital for nurturing loyalty. A well-mapped journey ensures every step is purposeful, designed to delight your customers and keep them engaged long after the initial purchase.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">Crafting the Customer Experience</span>
                <span className="main-title-border"></span>
            </h2>
            <Container className='py-5'>
                <Row>
                    <Col>
                        <div className='zigzag-container'>
                            <div className='zigzag-item' data-aos='zoom-in-right' data-aos-delay="200">
                                <h3>Turning Insights into Impact</h3>
                                <p>
                                    While the customer journey maps the path, the customer experience is what they feel along the way. It’s the emotional connection they form with your brand, shaped by how easy it is to interact with your systems, how personalized their experience feels, and how valued they feel as a customer.
                                </p>
                            </div>
                            <Image className='zigzag-image' src={zigImg5} alt="Zaronology will fix your muddy data" data-aos='zoom-in-left' data-aos-delay="200" />
                        </div>

                        <div className='zigzag-container cr'>
                            <Image className='zigzag-image' src={zigImg6} alt="Zaronology will fix your muddy data" data-aos='zoom-in-right' data-aos-delay="200" />
                            <div className='zigzag-item' data-aos='zoom-in-left' data-aos-delay="200">
                                <h3>Consistency is Key</h3>
                                <p>
                                    A seamless experience is a consistent one. Customers expect the same level of care, whether they’re browsing your website, engaging with your social media, or reaching out for support. By aligning your systems and teams, you ensure a smooth, unified experience that meets expectations every time.
                                </p>
                            </div>
                        </div>

                        <div className='zigzag-container'>
                            <div className='zigzag-item' data-aos='zoom-in-right' data-aos-delay="200">
                                <h3>Personalization that Resonates</h3>
                                <p>
                                    Today’s customers expect more than one-size-fits-all solutions. They want experiences tailored to their preferences, behaviors, and needs. By leveraging insights from the customer journey, you can create personalized interactions that make your audience feel seen, heard, and appreciated.
                                </p>
                            </div>
                            <Image className='zigzag-image' src={zigImg7} alt="Zaronology will fix your muddy data" data-aos='zoom-in-left' data-aos-delay="200" />
                        </div>
                        <div className='zigzag-container cr'>
                            <Image className='zigzag-image' src={zigImg8} alt="Zaronology will fix your muddy data" data-aos='zoom-in-right' data-aos-delay="200" />
                            <div className='zigzag-item' data-aos='zoom-in-left' data-aos-delay="200">
                                <h3>Driving Loyalty Through Understanding</h3>
                                <p>
                                    The ultimate goal of a great customer experience is loyalty. When customers feel valued and understood, they’re more likely to stick around, spend more, and recommend your brand. From streamlined purchase processes to thoughtful post-sale follow-ups, every positive interaction strengthens their connection to your brand.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> */}
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">Creating Loyal Customers, One Experience at a Time</span>
                <span className="main-title-border"></span>
            </h2>
            <Container className='mt-5'>
                <Row>
                    <Col>
                    <p>
                        The path to customer loyalty isn’t a mystery—it’s a strategy. By understanding the customer journey and optimizing every touchpoint along the way, you lay the groundwork for a seamless and personalized customer experience. This experience isn’t just about meeting expectations; it’s about exceeding them, creating a connection that keeps your customers coming back.
                    </p>
                    <p>
                        When your systems are aligned and your data is clear, you’re not just selling a product—you’re building trust, delivering value, and driving loyalty. Whether it’s crafting a journey that feels effortless or designing experiences that leave a lasting impression, every interaction matters.
                    </p>
                    <p>
                        At Zaronology, we help you take control of the journey, elevate the experience, and turn customers into brand advocates. With the right tools, insights, and strategies, we empower you to create relationships that don’t just sustain your business but propel it forward. The result? A foundation for growth, a strategy for loyalty, and a future where every customer feels like your most important one.
                    </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CustomerLoyaltyRetention;
