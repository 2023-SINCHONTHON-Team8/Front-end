import React from "react";
import styled from "styled-components";
import TagButton from "./TagButton";

const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <DialogBox>
        <Header>
          <span id="esc" onClick={onClose}>
            취소
          </span>
          <span id="apply" onClick={onClose}>
            적용
          </span>
        </Header>
        <Select id="people">
          <span>인원</span>
          <SelectBox>
            <TagButton text="2명" type="disabled" />
            <TagButton text="3~4명" type="disabled" />
            <TagButton text="5~6명" type="disabled" />
            <TagButton text="7명 이상" type="disabled" />
          </SelectBox>
        </Select>
        <Select>
          <span>모임 분위기</span>
          <SelectBox>
            <TagButton text="#조용한식사" type="disabled" />
            <TagButton text="#ENFP모임" type="disabled" />
            <TagButton text="#푸드파이터" type="disabled" />
            <TagButton text="#소식클럽" type="disabled" />
          </SelectBox>
        </Select>
        <Select>
          <span>음식 종류</span>
          <SelectBox>
            <TagButton text="#한식" type="disabled" />
            <TagButton text="#일식" type="disabled" />
            <TagButton text="#양식" type="disabled" />
            <TagButton text="#중식" type="disabled" />
            <TagButton text="#세계음식" type="disabled" />
            <TagButton text="#뷔페" type="disabled" />
            <TagButton text="#카페" type="disabled" />
            <TagButton text="#주점" type="disabled" />
          </SelectBox>
        </Select>
        <Select>
          <span>장소 타입</span>
          <SelectBox>
            <TagButton text="#인스타감성" type="disabled" />
            <TagButton text="#이지역터줏대감" type="disabled" />
            <TagButton text="#신상핫플" type="disabled" />
            <TagButton text="#나만아는곳" type="disabled" />
          </SelectBox>
        </Select>
      </DialogBox>
      <Backdrop onClick={onClose} />
    </ModalContainer>
  );
};

export default FilterModal;

const ModalContainer = styled.div`
  position: absolute;
  top: 250px;
  z-index: 10;
  width: 390px;
  display: flex;
  flex-direction: column;
`;

const DialogBox = styled.div`
  position: relative;
  width: 390px;
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

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 350px;
  height: 22px;
  padding: 9px 20px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid var(--light-gray, #eceaea);
  background: var(--white, #fbfbfb);
  #esc {
    color: var(--gray, #989292);
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 152.872%;
  }
  #apply {
    color: var(--key, #fd505b);
    text-align: right;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 152.872%;
  }
`;

const Select = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 15px 0px;
  span {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.16px;
  }
`;

const SelectBox = styled.div`
  display: flex;
  width: 320px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 20px;
`;
