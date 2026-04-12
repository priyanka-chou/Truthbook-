import { useState } from "react";
import { useNavigate } from "react-router-dom";

const stories = [
  { id: 1, name: "Add", emoji: "➕", isAdd: true },
  { id: 2, name: "Emma", emoji: "🌸" },
  { id: 3, name: "Liam", emoji: "🌿" },
  { id: 4, name: "Ava", emoji: "🦋" },
  { id: 5, name: "Noah", emoji: "☀️" },
  { id: 6, name: "Mia", emoji: "🌙" },
];

const posts = [
  {
    id: 1,
    user: "Jane Doe",
    avatar: "😊",
    avatarBg: "#c7d2fe",
    time: "2 minutes ago",
    privacy: "Public",
    privacyIcon: "🌐",
    type: "image",
    bgColor: "linear-gradient(135deg, #c7d2fe 0%, #e0e7ff 100%)",
    emoji: "🌸",
    hasText: false,
  },
  {
    id: 2,
    user: "Marcus Lee",
    avatar: "🎯",
    avatarBg: "#fbbf24",
    time: "1 hour ago",
    privacy: "Friends",
    privacyIcon: "👥",
    type: "text",
    text: "Just hit my 30-day journaling streak! Writing your truth every day changes everything 🔥 Who else",
    hasText: true,
  },
  {
    id: 3,
    user: "Sofia Patel",
    avatar: "🌿",
    avatarBg: "#6ee7b7",
    time: "3 hours ago",
    privacy: "Public",
    privacyIcon: "🌐",
    type: "image",
    bgColor: "linear-gradient(135deg, #fef08a 0%, #fde68a 100%)",
    emoji: "🌻",
    hasText: false,
  },
];

const navItems = [
  { icon: "🏠", label: "Home", active: true },
  { icon: "🔍", label: "Search", active: false },
  { icon: null, label: null, isCenter: true },
  { icon: "💬", label: "Messages", active: false },
  { icon: "👤", label: "Profile", active: false },
];

export default function TruthBook() {
  const [activeNav, setActiveNav] = useState("Home");
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
      fontFamily: "'Georgia', serif",
    }}>
      {/* Phone frame */}
      <div style={{
        width: 375,
        height: 812,
        background: "#f8f7ff",
        borderRadius: 50,
        overflow: "hidden",
        boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 2px #3730a3, inset 0 0 0 1px rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}>

        {/* Status bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 24px 0",
          fontSize: 13,
          fontWeight: 600,
          color: "#1e1b4b",
          fontFamily: "'SF Pro Display', sans-serif",
        }}>
          <span>9:41</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 11 }}>▲▲▲</span>
            <span style={{ fontSize: 11 }}>WiFi</span>
            <span style={{ fontSize: 11 }}>🔋</span>
          </div>
        </div>

        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px 14px",
        }}>
          <button style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#4338ca" }}>✏️</button>
          <h1 style={{
            margin: 0,
            fontSize: 26,
            fontFamily: "'Palatino Linotype', 'Book Antiqua', serif",
            fontStyle: "italic",
            color: "#1e1b4b",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}>TruthBook</h1>
          <button style={{
            background: "none", border: "none", fontSize: 20, cursor: "pointer",
            position: "relative", color: "#4338ca"
          }}>
            🔔
            <span style={{
              position: "absolute", top: -2, right: -2,
              width: 8, height: 8, background: "#ef4444",
              borderRadius: "50%", display: "block"
            }} />
          </button>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", paddingBottom: 80 }}>
          {/* Stories */}
          <div style={{ padding: "0 16px 16px" }}>
            <p style={{
              margin: "0 0 10px 4px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: "#6b7280",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}>Stories</p>
            <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 4 }}>
              {stories.map((story) => (
                <div key={story.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
                  <div style={{
                    width: 56, height: 56,
                    borderRadius: "50%",
                    background: story.isAdd ? "#e0e7ff" : "white",
                    border: story.isAdd ? "2px dashed #6366f1" : "2.5px solid #6366f1",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: story.isAdd ? 22 : 26,
                    cursor: "pointer",
                    transition: "transform 0.15s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  >
                    {story.emoji}
                  </div>
                  <span style={{
                    fontSize: 11, color: "#374151",
                    fontFamily: "sans-serif",
                    fontWeight: story.isAdd ? 600 : 400,
                  }}>{story.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Posts feed */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 12px" }}>
            {posts.map((post) => (
              <div key={post.id} style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(99,102,241,0.08)",
              }}>
                {/* Post header */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "12px 14px 10px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: post.avatarBg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20,
                    }}>{post.avatar}</div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: "#1e1b4b", fontFamily: "sans-serif" }}>{post.user}</p>
                      <p style={{ margin: 0, fontSize: 11, color: "#9ca3af", fontFamily: "sans-serif" }}>
                        {post.time} · {post.privacyIcon} {post.privacy}
                      </p>
                    </div>
                  </div>
                  <button style={{ background: "none", border: "none", fontSize: 18, color: "#9ca3af", cursor: "pointer" }}>⋯</button>
                </div>

                {/* Post content */}
                {post.type === "text" ? (
                  <div style={{ padding: "4px 14px 14px" }}>
                    <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.5, fontFamily: "sans-serif" }}>{post.text}</p>
                  </div>
                ) : (
                  <div style={{
                    height: 140,
                    background: post.bgColor,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 56,
                  }}>{post.emoji}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Nav */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "white",
          borderTop: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "10px 16px 20px",
          boxShadow: "0 -4px 20px rgba(99,102,241,0.08)",
        }}>
          {navItems.map((item, i) =>
            item.isCenter ? (
              <button key={i} style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
                border: "none",
                fontSize: 24, color: "white",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(99,102,241,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "transform 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >+</button>
            ) : (
              <button key={i} onClick={() => setActiveNav(item.label)} style={{
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