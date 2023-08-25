import styled from "styled-components";
import React, { useState } from "react";

const TagButton = ({ text, type }) => {
  const [disabled, setDisabled] = useState(true);

  let btnColor = disabled ? "#989292" : "#fd505b";

  return (
    <TagWrapper btnColor={btnColor} onClick={() => setDisabled(!disabled)}>
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

  margin-right: 10px;
  margin-bottom: 10px;
`;
