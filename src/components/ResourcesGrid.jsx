import articles from "@/content/resources/index.mjs";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const getImage = (imagePath) => {
  try {
    return require(`@/assets/images/the-climb/${imagePath}`).default;
  } catch (error) {
    console.error("Error loading image:", imagePath, error);
    return null; // Fallback to null if image is not found
  }
};

const ResourcesGrid = () => {
  return (
    <section className="blog-three">
      <Container>
        <Row className="gutter-y-30">
          {articles.map(
            (
              {
                image,
                subject,
                slug,
                date,
                month,
                year,
                metadata,
                content,
                author,
              },
              idx
            ) => {
              const imageSrc = getImage(image); // Dynamically get image

              return (
                <Col key={idx} md={6} lg={4}>
                  <div className="case-study-item">
                    <div className="case-study-item__image">
                      {imageSrc && (
                        <Image
                          src={imageSrc}
                          alt={metadata.title}
                          priority
                          style={{ height: "auto" }}
                        />
                      )}
                      {imageSrc && (
                        <Image
                          src={imageSrc}
                          alt={metadata.title}
                          priority
                          style={{ height: "auto" }}
                        />
                      )}

                      <div className="case-study-item__date">
                        {date}
                        <span>{month}</span>
                        <div className="case-study-item__date__year">
                          {year}
                        </div>
                      </div>
                      <Link
                        href={`/resources/${subject}/${slug}`}
                        className="case-study-item__image__link"
                      >
                        <i className="icon-right-arrow"></i>
                        <span className="sr-only">{metadata.title}</span>
                      </Link>
                    </div>
                    <div className="case-study-item__content">
                      <h3 className="case-study-item__title">
                        <Link href={`/resources/${subject}/${slug}`}>
                          {metadata.title}
                        </Link>
                      </h3>
                      <p className="case-study-item__text">{content}</p>
                      <div className="case-study-item__meta">
                        <div className="case-study-item__meta__author">
                          Author: {author}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            }
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ResourcesGrid;
