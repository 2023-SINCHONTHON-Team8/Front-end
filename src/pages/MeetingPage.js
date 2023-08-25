import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import TapBar from "../components/TapBar";
import Post from "../components/Post";
import EndModal from "../components/EndModal";
import MenuBar from "../components/MenuBar";

const MeetingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper className="MeetingPage">
      <TapBar />
      <List>
        <Post />
        <Post />
        <Post />
      </List>
      <MenuBar />
      <EndModal isOpen={isModalOpen} onClose={closeModal} />
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
  height: 710px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
