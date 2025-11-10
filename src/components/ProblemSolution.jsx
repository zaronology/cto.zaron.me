import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const icon = "tolak-icons-two-arrow-right-short";

const ProbledSolution = () => {
  return (
    <section className="problem-solution">
      <div className="problem-solution-item">
        <div className="ps-img"></div>
        <div className="ps-content">
          <h2>The Problem</h2>
        </div>
      </div>
      <div className="problem-solution-item">
        <div className="ps-img"></div>
        <div className="ps-content">
          <h2>The Solution</h2>
        </div>
      </div>
    </section>
  );
};

export default ProbledSolution;
