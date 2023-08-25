import React from "react";
import { styled } from "styled-components";

const CTABtn = () => {
  return (
    <Wrapper>
      <Text id="text">참여하기</Text>
    </Wrapper>
  );
};

export default CTABtn;

const Wrapper = styled.div`
  position: absolute;
  bottom: 100px;
  display: flex;
  width: 350px;
  height: 52px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: var(--key, #fd505b);
`;

const Text = styled.div`
  padding: 0;
  color: var(--white, #fbfbfb);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.18px;
`;
