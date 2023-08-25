import React, { useState, useCallback } from "react";
import { styled } from "styled-components";

import MenuBar from "../components/MenuBar";
import Post from "../components/Post";
import MainTopBar from "../components/MainTopBar";
import Modal from "../components/Modal";

const PostPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper className="PostPage">
      <MainTopBar openModal={openModal} />
      <PostList>
        <Post />
        <Post />
        <Post />
      </PostList>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          Modal Test
        </Modal>
      )}
      <MenuBar />
    </Wrapper>
  );
};

export default PostPage;

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  background: var(--white, #fbfbfb);
  margin: auto;
`;

const PostList = styled.div`
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
