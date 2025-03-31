import React from "react";
import { Button, Form, Input, Row, Col } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "./Contact.css";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const contactDetails = [
    { icon: <MailOutlined />, text: "info@btytrading.com" },
    { icon: <PhoneOutlined />, text: "+251929260805" },
    { icon: <HomeOutlined />, text: "Bole, Addis Ababa, Ethiopia" },
    {
      text: "Thank you for your interest. Please fill out the form below and we will reach out to you shortly.",
    },
  ];

  return (
    <div className="contact-page">
      <Row gutter={[32, 32]} justify="center">
        {/* Contact Information */}
        <Col xs={24} sm={24} md={8} lg={6}>
          <div className="contact-info">
            <h2 className="contact-info-heading">Contact Information</h2>
            {contactDetails.map((item, index) => (
              <p key={index}>
                {item.icon} {item.text}
              </p>
            ))}
          </div>
        </Col>

        {/* Contact Form */}
        <Col xs={24} sm={24} md={16} lg={12}>
          <Form
            className="form-container"
            form={form}
            name="send"
            onFinish={onFinish}
            layout="vertical"
          >
            <div className="human-icon">
              <UserOutlined
                style={{
                  fontSize: "50px",
                  color: "#1890ff",
                  marginBottom: "20px",
                }}
              />
            </div>

            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="First Name"
                className="form-input"
              />
            </Form.Item>

            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Last Name"
                className="form-input"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input a valid E-mail!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                className="form-input"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Phone Number"
                className="form-input"
              />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Your message..."
                className="form-input"
              />
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="submit-button"
              >
                Send
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
