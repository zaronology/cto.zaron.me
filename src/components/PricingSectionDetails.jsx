'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const icon = "tolak-icons-two-sign-in-alt1";

const PricingSectionDetails = () => {

    return (
        <section className="bg-blue my-5" data-aos='zoom-in-up' data-aos-delay="200">
            <h2 className="main-title nb mb-0">
                <span className="main-title-content">How We Work</span>
            </h2>
            <Container className='py-5 my-md-5 home-page-container'>
                <Row>
                    <Col xs={12} className='' data-aos='fade-up' data-aos-delay="200">
                        <div className="plans-packages">
                            <div className='plans-packages-inner'>
                                <h4 className='mt-3'>
                                    Outcome-Driven Deliverables
                                </h4>
                                <p>
                                    Outcome-Driven Deliverables (Deliverable(s)) are strategic, results-focused initiatives designed to drive measurable
                                    progress in key areas of your business. Each Deliverable is carefully scoped to align with your business goals, ensuring a
                                    clear path from strategy to execution.
                                </p>
                                <h5 className='mt-4'>Examples of Outcome-Driven Deliverables:</h5>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Strategic Planning:
                                        </h5>
                                        Developing frameworks such as a CRO roadmap, attribution tracking architecture, or attribution
                                        model to guide long-term growth.
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Problem Resolution:
                                        </h5>
                                        Addressing and resolving critical challenges such as attribution tracking inaccuracies, system
                                        integrations, or data discrepancies.
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Operational Enhancements:
                                        </h5>
                                        Implementing structured solutions such as SOP development, workflow automation, or
                                        optimization processes to improve efficiency.
                                    </li>
                                </ul>
                                <h5 className='mt-4'>Scope & Execution:</h5>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Deliverables are scoped during our strategic calls to ensure alignment with your priorities.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Larger Deliverables are broken down into phases to maintain momentum and avoid overwhelming your team.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Regular updates and milestones are provided to ensure transparency and accountability throughout the process.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            If a Deliverable carries over into the next month, it will not impact your ability to start a new Deliverable, provided it
                                            stays within your package limits.
                                        </h5>
                                    </li>
                                </ul>
                                <h5 className='mt-4'>Managing Expectations:</h5>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Deliverables are executed at a pace that matches your plan level, with clear milestones and timelines.
                                        </h5>
                                        <ul className='nice-list sub-list'>
                                            <li>Your package determines the number of active deliverables you can have at any given time. If your plan allows for two
                                                active deliverables, that is the set limit.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            If an urgent initiative is required and you do not have any Deliverables available, you can:
                                        </h5>
                                        <ul className='nice-list sub-list'>
                                            <li><b>Add an à la carte deliverables</b>, which will have a 30-day completion window starting from the date work begins, regardless of
                                                whether it takes 2 days or 30 days.</li>
                                            <li><b>Place it in your queue</b>, where it will begin as soon as an active Deliverable is completed, based on your existing priorities and
                                                availability.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Regular updates and milestones are provided to ensure transparency and accountability throughout the process.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            If a Deliverable carries over into the next month, it will not impact your ability to start a new Deliverable, provided it
                                            stays within your package limits.
                                        </h5>
                                    </li>
                                </ul>
                                <h5 className='mt-4'>Key Clarifications:</h5>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            If no active deliverables are available, urgent needs can be addressed through à la carte options or by adding them to the queue.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            À la carte deliverables provide a dedicated 30-day window; whether completed in 2 days or 30 days, the cost remains the same.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            New initiatives can start immediately when a slot becomes available, rather than waiting for a new billing cycle.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Phased work progresses seamlessly, with each phase absorbed into the next available deliverable slot.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Clients have control over their deliverable priorities, and flexibility to scale engagement based on business needs.
                                        </h5>
                                    </li>
                                </ul>
                                <h4 className='mt-5'>
                                    Asynchronous Collaboration: Seamless, Efficient, and Flexible
                                </h4>
                                <p>
                                    Our asynchronous workflow empowers your team to stay informed and aligned without the need for constant meetings.
                                    This approach ensures that critical updates, insights, and solutions are delivered on your schedule—without disrupting your
                                    operations.
                                </p>
                                <h5 className='mt-4'>This Includes:</h5>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Progress Updates & Feedback:
                                        </h5>
                                        <ul className='nice-list sub-list'>
                                            <li>Regular updates on active deliverables and next steps.</li>
                                            <li>Structured feedback loops to ensure alignment with goals.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Question & Advisory Support:
                                        </h5>
                                        <ul className='nice-list sub-list'>
                                            <li>Need help choosing the right tool or software for your needs?</li>
                                            <li>Have a business-related question that isn’t tied to a specific deliverable?</li>
                                            <li>Get expert insights and recommendations to guide your decisions.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Issue Resolution & Clarifications:
                                        </h5>
                                        <ul className='nice-list sub-list'>
                                            <li>Address minor roadblocks quickly without waiting for scheduled calls.</li>
                                            <li>Clarify uncertainties related to tracking, attribution, or operational workflows</li>
                                        </ul>
                                    </li>
                                </ul>
                                <h5 className='mt-4'>How It Works:</h5>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Clients submit requests through ClickUp or email using our structured intake process.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Requests are reviewed and acknowledged within the defined response window.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Solutions are provided within the agreed timeline, ensuring clarity and actionable next steps.
                                        </h5>
                                    </li>
                                </ul>
                                <h5 className='mt-4'>Why It Works:</h5>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Ensures access to expert insights without the inefficiencies of constant back-and-forth meetings.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Keeps your team focused on execution while we provide solutions tailored to your strategic goals.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            Provides a centralized place for tracking progress, solutions, and next steps.
                                        </h5>
                                    </li>
                                </ul>
                                <h5 className='mt-4'>Tools We Use:</h5>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Email & ClickUp:</b> Submit structured requests for guidance, updates, and issue resolutions with clear action plans.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Loom Videos:</b> Providing in-depth explanations, walkthroughs, and strategic insights tailored to your business needs.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Intake Forms:</b> Streamlining the submission process to ensure requests are well-defined and actionable for faster, more
                                            effective solutions.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Prioritized Response Times:</b> Defined service levels ensure you receive timely updates and resolutions based on the scope
                                            and urgency of your needs.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Slack:</b> Available for faster communication, exclusively for Enterprise package clients to ensure high-priority support and
                                            streamlined collaboration.
                                        </h5>
                                    </li>
                                </ul>
                                <h4 className='mt-5'>
                                    Agile Execution: Prioritizing What Matters Most
                                </h4>
                                <p>
                                    We focus on driving progress by tackling high-impact initiatives first, ensuring strategic priorities receive immediate
                                    attention. Our approach includes:
                                </p>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Iterative Progress:</b> Regular touch-points to assess priorities and adjust strategies as needed.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Flexibility:</b> Adaptable planning to accommodate evolving business needs and opportunities.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Efficiency:</b> Solutions delivered with precision and speed, ensuring continuous forward momentum.
                                        </h5>

                                    </li>
                                </ul>
                                <p>
                                    Our commitment is to keep your business moving forward, addressing challenges proactively and optimizing strategies for
                                    sustainable growth.
                                </p>
                                <h4 className='mt-5'>
                                    Strategy Meeting: Driving Clarity & Action
                                </h4>
                                <p>
                                    Our strategic meetings are designed to provide clarity, direction, and actionable steps to help you achieve your business
                                    objectives. Each call is structured around:
                                </p>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Business Priorities:</b> Aligning your goals with actionable plans.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Tracking Optimization:</b> Ensuring data accuracy and leveraging insights for better decision-making.
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Problem-Solving:</b> Addressing roadblocks and identifying immediate opportunities for improvement.
                                        </h5>
                                    </li>
                                </ul>
                                <p>
                                    Calls are tailored to your evolving needs, providing a focused and results-driven experience. We collaborate closely with your
                                    team to prioritize key areas and ensure every discussion leads to clear, actionable next steps.
                                </p>
                                <h4 className='mt-5'>
                                    Response Time Definition
                                </h4>
                                <p>
                                    Response time refers to the period within which you will receive:
                                </p>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Acknowledgment:</b> Confirmation that your request has been received and is under review.
                                        </h5>
                                    </li>
                                    <li>

                                        <h5>
                                            <i className={icon}></i>
                                            <b>Resolution:</b> A structured response, which may include a solution, Loom video, strategy map, or an action plan addressing
                                            the request.
                                        </h5>
                                    </li>
                                </ul>
                                <p>
                                    <em>Note: Response times are calculated within standard business hours (Monday–Friday, 9 AM–5 PM ET). Re quests submitted
                                        outside of business hours will be processed on the next business day.</em>
                                </p>
                                <h4 className='mt-5'>
                                    Tactical Check-In Calls (30 minutes each): 
                                </h4>
                                <p>
                                    Quick alignment touch-points for progress and direction. 
                                </p>
                                <p>
                                    Tactical check-in calls are designed to provide focused, actionable updates without the need for lengthy discussions. These calls help keep initiatives on track and allow for real-time adjustments to ensure continued progress. 
                                </p>
                                <ul className="nice-list mt-3">
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Purpose:</b> <span>Quick alignment touch-points to review progress, address roadblocks, and ensure initiatives stay on track.</span>
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Outcome:</b> <span>Adjustments and clarifications to keep execution running smoothly.</span>
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className={icon}></i>
                                            <b>Value:</b> <span>Keeps momentum without lengthy meetings.</span>
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PricingSectionDetails;
