import React from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./ContactInfo.css"; // Import your custom CSS for styling

const { Text } = Typography;

function ContactInfo() {
  return (
    <div className="contact-info-container">
      <Row justify="space-between" align="middle" className="contact-info-row">
        {/* Left side: Contact Info in one line */}
        <Col xs={24} sm={12} md={16} className="contact-info-left">
          <Space size="large" wrap>
            <Text className="contact-text">Email: info@btytrading.com</Text>
            <Text className="contact-text">Phone: +251 292 60805</Text>
            <Text className="contact-text">Address: Bole, Addis Ababa</Text>
          </Space>
        </Col>

        {/* Right side: Social Media Icons */}
        <Col xs={24} sm={12} md={8} className="social-media-col">
          <Space size="large">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined className="social-icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterOutlined className="social-icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined className="social-icon" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined className="social-icon" />
            </a>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default ContactInfo;
