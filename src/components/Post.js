import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import divBar from "../assets/icons/divBar.svg";
import mapPin from "../assets/icons/mapPin.svg";
import profileTest from "../assets/images/profileTest.jpg";
import postTest from "../assets/images/postTest.jpg";
import Tag from "./Tag";

const Post = () => {
  const navigate = useNavigate();

  const moveDetail = () => {
    navigate("/postdetail");
  };

  return (
    <Wrapper onClick={moveDetail}>
      <Image id="postImg" src={postTest}></Image>
      <Info>
        <TextBox>
          <People>
            <Writer id="writer">
              <img src={profileTest} />
              <span>김멋사</span>
            </Writer>
            <img src={divBar} />
            <span id="people">5/6</span>
          </People>
          <Detail>
            <span id="time">2023/08/25</span>
            <Place>
              <img src={mapPin} />
              <span id="place">라트라비아타</span>
            </Place>
          </Detail>
          <Title id="title">브런치 먹을 사람 모여라</Title>
        </TextBox>
        <TagBox>
          <Tag text="#ENFP모임" />
          <Tag text="#양식" />
          <Tag text="#인스타감성" />
        </TagBox>
      </Info>
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 350px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.08);
`;

const Image = styled.img`
  width: 350px;
  height: 134px;
  border-radius: 20px 20px 0px 0px;
  background: lightgray 50%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  padding: 12px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 0px 0px 20px 20px;
  background: var(--white, #fbfbfb);
`;

const People = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--black, #292525);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 152.872%;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const Writer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    object-fit: cover;
  }
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  #time {
    color: var(--black, #292525);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 152.872%;
  }
`;

const Place = styled.div`
  gap: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 152.872%;
`;

const Title = styled.div`
  color: var(--black, #292525);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 152.872%;
`;

const TagBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;
