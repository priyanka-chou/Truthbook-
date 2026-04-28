import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";



export default function TruthBookOTP() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

   useEffect(() => {
  if (!email) {
    navigate("/");
  }
}, []);
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(59);
  const [canResend, setCanResend] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRefs = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    inputRefs.current[0]?.focus();
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  function startTimer() {
    clearInterval(timerRef.current);
    setSeconds(59);
    setCanResend(false);
    timerRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) { clearInterval(timerRef.current); setCanResend(true); return 0; }
        return prev - 1;
      });
    }, 1000);
  }

  function formatTime(s) {
    return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  }

  function handleChange(val, i) {
    const clean = val.replace(/\D/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[i] = clean;
    setOtp(newOtp);
    if (clean && i < 5) inputRefs.current[i + 1]?.focus();
  }

  function handleKeyDown(e, i) {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      const newOtp = [...otp];
      newOtp[i - 1] = "";
      setOtp(newOtp);
      inputRefs.current[i - 1]?.focus();
    }
  }

  function handlePaste(e) {
    const paste = e.clipboardData.getData("text").replace(/\D/g, "");
    if (paste.length >= 6) {
      setOtp(paste.slice(0, 6).split(""));
      inputRefs.current[5]?.focus();
      e.preventDefault();
    }
  }


 


 const handleVerify = async () => {
  const finalOtp = otp.join("");

  if (finalOtp.length !== 6) {
    alert("Enter complete OTP ❌");
    return;
  }

  setVerifying(true);

  try {
    const res = await fetch("https://truthbookserver-iipd.onrender.com/api/auth/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, otp: finalOtp })
    });

    const data = await res.json(); // ✅ FIX

    if (data.success) {
      setSuccess(true);

      // 🔥 auto login
      localStorage.setItem("token", data.token);

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

    } else {
      alert(data.message);
      setVerifying(false);
    }

  } catch (err) {
    console.log(err);
    alert("Error ❌");
    setVerifying(false);
  }
};

  const handleResend = async () => {
    if (!canResend) return;

    try {
      await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      startTimer();
      setOtp(["", "", "", "", "", ""]);

    } catch (err) {
      console.log(err);
    }
  };

  const allFilled = otp.every((v) => v.length === 1);

  return (
    <div style={{ minHeight: "100vh", background: "#e8e4f0", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .otp-input {
          width: 42px; height: 42px; border: none; border-radius: 10px;
          background: #ddd6f0; text-align: center; font-size: 17px;
          font-weight: 700; color: #2d1a5e; font-family: 'DM Sans', sans-serif;
          caret-color: #7c4dbe; outline: none; transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(100,60,180,0.08);
        }
        .otp-input:focus {
          background: #fff;
          box-shadow: 0 0 0 2px #7c4dbe, 0 4px 12px rgba(100,60,180,0.15);
          transform: translateY(-2px);
        }
        .otp-input.filled { background: #f0ebff; box-shadow: 0 0 0 1.5px #a98dd4; }

        .verify-btn {
          flex: 1; height: 48px; border: none; border-radius: 24px;
          background: linear-gradient(135deg, #7c4dbe 0%, #5a3fa0 100%);
          color: #fff; font-size: 14px; font-weight: 600;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
          transition: all 0.25s; box-shadow: 0 6px 20px rgba(100,60,180,0.35);
        }
        .verify-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(100,60,180,0.4); }
        .verify-btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }

        .back-btn {
          width: 42px; height: 42px; border-radius: 50%; border: none;
          background: #ddd6f0; color: #5a3fa0; font-size: 15px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s; flex-shrink: 0;
        }
        .back-btn:hover { background: #cdc0e8; transform: scale(1.06); }

        .resend-btn { background: none; border: none; font-size: 12px; color: #b0a0d0; cursor: not-allowed; font-family: 'DM Sans', sans-serif; font-weight: 500; }
        .resend-btn.active { color: #7c4dbe; cursor: pointer; text-decoration: underline; }

        @keyframes pop { 0%{transform:scale(0.5)} 70%{transform:scale(1.1)} 100%{transform:scale(1)} }
        .checkmark-anim { animation: pop 0.4s cubic-bezier(.36,.07,.19,.97); }
      `}</style>

      <div style={{ width: 360, minHeight: 560, background: "#f0edf8", borderRadius: 36, padding: "36px 28px 32px", position: "relative", boxShadow: "0 24px 64px rgba(100,60,180,0.18), 0 4px 16px rgba(0,0,0,0.08)", overflow: "hidden" }}>
        {/* Blobs */}
        <div style={{ position: "absolute", width: 120, height: 120, top: -30, left: -30, borderRadius: "50%", background: "rgba(180,160,230,0.32)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 80, height: 80, top: 20, right: -20, borderRadius: "50%", background: "rgba(200,185,240,0.25)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 60, height: 60, bottom: 60, right: -10, borderRadius: "50%", background: "rgba(160,130,220,0.18)", pointerEvents: "none" }} />

        {/* Brand */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, color: "#2d1a5e", letterSpacing: "-0.5px" }}>TruthBook</div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", fontSize: 12, color: "#8b6db5", marginTop: 2 }}>Your truth. Your story.</div>
          <div style={{ width: 40, height: 2, background: "#7c4dbe", margin: "10px auto 0", borderRadius: 2 }} />
        </div>

        {/* Progress */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 28 }}>
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} style={{ height: 5, borderRadius: 3, width: i === 2 ? 32 : 24, background: i < 2 ? "#a98dd4" : i === 2 ? "#7c4dbe" : "#cdc0e8" }} />
          ))}
        </div>

        {/* Title */}
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1.5px", color: "#2d1a5e", textTransform: "uppercase", marginBottom: 6 }}>Enter OTP</div>
        <div style={{ fontSize: 12, color: "#8b6db5", marginBottom: 12 }}>Code sent to your email</div>
        <div style={{ fontSize: 13, color: "#5a3fa0", fontWeight: 500, background: "#e4deef", display: "inline-block", padding: "4px 10px", borderRadius: 20, marginBottom: 20 }}>
          ✉ {email}
        </div>

        {/* OTP Label */}
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase", color: "#8b6db5", marginBottom: 10 }}>One-Time Password</div>

        {/* OTP Inputs — 42×42 chhote boxes */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16, justifyContent: "center" }} onPaste={handlePaste}>
          {otp.map((val, i) => (
            <input
              key={i}
              ref={el => inputRefs.current[i] = el}
              className={`otp-input${val ? " filled" : ""}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={val}
              onChange={e => handleChange(e.target.value, i)}
              onKeyDown={e => handleKeyDown(e, i)}
            />
          ))}
        </div>

        {/* Timer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontSize: 12, color: "#8b6db5" }}>
            Expires in <span style={{ fontSize: 13, fontWeight: 600, color: "#7c4dbe" }}>{formatTime(seconds)}</span>
          </span>
          <button className={`resend-btn${canResend ? " active" : ""}`} onClick={handleResend}>Resend code</button>
        </div>

        {/* Info Box */}
        <div style={{ background: "#ede8fb", borderRadius: 14, padding: "12px 14px", marginBottom: 20, borderLeft: "3px solid #7c4dbe" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#7c4dbe", marginBottom: 3 }}>ℹ Didn't get the code?</div>
          <div style={{ fontSize: 11.5, color: "#6b5290", lineHeight: 1.5 }}>Check your spam/junk folder, or click Resend after the timer expires.</div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
         <button className="back-btn" onClick={() => navigate("/")}>
  ←
</button>
          <button className="verify-btn" disabled={!allFilled || verifying} onClick={handleVerify}>
            {verifying && !success ? "Verifying..." : "Verify OTP →"}
          </button>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", fontSize: 12, color: "#9a86bc" }}>
          Already have an account? <a href="#" style={{ color: "#7c4dbe", fontWeight: 600, textDecoration: "none" }}>Log in</a>
        </div>

        {/* Success Overlay */}
        {success && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(240,237,248,0.96)", borderRadius: 36, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <div className="checkmark-anim" style={{ width: 72, height: 72, background: "linear-gradient(135deg,#7c4dbe,#5a3fa0)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, marginBottom: 20, color: "#fff", boxShadow: "0 10px 28px rgba(100,60,180,0.3)" }}>✓</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: "#2d1a5e", marginBottom: 8 }}>Verified!</div>
            <div style={{ fontSize: 13, color: "#8b6db5", textAlign: "center", padding: "0 20px" }}>Your email has been confirmed. Welcome to TruthBook 💜</div>
          </div>
        )}
      </div>
    </div>
  );
}