import React from "react";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import back from "../assets/icons/back.svg";

const TopBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  let titleText = "";

  if (pathname === "/postdetail") titleText = "모임 상세";
  else if (pathname === "/uploadpost") titleText = "새 모임 등록";

  return (
    <Wrapper>
      {pathname === "/postdetail" && <img onClick={goBack} src={back} />}
      <Title>{titleText}</Title>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  position: absolute;
  top: 47px;
  display: flex;
  width: 390px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--light-gray, #eceaea);
  background: var(--white, #fbfbfb);
  img {
    position: absolute;
    left: 18px;
  }
`;

const Title = styled.div`
  color: var(--black, #292525);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 152.872%;
`;
