import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostPage from "./pages/PostPage";
import UploadPostPage from "./pages/UploadPostPage";
import SignupPage from "./pages/SignupPage";
import MeetingPage from "./pages/MeetingPage";
import EditProfilePage from "./pages/EditProfilePage";
import SignupFavor from "./pages/SignupFavor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup/favor" element={<SignupFavor />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/postdetail" element={<PostDetailPage />} />
          <Route path="/" element={<PostPage />} />
          <Route path="/uploadpost" element={<UploadPostPage />} />
          <Route path="/meetinglist" element={<MeetingPage />} />
          <Route path="/mypage/editprofile" element={<EditProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
