import React, { useEffect, useState } from "react";
import agri from "../Assets/agri.jpg";
import sesameplant from "../Assets/sesameplant.jpg";
import humera from "../Assets/humera.jpg";
import { Typography, Card, Row, Col } from "antd";
import {
  AimOutlined,
  CheckCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import "./CompanyProfile.css"; // Import CSS file

const { Title, Paragraph, Text } = Typography;

function CompanyProfile() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500); // Delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header Image with About Us Text */}
      <div className="header-img">
        <img src={agri} alt="Agriculture" className="header-img" />
        <div className={`fade-in ${fadeIn ? "show" : ""} header-text`}>
          <span className="about-us-text">About Us</span>{" "}
          {/* Updated text color */}
        </div>
      </div>

      {/* Company Profile Title */}
      <div className={`fade-in ${fadeIn ? "show" : ""}`}>
        <Title style={{ color: "#333333" }} className="company-title">
          Company Profile
        </Title>
      </div>
      <div>
        {" "}
        <Row gutter={16} className="about-bty-container">
          <Col span={12} className="about-bty-text">
            <Title className="about-bty-title">About Bty Trading Plc</Title>
            <Text className="about-bty-description">
              Founded in 1988, Our consistent growth and success are driven by
              our core values of professionalism, honesty, and efficiency, which
              are at the heart of everything we do. Over the years, we have
              cultivated long-term partnerships with esteemed global clients,
              and our dedication to building strong, personal relationships is
              one of our greatest assets. This focus on trust and mutual respect
              has allowed us to establish a prominent position in the
              competitive international market. As we continue to grow, we
              remain dedicated to providing exceptional service, timely
              deliveries, and products that meet the highest standards of
              quality.
            </Text>
          </Col>
          <Col span={12} className="about-bty-image">
            <img
              src={sesameplant}
              alt="Sesame Plant"
              className="about-bty-img"
            />
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={16} className="about1-bty-container">
          <Col span={12} className="about1-bty-image">
            <img src={humera} alt="Sesame Plant" className="about1-bty-img" />
          </Col>
          <Col span={12} className="about-bty-text1">
            <Text className="about-bty-description1">
              Our profound expertise in the industry empowers us to meticulously
              analyze, distill, and process critical information, which we
              swiftly convey to our clients. This real-time flow of insights
              positions our clients to make decisive, well-informed, and
              strategically sound choices, allowing them to capitalize on
              emerging market trends with confidence. By ensuring seamless
              contractual satisfaction throughout every phase of the
              transaction, we not only earn the trust and appreciation of our
              clients but also cultivate long-term relationships founded on
              loyalty and mutual respect. Over the years, we have steadfastly
              nurtured our reputation for excellence, and as we continue to
              expand our horizons, we remain dedicated to broadening our global
              presence and influence within the dynamic business landscape.
            </Text>
          </Col>
        </Row>
      </div>

      {/* Mission, Vision, and Goals Section */}
      <div style={{ width: "90%", marginLeft: "5%", padding: "20px" }}>
        <Row gutter={[16, 24]} justify="center">
          {/* Mission Card */}
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Mission"
              bordered={false}
              cover={<AimOutlined style={{ fontSize: 40, color: "#1890ff" }} />}
              className="card-container mission-card"
              hoverable
            >
              <Paragraph>
                Our mission is to deliver premium agro-based products to
                international markets, We aim to empower businesses and enhance
                global food security by providing trusted and reliable
                solutions.
              </Paragraph>
            </Card>
          </Col>

          {/* Vision Card */}
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Vision"
              bordered={false}
              cover={<EyeOutlined style={{ fontSize: 40, color: "#52c41a" }} />}
              className="card-container vision-card"
              hoverable
            >
              <Paragraph>
                To be a leading global provider of high-quality agricultural
                commodities, fostering sustainable growth and creating lasting
                value for our partners and communities worldwide.
              </Paragraph>
            </Card>
          </Col>

          {/* Goal Card */}
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Goal"
              bordered={false}
              cover={
                <CheckCircleOutlined
                  style={{ fontSize: 40, color: "#faad14" }}
                />
              }
              className="card-container goal-card"
              hoverable
            >
              <Paragraph>
                To establish long-term, mutually beneficial relationships with
                clients and partners, expanding our global presence while
                continuously improving our product quality, delivery timelines,
                and customer satisfaction.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <strong
          style={{
            fontSize: "1.8em",
            color: "#19406D",
            textAlign: "center",
            fontWeight: "bold",
            marginLeft: "600px",
          }}
        >
          VALUES
        </strong>
      </div>
      <div>
        <Row
          gutter={16}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          {/* Left Column */}
          <Col
            span={12}
            style={{ padding: "20px", flex: 1, marginLeft: "100px" }}
          >
            <Text
              style={{ fontSize: "1.2em", lineHeight: "1.8", color: "#333" }}
            >
              {/* Quality Assurance */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: "#4CAF50",
                    fontSize: "1.4em",
                    marginRight: "12px",
                  }}
                />
                <div>
                  <strong
                    style={{
                      color: "#000",
                      marginBottom: "4px",
                      display: "block",
                    }}
                  >
                    Quality Assurance:
                  </strong>
                  We are committed to delivering the highest quality sesame and
                  agricultural products to meet global standards and satisfy
                  customer expectations.
                </div>
              </div>

              {/* Integrity */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: "#4CAF50",
                    fontSize: "1.4em",
                    marginRight: "12px",
                  }}
                />
                <div>
                  <strong
                    style={{
                      color: "#000",
                      marginBottom: "4px",
                      display: "block",
                    }}
                  >
                    Integrity:
                  </strong>
                  We conduct our business with honesty and transparency,
                  ensuring that our partners and customers can trust us in every
                  transaction.
                </div>
              </div>

              {/* Sustainability */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: "#4CAF50",
                    fontSize: "1.4em",
                    marginRight: "12px",
                  }}
                />
                <div>
                  <strong
                    style={{
                      color: "#000",
                      marginBottom: "4px",
                      display: "block",
                    }}
                  >
                    Sustainability:
                  </strong>
                  We prioritize environmentally friendly practices and support
                  sustainable agriculture to protect natural resources for
                  future generations.
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: "#4CAF50",
                    fontSize: "1.4em",
                    marginRight: "12px",
                  }}
                />
                <div>
                  <strong
                    style={{
                      color: "#000",
                      marginBottom: "4px",
                      display: "block",
                    }}
                  >
                    Customer Satisfaction:
                  </strong>
                  We value our customers and strive to provide reliable products
                  and services that meet their specific needs and expectations.
                </div>
              </div>
            </Text>
          </Col>

          {/* Right Column */}
          <Col span={12} style={{ padding: "20px", flex: 1 }}>
            <Text
              style={{ fontSize: "1.2em", lineHeight: "1.8", color: "#333" }}
            >
              {/* Innovation */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: "#4CAF50",
                    fontSize: "1.4em",
                    marginRight: "12px",
                  }}
                />
                <div>
                  <strong
                    style={{
                      color: "#000",
                      marginBottom: "4px",
                      display: "block",
                    }}
                  >
                    Innovation:
                  </strong>
                  We embrace innovation and continually seek new methods and
                  technologies to improve our supply chain, processing, and
                  distribution.
                </div>
              </div>

              {/* Global Reach */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: "#4CAF50",
                    fontSize: "1.4em",
                    marginRight: "12px",
                  }}
                />
                <div>
                  <strong
                    style={{
                      color: "#000",
                      marginBottom: "4px",
                      display: "block",
                    }}
                  >
                    Global Reach:
                  </strong>
                  We are dedicated to building strong international
                  relationships and expanding our market reach through strategic
                  partnerships and reliable service.
                </div>
              </div>

              {/* Reliability */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: "#4CAF50",
                    fontSize: "1.4em",
                    marginRight: "12px",
                  }}
                />
                <div>
                  <strong
                    style={{
                      color: "#000",
                      marginBottom: "4px",
                      display: "block",
                    }}
                  >
                    Reliability:
                  </strong>
                  We ensure consistent and timely delivery of products,
                  maintaining a dependable supply chain for our customers.
                </div>
              </div>

              {/* Partnership and Collaboration */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: "#4CAF50",
                    fontSize: "1.4em",
                    marginRight: "12px",
                  }}
                />
                <div>
                  <strong
                    style={{
                      color: "#000",
                      marginBottom: "4px",
                      display: "block",
                    }}
                  >
                    Partnership and Collaboration:
                  </strong>
                  We believe in working closely with farmers, suppliers, and
                  customers to create mutually beneficial relationships and
                  long-term success.
                </div>
              </div>
            </Text>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CompanyProfile;
