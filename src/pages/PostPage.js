import React from "react";
import { styled } from "styled-components";

import MenuBar from "../components/MenuBar";
import Post from "../components/Post";
import MainTopBar from "../components/MainTopBar";

const PostPage = () => {
  return (
    <Wrapper className="PostPage">
      <MainTopBar />
      <PostList>
        <Post />
        <Post />
        <Post />
      </PostList>
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
