import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import CTABtn from "../components/CTABtn";

const EditProfilePage = () => {
  return (
    <Wrapper>
      <TopBar />
      <Title>회원정보 수정</Title>
      <EditName>
        <p>닉네임</p>
        <input placeholder="닉네임을 입력해주세요 (최대 10자)" />
      </EditName>
      <EditGender>
        <p>성별</p>
        <SelectBox>
          <button id="male">남</button>
          <button id="female">여</button>
        </SelectBox>
      </EditGender>
      <CTABtn text="저장하기" />
    </Wrapper>
  );
};

export default EditProfilePage;

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  background: var(--white, #fbfbfb);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 32px;
`;

const Title = styled.div`
  width: 350px;
  color: var(--black, #292525);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 152.872%;
  letter-spacing: -0.48px;
`;

const EditName = styled.div`
  width: 350px;
  gap: 16px;
  p {
    color: var(--black, #292525);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 152.872%;
  }
  input {
    display: flex;
    width: 302px;
    height: 14px;
    padding: 17px 24px;
    align-items: center;
    border-radius: 40px;
    border: 1px solid var(--light-gray, #eceaea);
    outline: none;
  }
`;

const EditGender = styled.div`
  width: 350px;
  gap: 16px;
  p {
    color: var(--black, #292525);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 152.872%;
  }
`;

const SelectBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  button {
    display: flex;
    height: 48px;
    padding: 17px 20px;
    align-items: center;
    justify-content: center;
    flex: 1 0 0;
    background-color: transparent;
    border-radius: 40px;
    border: 1px solid var(--gray, #989292);
    color: var(--gray, #989292);
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.18px;
  }
`;
