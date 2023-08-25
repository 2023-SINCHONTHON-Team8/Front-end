import React, { useState } from "react";
import { styled } from "styled-components";

import TapBar from "../components/TapBar";
import Post from "../components/Post";
import MenuBar from "../components/MenuBar";

const MeetingPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <Wrapper className="MeetingPage">
      <TapBar />
      <List>
        <Post />
        <Post />
        <Post />
      </List>
      <MenuBar />
    </Wrapper>
  );
};

export default MeetingPage;

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  background: var(--white, #fbfbfb);
  margin: auto;
`;

const List = styled.div`
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
