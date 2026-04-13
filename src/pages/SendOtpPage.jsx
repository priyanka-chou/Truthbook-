import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const EmailScreen = ({ onBack, onNext }) => {

   const navigate = useNavigate();
  const location = useLocation();

  // ✅ Email auto receive from signup page
  const emailFromState = location.state?.email || "";

  const [email, setEmail] = useState(emailFromState);
  const [otp, setOtp] = useState("");

  
  
  
 

const handleSendOtp = async () => {
    console.log("Send OTP clicked");
    
  if (!email) {
    alert("Enter email first ❌");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    alert(data);

    navigate("/verify", { state: { email } });

  } catch (err) {
    console.log(err);
    alert("Error sending OTP ❌");
  }
};




  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#ddd" }}>
      <div style={{ width: 320, borderRadius: 36, boxShadow: "0 32px 80px rgba(100, 60, 180, 0.18), 0 2px 8px rgba(0,0,0,0.08)", overflow: "hidden", background: "#e8e4f0", position: "relative" }}>

        
        

        {/* Decorative top circle */}
        <div style={{ position: "absolute", top: -30, left: -50, width: 150, height: 150, borderRadius: "50%", background: "rgba(160,130,210,0.25)", zIndex: 0 }} />

        {/* Content */}
        <div style={{ padding: "20px 20px 28px", position: "relative", zIndex: 1 }}>

          {/* Logo */}
          <div style={{ textAlign: "center", margin: "24px 0 8px" }}>
            <h1 style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 34, color: "#1a1a1a", margin: 0, letterSpacing: 1 }}>
              TruthBook
            </h1>
            <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 13, color: "#888", margin: "6px 0 0" }}>
              Your truth. Your story.
            </p>
            <div style={{ width: 40, height: 2, background: "#7b5cbf", margin: "8px auto 0", borderRadius: 2 }} />
          </div>

          {/* Step dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 7, margin: "14px 0 24px" }}>
            {[false, true, false, false, false].map((active, i) => (
              <div key={i} style={{ width: active ? 32 : 22, height: 8, borderRadius: 4, background: active ? "#7b5cbf" : "rgba(160,130,210,0.35)" }} />
            ))}
          </div>

          {/* Heading */}
          <p style={{ fontSize: 16, fontWeight: 700, color: "#111", margin: "0 0 18px", letterSpacing: 1 }}>ENTER YOUR EMAIL</p>

          {/* Label */}
          <p style={{ fontSize: 11, fontWeight: 600, color: "#555", letterSpacing: 1, margin: "0 0 8px" }}>EMAIL ADDRESS</p>

          {/* Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane.doe@email.com"
            style={{
              width: "100%",
              boxSizing: "border-box",
              background: "#fff",
              border: "none",
              borderRadius: 20,
              padding: "16px 20px",
              fontSize: 13,
              fontStyle: "italic",
              color: "#333",
              outline: "none",
              marginBottom: 14,
            }}
          />

          {/* Info box */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "20px 18px", marginBottom: 24 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#6b48b8", margin: "0 0 6px" }}>i  Why we need this?</p>
            <p style={{ fontSize: 12, color: "#666", margin: 0, lineHeight: 1.5 }}>
              We'll send a one-time code to verify your identity and keep your account secure.
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
            <button
              onClick={onBack}
              style={{ width: 46, height: 46, borderRadius: "50%", background: "#fff", border: "none", fontSize: 18, cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              ←
            </button>
            <button
              onClick={handleSendOtp}
              style={{ flex: 1, background: "#9b7dd4", border: "none", borderRadius: 24, padding: "14px", fontSize: 15, fontWeight: 600, color: "#fff", cursor: "pointer" }}
            >
              Send OTP  →
            </button>
          </div>

          {/* Login link */}
          <p style={{ fontSize: 13, color: "#999", textAlign: "center", margin: 0 }}>
            Already have an account?{" "}
            <span style={{ color: "#6b48b8", fontWeight: 600, cursor: "pointer" }}>Log in</span>
          </p>
        </div>

        {/* Decorative bottom circle */}
        <div style={{ position: "absolute", bottom: -40, right: -40, width: 130, height: 130, borderRadius: "50%", background: "rgba(160,130,210,0.2)", zIndex: 0 }} />

       
      </div>
    </div>
  );
};

export default EmailScreen;