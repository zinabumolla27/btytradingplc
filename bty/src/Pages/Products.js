import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import "./Products.css";
import Button1 from "../Components/Button1";
import CommonModal from "/home/hmeressa/Documents/Bty-trading/bty/src/Components/common/modal";

import { ProductLists } from "../constants/product";

const { Meta } = Card;

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  const showModal = (product) => {
    setProductDetails(product);
    setIsModalOpen(true);
  };

  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <div className="card-container">
      <div className="productcontainer">
        <div className="product-title">
          <h2>
            <span className="highlight">Our</span> Products
          </h2>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {ProductLists.map((product, index) => (
            <Col xs={24} sm={12} md={6} lg={6} key={index}>
              <Card
                hoverable
                cover={
                  <img
                    className="product-image"
                    alt={product.title}
                    src={product.image}
                  />
                }
              >
                <Meta title={product.title} description={product.description} />
                <Button1 onClick={() => showModal(product)} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal for product details */}
      <CommonModal
        isModalOpen={isModalOpen}
        productDetails={productDetails}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default Products;
