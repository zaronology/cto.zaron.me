import { categories, articles } from "@/data/TheClimbData";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TheClimbGrid = () => {
  return (
    <section className="blog-three">
      <Container>
        <Row className="gutter-y-30">
          {articles.map(
            ({
              id,
              image,
              href,
              date,
              month,
              year,
              title,
              text,
              author,
              category,
              path,
            }) => (
              <Col key={id} md={6} lg={4}>
                <div className="case-study-item">
                  <div className="case-study-item__image">
                    {image && (
                      <Image
                        src={image}
                        alt={title}
                        style={{ height: "auto" }}
                      />
                    )}
                    {image && (
                      <Image
                        src={image}
                        alt={title}
                        style={{ height: "auto" }}
                      />
                    )}
                    <div className="case-study-item__date">
                      {date}
                      <span>{month}</span>
                      <div className="case-study-item__date__year">{year}</div>
                    </div>
                    <Link
                      href={`${href}/${category}/${path}`}
                      className="case-study-item__image__link"
                    >
                      <i className="icon-right-arrow"></i>
                      <span className="sr-only">{title}</span>
                    </Link>
                  </div>
                  <div className="case-study-item__content">
                    <h3 className="case-study-item__title">
                      <a href={`${href}/${category}/${path}`}>{title}</a>
                    </h3>
                    <p className="case-study-item__text">{text}</p>
                    <div className="case-study-item__meta">
                      <div className="case-study-item__meta__author">
                        Author: {author}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default TheClimbGrid;
