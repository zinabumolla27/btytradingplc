import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  PhoneOutlined, // New icon for phone
  MailOutlined, // New icon for email
  EnvironmentOutlined, // New icon for location
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // Use useNavigate from React Router v6

const { Footer } = Layout;
const { Text, Title } = Typography;

const AppFooter = () => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleSocialClick = (url) => {
    window.open(url, "_blank"); // Open in new tab
  };

  const handleQuickLinkClick = (path) => {
    navigate(path); // Use navigate to navigate to the respective page
  };

  return (
    <Footer
      style={{
        backgroundColor: "#001529",
        color: "#fff",
        padding: "20px 50px", // Reduced padding for compact look
        borderTop: "1px solid #444", // subtle separation
      }}
    >
      <Row gutter={[32, 32]} justify="center">
        {/* Company Info */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Title level={4} style={{ color: "#fff", fontWeight: "bold" }}>
            Bty Trading Plc
          </Title>
          <Text style={{ color: "#bbb", fontSize: "14px", lineHeight: "1.5" }}>
            We are committed to delivering the highest quality sesame and
            agricultural products to meet global standards and satisfy customer
            expectations.
          </Text>
        </Col>

        {/* Quick Links - Centered and compact */}
        <Col xs={24} sm={12} md={8} lg={6} style={{ textAlign: "center" }}>
          <Title level={4} style={{ color: "#fff", fontWeight: "bold" }}>
            Quick Links
          </Title>
          <Space direction="vertical" size={4}>
            <Text
              style={{ color: "#bbb", cursor: "pointer", fontSize: "14px" }}
              onClick={() => handleQuickLinkClick("/")} // Change the path as needed
            >
              Home
            </Text>
            <Text
              style={{ color: "#bbb", cursor: "pointer", fontSize: "14px" }}
              onClick={() => handleQuickLinkClick("/CompanyProfile")}
            >
              About Us
            </Text>
            <Text
              style={{ color: "#bbb", cursor: "pointer", fontSize: "14px" }}
              onClick={() => handleQuickLinkClick("/contact")}
            >
              Contact Us
            </Text>
          </Space>
        </Col>

        {/* Contact Info */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Title level={4} style={{ color: "#fff", fontWeight: "bold" }}>
            Contact
          </Title>
          <Space direction="vertical">
            <Text style={{ color: "#bbb", fontSize: "14px" }}>
              <PhoneOutlined /> 0911111111
            </Text>
            <Text
              style={{ color: "#bbb", fontSize: "14px" }}
              onClick={() =>
                (window.location.href = "mailto:info@BtyTradingPlc.com")
              }
            >
              <MailOutlined /> info@BtyTradingPlc.com
            </Text>
            <Text style={{ color: "#bbb", fontSize: "14px" }}>
              <EnvironmentOutlined /> Bole, Addis Ababa
            </Text>
          </Space>
        </Col>

        {/* Social Media */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Title level={4} style={{ color: "#fff", fontWeight: "bold" }}>
            Follow Us
          </Title>
          <Space size="large">
            <FacebookOutlined
              style={{
                fontSize: "24px",
                color: "#bbb",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              onClick={() => handleSocialClick("https://facebook.com")} // Add your social URLs here
            />
            <TwitterOutlined
              style={{
                fontSize: "24px",
                color: "#bbb",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              onClick={() => handleSocialClick("https://twitter.com")}
            />
            <InstagramOutlined
              style={{
                fontSize: "24px",
                color: "#bbb",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              onClick={() => handleSocialClick("https://instagram.com")}
            />
            <LinkedinOutlined
              style={{
                fontSize: "24px",
                color: "#bbb",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              onClick={() => handleSocialClick("https://linkedin.com")}
            />
          </Space>
        </Col>
      </Row>

      {/* Copyright */}
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Text style={{ color: "#bbb", fontSize: "14px" }}>
          © {new Date().getFullYear()} Bty Trading Plc. All Rights Reserved.
        </Text>
      </Row>
    </Footer>
  );
};

export default AppFooter;
