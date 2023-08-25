import React, { useState, useCallback } from "react";
import { styled } from "styled-components";
import CTABtn from "../components/CTABtn";
import CertModal from "../components/CertModal";
import TagButton from "../components/TagButton";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";

const SignupFavor = () => {
  const [page, setPage] = useState(1);
  const [selectedMood, setSelectedMood] = useState("");
  const navigate = useNavigate();

  const FoodData = [
    "한식",
    "일식",
    "양식",
    "중식",
    "세계음식",
    "뷔페",
    "카페",
    "주점",
  ];
  const LocationData = [
    "인스타감성",
    "이지역터줏대감",
    "신상핫플",
    "나만아는곳",
  ];
  const FavorData = ["민초", "고수", "마라", "하와이안피자", "오이"];
  const HotData = ["1", "2", "3", "4", "5"];
  return (
    <Wrapper>
      <TopBar />
      <Title>취향을 알려주세요({page}/2)</Title>
      <SubTitle>더 정확한 모임을 추천 받을 수 있어요</SubTitle>
      {page === 1 && (
        <>
          <Text>좋아하는 음식 종류</Text>
          <TagWrapper>
            {FoodData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedMood === data ? "default" : "disabled"}
                onClick={() => setSelectedMood(data)}
              />
            ))}
          </TagWrapper>

          <Text>선호하는 식당 타입</Text>
          <TagWrapper>
            {LocationData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedMood === data ? "default" : "disabled"}
                onClick={() => setSelectedMood(data)}
              />
            ))}
          </TagWrapper>
          <CTABtn
            onClick={(e) => {
              setPage(2);
            }}
            text="다음으로"
          />
        </>
      )}
      {page === 2 && (
        <>
          <Text>맵부심 지수</Text>
          <SubTitle>매운 걸 잘 먹을수록 큰 숫자를 선택해주세요</SubTitle>
          <TagWrapper>
            {HotData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedMood === data ? "default" : "disabled"}
                onClick={() => setSelectedMood(data)}
              />
            ))}
          </TagWrapper>

          <Text>호불호 음식 취향</Text>
          <SubTitle>더운 음식 중 좋아하는 음식이 있나요?</SubTitle>
          <TagWrapper>
            {FavorData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedMood === data ? "default" : "disabled"}
                onClick={() => setSelectedMood(data)}
              />
            ))}
          </TagWrapper>

          <CTABtn
            onClick={(e) => {
              navigate("/");
            }}
            text="회원가입 완료"
          />
        </>
      )}
    </Wrapper>
  );
};

export default SignupFavor;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  color: var(--black, #292525);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;

  margin-left: 20px;
`;

const SubTitle = styled.div`
  color: var(--gray, #989292);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  margin-left: 20px;
`;

const TagWrapper = styled.div`
  padding-left: 20px;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Text = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
`;
