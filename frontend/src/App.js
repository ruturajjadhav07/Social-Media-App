import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./Component/User/UserLogin";
import UserSignup from "./Component/User/UserSignup";
import UserPost from "./Component/UserPost/UserPost";
import UserCreatePost from "./Component/UserPost/UserCreatePost";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/posts" element={<UserPost />} />
          <Route path="/posts/createpost" element={<UserCreatePost />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
