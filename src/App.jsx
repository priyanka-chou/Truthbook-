import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OtpVerifyPage from "./pages/OtpVerifyPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>

        {/* Root */}
        <Route path="/" element={token ? <HomePage /> : <LoginPage />} />

        {/* OTP */}
        <Route path="/verify" element={<OtpVerifyPage />} />

        {/* 🔐 Protected Home */}
        <Route 
          path="/home" 
          element={token ? <HomePage /> : <Navigate to="/" />} 
        />

        {/* 🔐 Protected Profile */}
        <Route 
          path="/profile" 
          element={token ? <ProfilePage /> : <Navigate to="/" />} 
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;