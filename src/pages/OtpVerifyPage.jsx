import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function VerifyPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Email auto receive from signup page
  const emailFromState = location.state?.email || "";

  const [email, setEmail] = useState(emailFromState);
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, otp })
      });

      const data = await res.json();

      // ✅ success check (correct way)
      if (data.success) {
        alert("OTP Verified Successfully ✅");

        // 🔥 अगर backend token दे तो auto login
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/home");
        } else {
          // नहीं तो login page
          navigate("/");
        }

      } else {
        alert(data.message || "Invalid OTP ❌");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong ⚠️");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>

      {/* ✅ Email (auto-filled) */}
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      {/* OTP */}
      <input
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <br />

      <button onClick={handleVerify}>Verify</button>
    </div>
  );
}