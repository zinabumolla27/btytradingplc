import { Button, Flex } from "antd";
import React from "react";

function Button1({ onClick }) {
  return (
    <Flex
      direction="column" // Arrange children in a column
      justify="space-between" // Space out content vertically
      align="center" // Center the content horizontally
      style={{ width: "50%", paddingTop: "25px", marginLeft: "50px" }}
    >
      <Button type="primary" block onClick={onClick}>
        Details
      </Button>
    </Flex>
  );
}

export default Button1;
