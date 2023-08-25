import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import TopBar from "../components/TopBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TagButton from "../components/TagButton";
import plus from "../assets/icons/plus.svg";
import close from "../assets/icons/close.svg";

const UploadPostPage = () => {
  const submit = () => {
    console.log(`submit`);
  };
  const [startDate, setStartDate] = useState(new Date());
  const MoodData = ["#조용한 식사", "#ENFP모임", "#푸드파이터", "#소식클럽"];
  const [selectedMood, setSelectedMood] = useState("");
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const loadImg = (e) => {
    setImage(e.target.files[0]);
    const selectedImage = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
    reader.readAsDataURL(selectedImage);
    setImgSrc(selectedImage);
  };

  const removeImage = () => {
    setImage("");
    setImgSrc("");
  };

  const FoodData = [
    "#한식",
    "#일식",
    "#양식",
    "#중식",
    "#세계음식",
    "#뷔페",
    "#카페",
    "#주점",
  ];
  const LocationData = [
    "#인스타감성",
    "#이지역터줏대감",
    "#신상핫플",
    "# 나만아는곳",
  ];

  return (
    <Wrapper>
      <TopBar submit={submit} />
      <ScrollBox>
        <Container>
          <Title>모임 이름</Title>
          <InputBox placeholder="모임을 잘 나타내는 이름을 지어주세요 (최대 20자)" />
        </Container>

        <Container>
          <Title>한줄 소개</Title>
          <InputBoxLarge placeholder="모임을 간단히 설명해 주세요 (최대 70자)" />
        </Container>

        <Container>
          <Title>오픈 채팅방 링크</Title>
          <InputBox placeholder="참여자들과 소통할 오픈채팅방 링크를 입력해주세요" />
        </Container>

        <Container>
          <Title>인원</Title>
          <div>
            <SelectBox placeholder="몇 명이 참여하는 모임인가요?">
              <option>선택1</option>
              <option>선택2</option>
            </SelectBox>
          </div>
        </Container>

        <Container>
          <Title>날짜</Title>
          <SDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholder="언제 만나는 일정인가요?"
          />
        </Container>

        <Container>
          <Title>장소</Title>
          <SelectBox placeholder="장소를 선택해주세요">
            <option>선택1</option>
            <option>선택2</option>
          </SelectBox>
        </Container>

        <Container>
          <Title>모임 분위기</Title>
          <TagWrapper>
            {MoodData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedMood === data ? "default" : "disabled"}
                onClick={() => setSelectedMood(data)}
              />
            ))}
          </TagWrapper>
        </Container>

        <Container>
          <Title>음식 종류</Title>
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
        </Container>

        <Container>
          <Title>장소 타입</Title>
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
        </Container>

        <Container>
          <Title>대표 사진(선택)</Title>
          <ImgContainer>
            <UploadImg>
              <img
                id="uploadImgBtn"
                src={plus}
                alt="Add Art"
                onClick={() => inputRef.current.click()}
              />
              <input
                type="file"
                ref={inputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e) => loadImg(e)}
              />
              {image && <img id="uploadedImg" src={imgSrc} />}
              {image && <img id="delImg" onClick={removeImage} src={close} />}
            </UploadImg>
          </ImgContainer>
        </Container>
      </ScrollBox>
    </Wrapper>
  );
};

export default UploadPostPage;

const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  width: 295px;
  height: 170px;
  border-radius: 20px;
  font-size: 40px;
  border: 1px dashed #ffa5aa;
  color: #ffa5aa;
  margin-bottom: 20px;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 170px;
`;
const UploadImg = styled.div`
  display: flex;
  width: 320px;
  height: 170px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px dashed #ffa5aa;
  #uploadedImg {
    position: absolute;
    width: 101%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    z-index: 5;
  }
  #delImg {
    position: absolute;
    top: 10px;
    right: 0px;
    z-index: 10;
  }
`;

const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
`;

const ScrollBox = styled.div`
  height: 740px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TagWrapper = styled.div`
  padding-left: 20px;
  width: 320px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const InputBox = styled.input`
  border-radius: 40px;
  border: 1px solid var(--light-gray, #eceaea);
  width: 295px;
  height: 30px;
  padding: 17px 24px;

  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

const InputBoxLarge = styled.textarea`
  border-radius: 40px;
  border: 1px solid var(--light-gray, #eceaea);
  width: 295px;
  height: 100px;
  padding: 17px 24px;
  resize: none;
  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

const SelectBox = styled.select`
  appearance: none; /* 브라우저 스타일 무시 */
  border-radius: 40px;
  border: 1px solid var(--light-gray, #eceaea);
  width: 345px;
  height: 60px;
  padding: 17px 24px;
  padding-right: 30px;

  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-left: 20px;
`;

const SDatePicker = styled(DatePicker)`
  border-radius: 40px;
  border: 1px solid var(--light-gray, #eceaea);
  width: 295px;
  height: 30px;
  padding: 17px 24px;

  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
