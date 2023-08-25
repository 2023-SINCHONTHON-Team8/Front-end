import React, { useState, useCallback } from "react";
import { styled } from "styled-components";
import CTABtn from "../components/CTABtn";
import CertModal from "../components/CertModal";

const SignupPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClickHandler = () => {
    console.log("다음");
    setIsModalOpen(true);
  };
  return (
    <SignupWrapper>
      <h1>회원정보 입력</h1>

      <SubTitle>학교 이메일 인증</SubTitle>
      <InputBox placeholder="babmate@university.ac.kr" />

      <SubTitle>닉네임</SubTitle>
      <InputBox placeholder="닉네임을 입력해주세요(최대10자)" />

      <SubTitle>비밀번호</SubTitle>
      <InputBox placeholder="영문 대소문자, 특수문자 포함, 8자 이상" />

      <SubTitle>비밀번호 확인</SubTitle>
      <InputBox placeholder="비밀번호를 다시 입력해주세요" />

      <SubTitle>성별</SubTitle>
      <GenderWrapper>
        <GenderBut>남</GenderBut>
        <GenderBut>여</GenderBut>
      </GenderWrapper>

      <CTABtn text="다음으로" onClick={onClickHandler} />

      {isModalOpen && (
        <CertModal isOpen={isModalOpen} onClose={closeModal}></CertModal>
      )}
    </SignupWrapper>
  );
};

export default SignupPage;

const GenderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
const GenderBut = styled.button`
  width: 170px;
  height: 48px;
  padding: 17px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  border: 1px solid var(--gray, #989292);

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  margin-left: 10px;
`;

const SignupWrapper = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin-left: 10px;
  padding-right: 20px;
`;

const SubTitle = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-left: 10px;
`;

const InputBox = styled.input`
  border-radius: 40px;
  border: 1px solid var(--light-gray, #eceaea);
  width: 330px;
  height: 30px;
  padding: 17px 24px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;

  color: var(--gray, #989292);
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
