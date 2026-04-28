import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mockUsers = [
  { id: "jane_doe", name: "Jane Doe", avatar: "😊", avatarBg: "#c7d2fe", followers: "1.2K", bio: "Living life authentically ✨" },
  { id: "marcus_lee", name: "Marcus Lee", avatar: "🎯", avatarBg: "#fbbf24", followers: "3.4K", bio: "Journaling every day 🔥" },
  { id: "sofia_patel", name: "Sofia Patel", avatar: "🌿", avatarBg: "#6ee7b7", followers: "876", bio: "Nature lover 🌻" },
  { id: "liam_jones", name: "Liam Jones", avatar: "🌿", avatarBg: "#a5b4fc", followers: "512", bio: "Chasing sunsets ☀️" },
  { id: "ava_k", name: "Ava Khan", avatar: "🦋", avatarBg: "#fbcfe8", followers: "2.1K", bio: "Creative soul 🎨" },
];

const mockReels = [
  { id: "reel_001", title: "Morning Routine Vlog", emoji: "🌅", views: "12K", user: "Jane Doe", bg: "linear-gradient(135deg, #c7d2fe 0%, #e0e7ff 100%)" },
  { id: "reel_002", title: "30-day Journal Challenge", emoji: "📓", views: "8.5K", user: "Marcus Lee", bg: "linear-gradient(135deg, #fef08a 0%, #fde68a 100%)" },
  { id: "reel_003", title: "Sunset Timelapse 🌇", emoji: "🌆", views: "21K", user: "Sofia Patel", bg: "linear-gradient(135deg, #fca5a5 0%, #fecdd3 100%)" },
  { id: "reel_004", title: "Coffee Art Tutorial", emoji: "☕", views: "5.3K", user: "Liam Jones", bg: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)" },
  { id: "reel_005", title: "City Night Walk", emoji: "🌃", views: "9.9K", user: "Ava Khan", bg: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)" },
  { id: "reel_006", title: "Healthy Breakfast Ideas", emoji: "🥑", views: "15K", user: "Jane Doe", bg: "linear-gradient(135deg, #bbf7d0 0%, #d1fae5 100%)" },
];

const trendingTags = ["#truth", "#journaling", "#vlog", "#reels", "#morning", "#aesthetic"];

const navItems = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "🔍", label: "Search", path: "/search" },
  { icon: null, label: null, isCenter: true },
  { icon: "💬", label: "Messages", path: "/messages" },
  { icon: "👤", label: "Profile", path: "/profile" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // all | people | reels
  const [activeNav, setActiveNav] = useState("Search");
  const navigate = useNavigate();

  const q = query.trim().toLowerCase();

  const filteredUsers = mockUsers.filter(
    (u) =>
      u.id.toLowerCase().includes(q) ||
      u.name.toLowerCase().includes(q)
  );

  const filteredReels = mockReels.filter(
    (r) =>
      r.id.toLowerCase().includes(q) ||
      r.title.toLowerCase().includes(q) ||
      r.user.toLowerCase().includes(q)
  );

  const showAll = activeTab === "all";
  const showPeople = activeTab === "all" || activeTab === "people";
  const showReels = activeTab === "all" || activeTab === "reels";

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      minHeight: "100vh", background: "#e8e6f0", fontFamily: "'Georgia', serif",
    }}>
      <div style={{
        width: "375px", height: "720px", background: "#f8f7ff",
        borderRadius: "50px", overflow: "hidden",
        boxShadow: "0 32px 80px rgba(100,60,180,0.18), 0 2px 8px rgba(0,0,0,0.08)",
        display: "flex", flexDirection: "column", position: "relative",
      }}>

        {/* Header */}
        <div style={{ padding: "18px 20px 10px" }}>
          <h1 style={{
            margin: "0 0 12px", fontSize: 22,
            fontFamily: "'Palatino Linotype', serif",
            fontStyle: "italic", color: "#1e1b4b", fontWeight: 700, textAlign: "center",
          }}>Search</h1>

          {/* Search bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "#ede9fe", borderRadius: 14, padding: "10px 14px",
            border: "1.5px solid #c4b5fd",
          }}>
            <span style={{ fontSize: 16, color: "#6d28d9" }}>🔍</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search ID, name, reel..."
              style={{
                flex: 1, background: "none", border: "none", outline: "none",
                fontSize: 14, color: "#1e1b4b", fontFamily: "sans-serif",
              }}
            />
            {query && (
              <button onClick={() => setQuery("")} style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 14, color: "#9ca3af",
              }}>✕</button>
            )}
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            {["all", "people", "reels"].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: "6px 14px", borderRadius: 20, border: "none",
                fontSize: 12, fontWeight: 600, cursor: "pointer",
                fontFamily: "sans-serif", textTransform: "capitalize",
                background: activeTab === tab ? "#6366f1" : "#ede9fe",
                color: activeTab === tab ? "#fff" : "#4338ca",
                transition: "all 0.15s",
              }}>{tab}</button>
            ))}
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "0 14px 80px" }}>

          {/* No query → trending */}
          {!q && (
            <>
              <p style={{
                margin: "8px 4px 8px", fontSize: 11, fontWeight: 700,
                letterSpacing: 1.5, color: "#6b7280", textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}>Trending</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                {trendingTags.map((tag) => (
                  <button key={tag} onClick={() => setQuery(tag.replace("#", ""))} style={{
                    padding: "6px 14px", borderRadius: 20, border: "none",
                    background: "#ede9fe", color: "#4338ca", fontSize: 13,
                    fontFamily: "sans-serif", fontWeight: 600, cursor: "pointer",
                  }}>{tag}</button>
                ))}
              </div>

              {/* Explore grid */}
              <p style={{
                margin: "0 4px 8px", fontSize: 11, fontWeight: 700,
                letterSpacing: 1.5, color: "#6b7280", textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}>Explore Reels</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {mockReels.map((reel) => (
                  <div key={reel.id} style={{
                    borderRadius: 14, overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(99,102,241,0.1)", cursor: "pointer",
                  }}>
                    <div style={{
                      height: 90, background: reel.bg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 36,
                    }}>{reel.emoji}</div>
                    <div style={{ background: "white", padding: "6px 8px" }}>
                      <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "#1e1b4b", fontFamily: "sans-serif" }}>{reel.title}</p>
                      <p style={{ margin: 0, fontSize: 10, color: "#9ca3af", fontFamily: "sans-serif" }}>{reel.views} views</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Search results */}
          {q && (
            <>
              {/* People */}
              {showPeople && filteredUsers.length > 0 && (
                <>
                  <p style={{
                    margin: "8px 4px 8px", fontSize: 11, fontWeight: 700,
                    letterSpacing: 1.5, color: "#6b7280", textTransform: "uppercase",
                    fontFamily: "sans-serif",
                  }}>People</p>
                  {filteredUsers.map((user) => (
                    <div key={user.id} style={{
                      display: "flex", alignItems: "center", gap: 12,
                      background: "white", borderRadius: 14, padding: "10px 12px",
                      marginBottom: 8, boxShadow: "0 2px 8px rgba(99,102,241,0.07)",
                      cursor: "pointer",
                    }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: "50%",
                        background: user.avatarBg,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 22, flexShrink: 0,
                      }}>{user.avatar}</div>
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: "#1e1b4b", fontFamily: "sans-serif" }}>{user.name}</p>
                        <p style={{ margin: 0, fontSize: 11, color: "#9ca3af", fontFamily: "sans-serif" }}>@{user.id} · {user.followers} followers</p>
                        <p style={{ margin: "2px 0 0", fontSize: 11, color: "#6b7280", fontFamily: "sans-serif" }}>{user.bio}</p>
                      </div>
                      <button style={{
                        background: "#6366f1", color: "white", border: "none",
                        borderRadius: 10, padding: "6px 12px", fontSize: 11,
                        fontWeight: 700, cursor: "pointer", fontFamily: "sans-serif",
                      }}>Follow</button>
                    </div>
                  ))}
                </>
              )}

              {/* Reels */}
              {showReels && filteredReels.length > 0 && (
                <>
                  <p style={{
                    margin: "8px 4px 8px", fontSize: 11, fontWeight: 700,
                    letterSpacing: 1.5, color: "#6b7280", textTransform: "uppercase",
                    fontFamily: "sans-serif",
                  }}>Reels</p>
                  {filteredReels.map((reel) => (
                    <div key={reel.id} style={{
                      display: "flex", alignItems: "center", gap: 12,
                      background: "white", borderRadius: 14, padding: "10px 12px",
                      marginBottom: 8, boxShadow: "0 2px 8px rgba(99,102,241,0.07)",
                      cursor: "pointer",
                    }}>
                      <div style={{
                        width: 52, height: 52, borderRadius: 12,
                        background: reel.bg, display: "flex",
                        alignItems: "center", justifyContent: "center",
                        fontSize: 26, flexShrink: 0,
                      }}>{reel.emoji}</div>
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: "#1e1b4b", fontFamily: "sans-serif" }}>{reel.title}</p>
                        <p style={{ margin: 0, fontSize: 11, color: "#9ca3af", fontFamily: "sans-serif" }}>by {reel.user} · {reel.views} views</p>
                        <p style={{ margin: "2px 0 0", fontSize: 10, color: "#c4b5fd", fontFamily: "sans-serif" }}>ID: {reel.id}</p>
                      </div>
                      <span style={{ fontSize: 18, color: "#6366f1" }}>▶</span>
                    </div>
                  ))}
                </>
              )}

              {/* No results */}
              {filteredUsers.length === 0 && filteredReels.length === 0 && (
                <div style={{ textAlign: "center", padding: "60px 20px", color: "#9ca3af", fontFamily: "sans-serif" }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#6b7280" }}>No results found</p>
                  <p style={{ fontSize: 13 }}>Try a different name, ID, or keyword</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Bottom Nav */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "white", borderTop: "1px solid #e5e7eb",
          display: "flex", alignItems: "center", justifyContent: "space-around",
          padding: "10px 16px 20px",
          boxShadow: "0 -4px 20px rgba(99,102,241,0.08)",
        }}>
          {navItems.map((item, i) =>
            item.isCenter ? (
              <button key={i} style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
                border: "none", fontSize: 24, color: "white", cursor: "pointer",
                boxShadow: "0 4px 16px rgba(99,102,241,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>+</button>
            ) : (
              <button key={i} onClick={() => { if (item.path) navigate(item.path); setActiveNav(item.label); }} style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
              }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <span style={{
                  fontSize: 10, fontFamily: "sans-serif",
                  color: activeNav === item.label ? "#4338ca" : "#9ca3af",
                  fontWeight: activeNav === item.label ? 700 : 400,
                }}>{item.label}</span>
              </button>
            )
          )}
        </div>

      </div>
    </div>
  );
}