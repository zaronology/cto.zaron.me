'use client';
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Terms = () => {
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
                        <div name="termly-embed" data-id="189f0349-5adb-464c-ada2-ad79c5ceb13c"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Terms;