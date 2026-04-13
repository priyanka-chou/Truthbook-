import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();

  const getProfile = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:3000/api/profile", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    });


    if (res.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
      return;
    }

    const result = await res.json();
    setUser(result.user);   // 🔥 main fix
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    getProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");

    // 🔥 best way
    window.location.href = "/";
  };


  const handleUpdate = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:3000/api/update-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({ name, profilePic })
    });

    const data = await res.json();

    if (data.success) {
      setUser(data.user);   // ✅ UI update
      setIsEditing(false);  // close edit box
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#e8e8e8" }}>
      <div style={{ width: 375, borderRadius: 36, boxShadow: "0 32px 80px rgba(100, 60, 180, 0.18), 0 2px 8px rgba(0,0,0,0.08)", overflow: "hidden", backgroundColor: "#fff" }}>



        <div style={{ background: "#4b3fd8", padding: "24px 16px 52px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <h1 style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 30, color: "#fff", margin: 0, letterSpacing: 1 }}>TruthBook</h1>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", margin: "4px 0 0", letterSpacing: 3, fontStyle: "italic" }}>share your truth</p>
        </div>

        <div style={{ background: "#fff", position: "relative", padding: "0 16px 20px" }}>
         <div style={{ position: "absolute", top: -40, left: 16, width: 80, height: 80, borderRadius: "50%", border: "3px solid #fff", overflow: "hidden", background: "#c8b8f0" }}>
  
  <img
    src={user?.profilePic || "https://via.placeholder.com/100"}
    alt="profile"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />

</div>

          <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 10 }}>
            <button style={{ border: "1.5px solid #bbb", borderRadius: 20, background: "#fff", padding: "6px 16px", fontSize: 13, color: "#222", cursor: "pointer" }} onClick={() => {
  setIsEditing(true);
  setName(user?.name || "");
  setProfilePic(user?.profilePic || "");
}}>
              Edit Profile
            </button>
            {isEditing && (
              <div>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Image URL"
                  value={profilePic}
                  onChange={(e) => setProfilePic(e.target.value)}
                />

                <button onClick={handleUpdate}>Save</button>
              </div>
            )}
            <button style={{ border: "1.5px solid #bbb", borderRadius: 20, background: "#fff", padding: "6px 16px", fontSize: 13, color: "#222", cursor: "pointer" }} onClick={handleLogout}>
              Logout
            </button>
          </div>

          <div style={{ marginTop: 32 }}>
            <p style={{ fontSize: 18, fontWeight: 700, margin: "0 0 2px", color: "#111" }}>{user?.name}</p>
            <p style={{ fontSize: 13, color: "#5b4ee0", margin: "0 0 5px", display: "flex", alignItems: "center", gap: 4 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#5b4ee0">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              @{user?.name}
            </p>
            <p style={{ fontSize: 13, color: "#444", margin: 0 }}>Android Developer | Building Truthbook 🚀</p>
          </div>

          <div style={{ display: "flex", marginTop: 16, paddingTop: 14, borderTop: "0.5px solid #eee" }}>
            {[{ label: "Posts", value: "128" }, { label: "Followers", value: "4.2K" }, { label: "Following", value: "310" }].map((s, i) => (
              <div key={s.label} style={{ flex: 1, textAlign: "center", borderLeft: i > 0 ? "0.5px solid #eee" : "none" }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: "#111" }}>{s.value}</p>
                <p style={{ margin: 0, fontSize: 11, color: "#888" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#f5f5f5", padding: "120px 16px", textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "#aaa", margin: 0 }}>No posts yet</p>
        </div>

        <div style={{ background: "#fff", padding: 10, display: "flex", justifyContent: "center" }}>
  
        </div>
      </div>
    </div>
  );
};


