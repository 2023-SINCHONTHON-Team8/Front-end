import styled from "styled-components";
import React, { useState } from "react";

const TagButton = ({ text, type }) => {
  const [buttonType, setButtonType] = useState(type);

  const toggleButtonType = () => {
    const newType = buttonType === "disabled" ? null : "disabled";
    setButtonType(newType);
  };

  let btnColor = type === "disabled" ? "#989292" : "#fd505b";

  return (
    <TagWrapper btnColor={btnColor} onClick={toggleButtonType}>
      {text}
    </TagWrapper>
  );
};

export default TagButton;

const TagWrapper = styled.button`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 40px;
  border: 1px solid ${(props) => props.btnColor};
  color: ${(props) => props.btnColor};
  background-color: transparent;
`;
