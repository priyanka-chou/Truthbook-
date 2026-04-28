import { useState } from "react";
import { useNavigate } from "react-router-dom";

const contacts = [
  { id: 1, name: "Emma", emoji: "🌸", avatarBg: "#fce7f3", lastMsg: "Hey! Kya chal raha hai? 😊", time: "2m", unread: 2 },
  { id: 2, name: "Liam", emoji: "🌿", avatarBg: "#d1fae5", lastMsg: "Kal milte hain!", time: "15m", unread: 0 },
  { id: 3, name: "Ava", emoji: "🦋", avatarBg: "#ede9fe", lastMsg: "Bahut achha laga! 💜", time: "1h", unread: 1 },
  { id: 4, name: "Noah", emoji: "☀️", avatarBg: "#fef9c3", lastMsg: "Good morning!", time: "2h", unread: 0 },
  { id: 5, name: "Mia", emoji: "🌙", avatarBg: "#e0e7ff", lastMsg: "Soja ab 😂", time: "5h", unread: 0 },
  { id: 6, name: "Sofia", emoji: "🌻", avatarBg: "#fef08a", lastMsg: "Photo dekhi? Kamaal thi!", time: "1d", unread: 3 },
];

export default function MessagesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [openChat, setOpenChat] = useState(null);
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState("");

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const sendMessage = () => {
    if (!input.trim()) return;
    const key = openChat.id;
    setMessages(prev => ({
      ...prev,
      [key]: [...(prev[key] || []), { text: input, from: "me", time: "Now" }]
    }));
    setInput("");
  };

  // ── CHAT SCREEN ──
  if (openChat) {
    const chatMsgs = messages[openChat.id] || [];
    return (
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        minHeight: "100vh", background: "#e8e6f0",
      }}>
        <div style={{
          width: 375, height: 720, background: "#f8f7ff",
          borderRadius: 50, overflow: "hidden",
          boxShadow: "0 32px 80px rgba(100,60,180,0.18)",
          display: "flex", flexDirection: "column", position: "relative",
        }}>

          {/* Chat Header */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "16px 20px", borderBottom: "1px solid #eee",
            background: "#fff",
          }}>
            <button onClick={() => setOpenChat(null)}
              style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#4338ca" }}>
              ←
            </button>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: openChat.avatarBg,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
            }}>{openChat.emoji}</div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: "#1e1b4b", fontFamily: "sans-serif" }}>
                {openChat.name}
              </p>
              <p style={{ margin: 0, fontSize: 11, color: "#6ee7b7", fontFamily: "sans-serif" }}>● Online</p>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
            {/* Default welcome message */}
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{
                background: "#fff", borderRadius: "18px 18px 18px 4px",
                padding: "10px 14px", maxWidth: "70%",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}>
                <p style={{ margin: 0, fontSize: 13, color: "#374151", fontFamily: "sans-serif" }}>
                  {openChat.lastMsg}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: 10, color: "#9ca3af", fontFamily: "sans-serif" }}>
                  {openChat.time} ago
                </p>
              </div>
            </div>

            {/* User sent messages */}
            {chatMsgs.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.from === "me" ? "flex-end" : "flex-start" }}>
                <div style={{
                  background: msg.from === "me" ? "linear-gradient(135deg, #6366f1, #4338ca)" : "#fff",
                  borderRadius: msg.from === "me" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  padding: "10px 14px", maxWidth: "70%",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                }}>
                  <p style={{ margin: 0, fontSize: 13, color: msg.from === "me" ? "#fff" : "#374151", fontFamily: "sans-serif" }}>
                    {msg.text}
                  </p>
                  <p style={{ margin: "4px 0 0", fontSize: 10, color: msg.from === "me" ? "rgba(255,255,255,0.7)" : "#9ca3af", fontFamily: "sans-serif" }}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input box */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "12px 16px 24px", borderTop: "1px solid #eee", background: "#fff",
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Message likho..."
              style={{
                flex: 1, padding: "10px 16px", borderRadius: 24,
                border: "1px solid #e5e7eb", background: "#f3f4f6",
                fontSize: 14, fontFamily: "sans-serif", outline: "none",
              }}
            />
            <button onClick={sendMessage} style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "linear-gradient(135deg, #6366f1, #4338ca)",
              border: "none", color: "#fff", fontSize: 18,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            }}>➤</button>
          </div>
        </div>
      </div>
    );
  }

  // ── MESSAGES LIST ──
  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      minHeight: "100vh", background: "#e8e6f0",
    }}>
      <div style={{
        width: 375, height: 720, background: "#f8f7ff",
        borderRadius: 50, overflow: "hidden",
        boxShadow: "0 32px 80px rgba(100,60,180,0.18)",
        display: "flex", flexDirection: "column",
      }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 20px 12px",
        }}>
          <button onClick={() => navigate("/")}
            style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#4338ca" }}>
            ←
          </button>
          <h2 style={{ margin: 0, fontSize: 20, fontFamily: "'Palatino Linotype', serif", fontStyle: "italic", color: "#1e1b4b", fontWeight: 700 }}>
            Messages
          </h2>
          <button style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#4338ca" }}>✏️</button>
        </div>

        {/* Search */}
        <div style={{ padding: "0 16px 12px" }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search karo..."
            style={{
              width: "100%", padding: "10px 16px", borderRadius: 20,
              border: "1px solid #e5e7eb", background: "#f3f4f6",
              fontSize: 13, fontFamily: "sans-serif", outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Active now */}
        <div style={{ padding: "0 16px 12px" }}>
          <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: 1.2, textTransform: "uppercase", fontFamily: "sans-serif" }}>
            Active Now
          </p>
          <div style={{ display: "flex", gap: 12, overflowX: "auto" }}>
            {contacts.slice(0, 4).map(c => (
              <div key={c.id} onClick={() => setOpenChat(c)}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer", flexShrink: 0 }}>
                <div style={{ position: "relative" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: c.avatarBg, border: "2px solid #6366f1",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                  }}>{c.emoji}</div>
                  {/* Green dot */}
                  <div style={{
                    position: "absolute", bottom: 1, right: 1,
                    width: 11, height: 11, borderRadius: "50%",
                    background: "#22c55e", border: "2px solid #f8f7ff",
                  }} />
                </div>
                <span style={{ fontSize: 10, color: "#374151", fontFamily: "sans-serif" }}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts list */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {filtered.map(c => (
            <div key={c.id} onClick={() => setOpenChat(c)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "12px 16px", cursor: "pointer",
                borderBottom: "1px solid #f3f4f6",
                background: "white",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#f5f3ff"}
              onMouseLeave={e => e.currentTarget.style.background = "white"}
            >
              {/* Avatar */}
              <div style={{ position: "relative" }}>
                <div style={{
                  width: 50, height: 50, borderRadius: "50%",
                  background: c.avatarBg,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
                  flexShrink: 0,
                }}>{c.emoji}</div>
                {c.unread > 0 && (
                  <div style={{
                    position: "absolute", top: 0, right: 0,
                    background: "#6366f1", color: "white",
                    fontSize: 9, fontWeight: 700,
                    width: 16, height: 16, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>{c.unread}</div>
                )}
              </div>

              {/* Name + last msg */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ margin: 0, fontWeight: c.unread > 0 ? 700 : 500, fontSize: 14, color: "#1e1b4b", fontFamily: "sans-serif" }}>
                    {c.name}
                  </p>
                  <span style={{ fontSize: 11, color: "#9ca3af", fontFamily: "sans-serif" }}>{c.time}</span>
                </div>
                <p style={{
                  margin: 0, fontSize: 12, color: c.unread > 0 ? "#4338ca" : "#9ca3af",
                  fontFamily: "sans-serif", fontWeight: c.unread > 0 ? 600 : 400,
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                }}>{c.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}