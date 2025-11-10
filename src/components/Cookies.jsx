'use client';
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Cookies = () => {
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
                        <div name="termly-embed" data-id="a066b302-9d6f-46b0-bb39-24f510ba7839"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Cookies;