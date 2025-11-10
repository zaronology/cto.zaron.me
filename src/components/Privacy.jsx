'use client';
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Privacy = () => {
    useEffect(() => {
        const existingScript = document.getElementById('termly-jssdk');
        if (existingScript) {
            existingScript.remove();
        }
        const script = document.createElement('script');
        script.id = 'termly-jssdk';
        script.src = 'https://app.termly.io/embed-policy.min.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <div name="termly-embed" data-id="17c287aa-a8b2-42ec-a8e3-d16e507a93e6"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Privacy;