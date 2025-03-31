import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import sss1 from "../Assets/sss1.jpeg";
import sss2 from "../Assets/sss2.jpg";
import bbandw from "../Assets/bbandw.jpg";
import sss4 from "../Assets/sss4.jpg";
import bb1 from "../Assets/bb1.jpg";
import tele from "../Assets/tele.jpg";
import sesametypes from "../Assets/sesametypes.jpeg";
import threeinonesesam from "../Assets/threeinonesesam.jpg";
import agri from "../Assets/agri.jpg";
import { Image } from "antd";
import "./Home.css";
import { Button, Carousel, Col, Row, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import Testimonals from "../Components/Testimonals";

const { Title, Text, Paragraph } = Typography;
const images = [
  {
    src: sss4,
    description: "Humera Sesame Seeds",
    paragraph: "Humera sesame seeds are known for their high oil content.",
  },
  {
    src: bb1,
    description: "Black Sesame Seeds",
    paragraph: "Black sesame seeds are rich in antioxidants.",
  },
  {
    src: sss2,
    description: "Wolega Sesame Seeds",
    paragraph: "Wolega sesame seeds have a distinct nutty flavor.",
  },
  {
    src: sss1,
    description: "Metema Sesame Seeds",
    paragraph:
      "Metema sesame seeds are cultivated in Ethiopia's fertile regions.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(true); // State to toggle text
  const [currentText, setCurrentText] = useState(
    "Welcome to BTY Import Export Trading PLC"
  );

  useEffect(() => {
    const textToggleInterval = setInterval(() => {
      setShowWelcome((prev) => !prev);
      setCurrentText((prev) =>
        prev === "Welcome to BTY Import Export Trading PLC"
          ? "Exporting Agricultural Products Worldwide"
          : "Welcome to BTY Import Export Trading PLC"
      );
    }, 4000); // Switch text every 4 seconds

    return () => clearInterval(textToggleInterval); // Clean up interval
  }, []);

  const handleLearnMore = () => {
    navigate("/CompanyProfile");
  };

  return (
    <div className="homedetail">
      <Carousel
        arrows
        infinite={false}
        autoplay={{ dotDuration: true }}
        autoplaySpeed={5000}
      >
        {[agri, sesametypes, threeinonesesam, bbandw].map((image, index) => (
          <div key={index} className="carousel-container">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
            <div className="carousel-overlay">
              <h2 className={showWelcome ? "fade-in-text" : "slide-in-text"}>
                {currentText}
              </h2>
              <p className={showWelcome ? "slide-in-text" : "fade-in-text"}>
                {showWelcome
                  ? "Import and Export"
                  : "Sesame & Agricultural Products"}
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      <div>
        <Row
          gutter={[24, 24]}
          align="middle"
          style={{
            padding: "50px",
            backgroundColor: "#f8f9fa",
            marginLeft: "30px",
          }}
        >
          <Col xs={24} sm={12}>
            <Title level={2} style={{ color: "#003366", fontWeight: "bold" }}>
              ABOUT BTY TRADING PLC
            </Title>
            <Text style={{ fontSize: "18px", color: "#555" }}>
              Ethiopia's Agricultural Products Exporter.
            </Text>
          </Col>
          <Col xs={24} sm={12}>
            <Paragraph
              style={{ fontSize: "20px", color: "#444", lineHeight: "1.6" }}
            >
              BTY Trading PLC Import – Export Trading is a legally registered
              business entity that has been in the import-export business in
              Ethiopia since 1999. It is owned by a young entrepreneur,
              registering as a sole proprietorship company.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: "#003366", borderColor: "#003366" }}
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </div>

      {/* Product Categories Section */}
      <div>
        <Title
          level={2}
          className="title-center"
          style={{
            color: "#003366",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            animation: "fadeIn 1.5s ease-in-out",
            fontSize: "40px",
          }}
        >
          Our Product Categories
        </Title>

        <style>
          {`
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(-10px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>

      {/* Image Grid Section */}
      <div>
        <Row gutter={[16, 16]} className="image-grid">
          {images.map((image, index) => (
            <Col key={index} xs={12} sm={6}>
              <div className="image-container">
                <img src={image.src} alt="Description" className="grid-image" />
                <div className="image-overlay">
                  <p>{image.description}</p>
                </div>
              </div>
              <p
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  textAlign: "justify",
                  marginTop: "10px",
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#444",
                  backgroundColor: "#f8f9fa",
                  padding: "12px",
                  borderRadius: "6px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  maxWidth: "100%",
                  minHeight: "80px",
                  lineHeight: "1.6",
                }}
              >
                <CheckCircleOutlined
                  style={{
                    flexShrink: 0,
                    fontSize: "22px",
                    color: "#2E8B57",
                    marginTop: "2px",
                  }}
                />
                <span style={{ flex: "1" }}>{image.paragraph}</span>
              </p>
            </Col>
          ))}
        </Row>
      </div>

      <div style={{ textAlign: "center", padding: "10px" }}>
        <Title style={{ color: "#8B4513" }}>Associations & Partnerships</Title>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Image width={200} src={tele} alt="nopartner" />
      </div>
      <Testimonals />
    </div>
  );
};

export default Home;
