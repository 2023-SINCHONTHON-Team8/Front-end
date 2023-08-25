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
      {pathname === "/postdetail" ||
        ("/mypage/editprofile" && <img onClick={goBack} src={back} />)}
      {pathname === "/uploadpost" && (
        <Text_negative onClick={goBack}>취소</Text_negative>
      )}

      <Title>{titleText}</Title>
      {pathname === "/uploadpost" && (
        <Text_positive onClick={submit}>저장</Text_positive>
      )}
    </TopBar_Wrapper>
  );
};

export default TopBar;

const TopBar_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 390px;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-gray, #eceaea);
  background: var(--white, #fbfbfb);
  padding-left: 30px;
  padding-right: 30px;
`;

const Title = styled.div`
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
