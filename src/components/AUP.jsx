'use client';
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const AUP = () => {
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
                        <div name="termly-embed" data-id="ab2d393c-4cca-43c0-adb1-351a5e49a709"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AUP;