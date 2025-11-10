'use client';
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Disclaimer = () => {
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
                        <div name="termly-embed" data-id="e1414ea3-4203-4187-a3d0-11b0380c015b"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Disclaimer;