import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OtpVerifyPage from "./pages/OtpVerifyPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import SendOtpPage from "./pages/SendOtpPage"; 

import  MessagePage from "./pages/MessagePage"; 

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={token ? <HomePage /> : <LoginPage />} />

        {/* ✅ Send OTP page */}
        <Route path="/send-otp" element={<SendOtpPage />} />

        {/* OTP verify */}
        <Route path="/verify" element={<OtpVerifyPage />} />

        {/* Profile */}
        <Route 
          path="/profile" 
          element={token ? <ProfilePage /> : <Navigate to="/" />} 
        />

            <Route path="/messages" element={<MessagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;