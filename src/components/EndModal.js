import React from "react";
import { styled } from "styled-components";

import bad from "../assets/icons/bad.svg";
import soso from "../assets/icons/soso.svg";
import good from "../assets/icons/good.svg";

const EndModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <DialogBox>
        <Content>
          <p>모임은 어떠셨나요?</p>
          <SelectBtn>
            <Btn>
              <img src={bad} />
              <p>별로였어요</p>
            </Btn>
            <Btn>
              <img src={soso} />
              <p>괜찮았어요</p>
            </Btn>
            <Btn>
              <img src={good} />
              <p>좋았어요</p>
            </Btn>
          </SelectBtn>
          <button onClick={onClose}>확인</button>
        </Content>
      </DialogBox>
      <Backdrop onClick={onClose} />
    </ModalContainer>
  );
};

export default EndModal;

const ModalContainer = styled.div`
  position: absolute;
  top: 250px;
  z-index: 10;
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DialogBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 600px;
  padding: 50px 20px 0px 20px;
  background-color: white;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  z-index: 10000;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  p {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.2px;
  }
  button {
    display: flex;
    width: 114px;
    height: 48px;
    padding: 17px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: var(--key, #fd505b);
    border: none;
    color: var(--white, #fbfbfb);
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.18px;
  }
`;

const SelectBtn = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  img {
    width: 56px;
    height: 56px;
  }
  p {
    color: var(--black, #292525);
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 152.872%;
  }
`;
