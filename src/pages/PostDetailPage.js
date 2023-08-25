import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../components/TopBar";
import postTest from "../assets/images/postTest.jpg";
import divBar from "../assets/icons/divBar.svg";
import mapPin from "../assets/icons/mapPin.svg";
import profileTest from "../assets/images/profileTest.jpg";
import Tag from "../components/Tag";
import CTABtn from "../components/CTABtn";
import CTAdelBtn from "../components/CTAdelBtn";

const PostDetailPage = () => {
  const navigate = useNavigate();

  const [showCTAdelBtn, setShowCTAdelBtn] = useState(false);

  const handleCTABtnClick = () => {
    setShowCTAdelBtn(true);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper className="PostDetailPage">
      <TopBar />
      <Image src={postTest}></Image>
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
          <Tag text="#인스타감" />
        </TagBox>
      </Info>
      <Content>
        성수동 라트라비아타에서 브런치 같이 먹을 사람들 구합니다~ <br />
        아침 일찍 만나려고 하는데 자세한 시간은 협의해서 정해요 :)
      </Content>
      <Members>
        <span>참여 멤버</span>
        <List>
          <People>
            <Writer id="writer">
              <img src={profileTest} />
              <span>김멋사</span>
            </Writer>
          </People>
          <People>
            <Writer id="writer">
              <img src={profileTest} />
              <span>김멋사</span>
            </Writer>
          </People>
          <People>
            <Writer id="writer">
              <img src={profileTest} />
              <span>김멋사</span>
            </Writer>
          </People>
          <People>
            <Writer id="writer">
              <img src={profileTest} />
              <span>김멋사</span>
            </Writer>
          </People>
          <People>
            <Writer id="writer">
              <img src={profileTest} />
              <span>김멋사</span>
            </Writer>
          </People>
        </List>
      </Members>
      {showCTAdelBtn ? (
        <CTAdelBtn onClick={goBack} />
      ) : (
        <CTABtn text="참여하기" onClick={handleCTABtnClick} />
      )}
    </Wrapper>
  );
};

export default PostDetailPage;

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  background: var(--white, #fbfbfb);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 390px;
  height: 190px;
  margin-bottom: 10px;
  flex-shrink: 0;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  width: 350px;
  padding: 12px 20px 20px 16px;
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

const Content = styled.div`
  width: 350px;
  color: var(--black, #292525);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 152.872%;
`;

const Members = styled.div`
  margin-top: 20px;
  width: 310px;
  display: inline-flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  border: 1px solid var(--light-gray, #eceaea);
  gap: 12px;
  span {
    color: var(--black, #292525);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 152.872%;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
