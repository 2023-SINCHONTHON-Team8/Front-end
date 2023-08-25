import React from "react";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import back from "../assets/icons/back.svg";

const TopBar = (submit = {}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  let titleText = "";

  if (pathname === "/postdetail") titleText = "모임 상세";
  else if (pathname === "/uploadpost") titleText = "새 모임 등록";

  return (
    <TopBar_Wrapper>
      {pathname === "/postdetail" && <img onClick={goBack} src={back} />}
      {pathname === "/uploadpost" && (
        <Upload_Wrapper>
          <Text_negative onClick={goBack}>취소</Text_negative>
          <Text_positive onClick={submit}>저장</Text_positive>
        </Upload_Wrapper>
      )}
      <Title>{titleText}</Title>
    </TopBar_Wrapper>
  );
};

export default TopBar;

const TopBar_Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 330px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--light-gray, #eceaea);
  background: var(--white, #fbfbfb);
  padding-left: 30px;
  padding-right: 30px;
  img {
    position: absolute;
    left: 10px;
  }
`;

const Title = styled.div`
  z-index: 20;
  color: var(--black, #292525);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

const Text_negative = styled.div`
  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
`;

const Text_positive = styled.div`
  color: var(--key, #fd505b);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
`;

const Upload_Wrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 330px;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-gray, #eceaea);
  background: var(--white, #fbfbfb);
  padding-left: 30px;
  padding-right: 30px;
  z-index: 10;
`;
