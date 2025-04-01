import React from "react";
import { Collapse, Divider } from "antd";
import "./FAQ.css"; // Custom CSS file for styles

const FAQ = () => {
  const text1 = `BTY Trading PLC specializes in importing and exporting high-quality sesame and agricultural products. We ensure timely delivery and adherence to international trade standards.`;
  const text2 = `We provide competitive pricing for bulk shipments and ensure that our products meet global market standards. Whether you're a distributor or wholesaler, we are equipped to fulfill large orders.`;
  const text3 = `Yes, we offer worldwide shipping to various countries. Our logistics partners ensure efficient and secure transport to destinations across the globe.`;
  const text4 = `We focus on high-quality sesame seeds and have established a solid reputation for providing top-tier sesame with consistent quality. Our sesame seeds are sourced from trusted farms with strict quality control standards.`;
  const text5 = `Yes, we do. Our sesame seeds are available in various quantities, from small to bulk orders, tailored to meet the needs of our clients. We also offer custom packaging if required.`;
  const text6 = `Our sesame seeds are exported globally to markets in the Middle East, Asia, Europe, and North America. We adhere to the highest standards to meet international market requirements.`;

  const items = [
    {
      key: "1",
      label: "What does BTY Trading PLC specialize in?",
      children: <p>{text1}</p>,
    },
    {
      key: "2",
      label: "How competitive are your prices?",
      children: <p>{text2}</p>,
    },
    {
      key: "3",
      label: "Do you ship internationally?",
      children: <p>{text3}</p>,
    },
    {
      key: "4",
      label: "What is the focus of BTY Trading PLC in sesame seed export?",
      children: <p>{text4}</p>,
    },
    {
      key: "5",
      label: "Do you offer different quantities for sesame seeds?",
      children: <p>{text5}</p>,
    },
    {
      key: "6",
      label: "Where are your sesame seeds exported?",
      children: <p>{text6}</p>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions (FAQ)</h2>
      <Divider />
      <Collapse
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
        expandIconPosition="right"
        className="faq-collapse"
      />
    </div>
  );
};

export default FAQ;
