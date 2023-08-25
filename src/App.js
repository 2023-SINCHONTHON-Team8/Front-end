import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostPage from "./pages/PostPage";
import UploadPostPage from "./pages/UploadPostPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/postdetail" element={<PostDetailPage />} />
          <Route path="/" element={<PostPage />} />
          <Route path="/uploadpost" element={<UploadPostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
