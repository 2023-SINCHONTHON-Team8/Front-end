import MenuBar from "../components/MenuBar";
import Modal from "../components/Modal";
import React, { useState, useCallback } from "react";

const PostPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="PostPage">
      메인 페이지
      <button onClick={openModal}>모달 열기</button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          이곳에 children이 들어갑니다.
        </Modal>
      )}
      <MenuBar />
    </div>
  );
};

export default PostPage;
