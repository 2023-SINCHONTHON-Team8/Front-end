import styled from "styled-components";
import React, { useState } from "react";

const Tag = ({ text, type }) => {
  let btnColor = type === "disabled" ? "#989292" : "#fd505b";

  return <TagWrapper btnColor={btnColor}>{text}</TagWrapper>;
};

export default Tag;

const TagWrapper = styled.div`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 40px;
  border: 1px solid ${(props) => props.btnColor};
  color: ${(props) => props.btnColor};
`;
