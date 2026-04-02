



import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #f0edf8;
    --surface: #ffffff;
    --primary: #c4a8e0;
    --primary-dark: #9b72c8;
    --text-dark: #2d1f4e;
    --text-mid: #7a6a99;
    --text-light: #b8a9d4;
    --border: #ddd6f0;
    --shadow: rgba(155, 114, 200, 0.18);
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .phone-frame {
    width: 375px;
    min-height: 720px;
    background: var(--surface);
    border-radius: 44px;
    box-shadow: 0 32px 80px rgba(100, 60, 180, 0.18), 0 2px 8px rgba(0,0,0,0.08);
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  /* Soft background texture */
  .phone-frame::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 80% 10%, rgba(196,168,224,0.25) 0%, transparent 55%),
      radial-gradient(ellipse at 15% 90%, rgba(155,114,200,0.12) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  .status-bar {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 28px 0;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-dark);
  }

  .status-icons {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .content {
    position: relative;
    z-index: 1;
    flex: 1;
    padding: 36px 28px 40px;
    display: flex;
    flex-direction: column;
  }

  .brand-area {
    margin-bottom: 44px;
  }

  .brand-name {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 42px;
    font-weight: 700;
    color: var(--text-dark);
    letter-spacing: -1px;
    line-height: 1.1;
  }

  .brand-tagline {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 14px;
    color: var(--primary-dark);
    margin-top: 6px;
    letter-spacing: 0.3px;
  }

  .divider {
    width: 36px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), transparent);
    margin-top: 14px;
    border-radius: 2px;
  }

  .form-group {
    margin-bottom: 22px;
  }

  .field-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: var(--text-mid);
    margin-bottom: 8px;
    display: block;
  }

  .input-wrapper {
    position: relative;
  }

  .input-field {
    width: 100%;
    padding: 16px 18px;
    border: 1.5px solid var(--border);
    border-radius: 16px;
    background: rgba(255,255,255,0.85);
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: var(--text-dark);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    backdrop-filter: blur(4px);
  }

  .input-field::placeholder {
    color: var(--text-light);
    font-style: italic;
  }

  .input-field:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(196,168,224,0.18);
  }

  .show-btn {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-dark);
    padding: 4px 8px;
    border-radius: 8px;
    transition: background 0.15s;
  }

  .show-btn:hover {
    background: rgba(196,168,224,0.15);
  }

  .actions {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .btn-login {
    width: 100%;
    padding: 18px;
    border-radius: 50px;
    border: none;
    background: linear-gradient(135deg, #c4a8e0 0%, #a97fd4 100%);
    color: var(--text-dark);
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.4px;
    box-shadow: 0 6px 24px rgba(155, 114, 200, 0.32);
    transition: transform 0.15s, box-shadow 0.15s;
  }

  .btn-login:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 32px rgba(155, 114, 200, 0.42);
  }

  .btn-login:active {
    transform: translateY(0px);
  }

  .btn-signup {
    width: 100%;
    padding: 17px;
    border-radius: 50px;
    border: 1.5px solid var(--border);
    background: transparent;
    color: var(--primary-dark);
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.4px;
    transition: background 0.15s, border-color 0.15s;
  }

  .btn-signup:hover {
    background: rgba(196,168,224,0.1);
    border-color: var(--primary);
  }

  .forgot-link {
    text-align: center;
    margin-top: 8px;
  }

  .forgot-link a {
    font-size: 14px;
    color: var(--text-light);
    text-decoration: none;
    font-style: italic;
    font-family: 'Playfair Display', serif;
    transition: color 0.15s;
  }

  .forgot-link a:hover {
    color: var(--primary-dark);
  }
`;

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <style>{styles}</style>
      <div className="phone-frame">
  
        <div className="content">
          {/* Brand */}
          <div className="brand-area">
            <div className="brand-name">TruthBook</div>
            <div className="brand-tagline">Your truth. Your story.</div>
            
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="field-label">Email</label>
            <div className="input-wrapper">
              <input
                className="input-field"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="field-label">Password</label>
            <div className="input-wrapper">
              <input
                className="input-field"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ paddingRight: "70px" }}
              />
              <button className="show-btn" onClick={() => setShowPassword(s => !s)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="actions">
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign Up</button>
          </div>

          {/* Forgot */}
          <div className="forgot-link" style={{ marginTop: "20px" }}>
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    </>
  );
}

