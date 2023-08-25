import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import home from "../assets/icons/home.svg";
import homeClicked from "../assets/icons/homeClicked.svg";
import New from "../assets/icons/new.svg";
import newClicked from "../assets/icons/newClicked.svg";
import join from "../assets/icons/join.svg";
import joinClicked from "../assets/icons/joinClicked.svg";
import myInfo from "../assets/icons/myInfo.svg";
import myInfoClicked from "../assets/icons/myInfoClicked.svg";

const MenuBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [homeSrc, setHomeSrc] = useState(homeClicked);
  const [newSrc, setNewSrc] = useState(New);
  const [joinSrc, setJoinSrc] = useState(join);
  const [myInfoSrc, setMyInfoSrc] = useState(myInfo);
  const [activeTab, setActiveTab] = useState("");

  const goHome = () => {
    navigate("/");
  };

  const goNew = () => {
    navigate("/uploadpost");
  };

  const goMeeting = () => {
    navigate("/meetinglist");
  };

  const goMy = () => {
    navigate("/mypage");
  };

  useEffect(() => {
    setHomeSrc(pathname === "/" ? homeClicked : home);
    setNewSrc(pathname === "/uploadpost" ? newClicked : New);
    setJoinSrc(pathname === "/meetinglist" ? joinClicked : join);
    setMyInfoSrc(pathname === "/mypage" ? myInfoClicked : myInfo);
    setActiveTab(pathname);
  }, [pathname]);

  console.log(activeTab);

  return (
    <Wrapper>
      <Btn id="home" onClick={goHome} active={activeTab === "/"}>
        <img src={homeSrc} />
        <span>홈</span>
      </Btn>
      <Btn id="new" onClick={goNew} active={activeTab === "/uploadpost"}>
        <img src={newSrc} />
        <span>새 모임</span>
      </Btn>
      <Btn id="join" onClick={goMeeting} active={activeTab === "/meetinglist"}>
        <img src={joinSrc} />
        <span>참여 모임</span>
      </Btn>
      <Btn id="my" onClick={goMy} active={activeTab === "/mypage"}>
        <img src={myInfoSrc} />
        <span>내 정보</span>
      </Btn>
    </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  position: absolute;
  top: 754px;
  display: flex;
  width: 350px;
  height: 90px;
  padding: 0px 20px 0px 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--light-gray, #eceaea);
  background: var(--white, #fbfbfb);
`;

const Btn = styled.div`
  display: flex;
  width: 60px;
  height: 56px;
  padding-top: 4px;
  padding-bottom: 34px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  span {
    color: ${({ active }) =>
      active ? "var(--key, #FD505B)" : "var(--black, #292525)"};
    text-align: center;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
`;
