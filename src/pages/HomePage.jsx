// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const stories = [
//   { id: 1, name: "Add", emoji: "➕", isAdd: true },
//   { id: 2, name: "Emma", emoji: "🌸" },
//   { id: 3, name: "Liam", emoji: "🌿" },
//   { id: 4, name: "Ava", emoji: "🦋" },
//   { id: 5, name: "Noah", emoji: "☀️" },
//   { id: 6, name: "Mia", emoji: "🌙" },
// ];

// const posts = [
//   {
//     id: 1,
//     user: "Jane Doe",
//     avatar: "😊",
//     avatarBg: "#c7d2fe",
//     time: "2 minutes ago",
//     privacy: "Public",
//     privacyIcon: "🌐",
//     type: "image",
//     bgColor: "linear-gradient(135deg, #c7d2fe 0%, #e0e7ff 100%)",
//     emoji: "🌸",
//     hasText: false,
//   },
//   {
//     id: 2,
//     user: "Marcus Lee",
//     avatar: "🎯",
//     avatarBg: "#fbbf24",
//     time: "1 hour ago",
//     privacy: "Friends",
//     privacyIcon: "👥",
//     type: "text",
//     text: "Just hit my 30-day journaling streak! Writing your truth every day changes everything 🔥 Who else",
//     hasText: true,
//   },
//   {
//     id: 3,
//     user: "Sofia Patel",
//     avatar: "🌿",
//     avatarBg: "#6ee7b7",
//     time: "3 hours ago",
//     privacy: "Public",
//     privacyIcon: "🌐",
//     type: "image",
//     bgColor: "linear-gradient(135deg, #fef08a 0%, #fde68a 100%)",
//     emoji: "🌻",
//     hasText: false,
//   },
// ];

// const navItems = [
//   { icon: "🏠", label: "Home", path: "/" },
//   { icon: "🔍", label: "Search", path: "/search" },
//   { icon: null, label: null, isCenter: true },
//   { icon: "💬", label: "Messages", path: "/messages" },
//   { icon: "👤", label: "Profile", path: "/profile" },
// ];

// // ✅ Yahan define kiye — component ke bahar
// const optStyle = {
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   gap: 10,
//   padding: "18px 10px",
//   borderRadius: 14,
//   border: "1px solid #eee",
//   background: "#fafafa",
//   cursor: "pointer",
// };

// const circleStyle = {
//   width: 52,
//   height: 52,
//   borderRadius: "50%",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// };

// const labelStyle = {
//   fontSize: 13,
//   fontWeight: 500,
//   color: "#333",
// };

// export default function TruthBook() {
//   const [activeNav, setActiveNav] = useState("Home");
//   const [showSheet, setShowSheet] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       minHeight: "100vh",
//       background: "#e8e6f0",
//       fontFamily: "'Georgia', serif",
//     }}>
//       {/* Phone frame */}
//       <div style={{
//         width: "375px",
//         height: "720px",
//         background: "#f8f7ff",
//         borderRadius: "50px",
//         overflow: "hidden",
//         boxShadow: "0 32px 80px rgba(100, 60, 180, 0.18), 0 2px 8px rgba(0,0,0,0.08)",
//         display: "flex",
//         flexDirection: "column",
//         position: "relative",
//       }}>

//         {/* Header */}
//         <div style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "10px 20px 14px",
//         }}>
//           <button style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#4338ca" }}>✏️</button>
//           <h1 style={{
//             margin: 0,
//             fontSize: 26,
//             fontFamily: "'Palatino Linotype', 'Book Antiqua', serif",
//             fontStyle: "italic",
//             color: "#1e1b4b",
//             fontWeight: 700,
//             letterSpacing: "-0.5px",
//           }}>TruthBook</h1>
//           <button style={{
//             background: "none", border: "none", fontSize: 20, cursor: "pointer",
//             position: "relative", color: "#4338ca",
//           }}>
//             🔔
//             <span style={{
//               position: "absolute", top: -2, right: -2,
//               width: 8, height: 8, background: "#ef4444",
//               borderRadius: "50%", display: "block",
//             }} />
//           </button>
//         </div>

//         {/* Scrollable content */}
//         <div style={{ flex: 1, overflowY: "auto", paddingBottom: 80 }}>

//           {/* Stories */}
//           <div style={{ padding: "0 16px 16px" }}>
//             <p style={{
//               margin: "0 0 10px 4px",
//               fontSize: 11,
//               fontWeight: 700,
//               letterSpacing: 1.5,
//               color: "#6b7280",
//               textTransform: "uppercase",
//               fontFamily: "sans-serif",
//             }}>Stories</p>
//             <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 4 }}>
//               {stories.map((story) => (
//                 <div key={story.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
//                   <div style={{
//                     width: 56, height: 56,
//                     borderRadius: "50%",
//                     background: story.isAdd ? "#e0e7ff" : "white",
//                     border: story.isAdd ? "2px dashed #6366f1" : "2.5px solid #6366f1",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     fontSize: story.isAdd ? 22 : 26,
//                     cursor: "pointer",
//                     transition: "transform 0.15s",
//                   }}
//                     onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
//                     onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
//                   >
//                     {story.emoji}
//                   </div>
//                   <span style={{
//                     fontSize: 11, color: "#374151",
//                     fontFamily: "sans-serif",
//                     fontWeight: story.isAdd ? 600 : 400,
//                   }}>{story.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Posts feed */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 12px" }}>
//             {posts.map((post) => (
//               <div key={post.id} style={{
//                 background: "white",
//                 borderRadius: 20,
//                 overflow: "hidden",
//                 boxShadow: "0 2px 12px rgba(99,102,241,0.08)",
//               }}>
//                 <div style={{
//                   display: "flex", alignItems: "center", justifyContent: "space-between",
//                   padding: "12px 14px 10px",
//                 }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                     <div style={{
//                       width: 40, height: 40, borderRadius: "50%",
//                       background: post.avatarBg,
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       fontSize: 20,
//                     }}>{post.avatar}</div>
//                     <div>
//                       <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: "#1e1b4b", fontFamily: "sans-serif" }}>{post.user}</p>
//                       <p style={{ margin: 0, fontSize: 11, color: "#9ca3af", fontFamily: "sans-serif" }}>
//                         {post.time} · {post.privacyIcon} {post.privacy}
//                       </p>
//                     </div>
//                   </div>
//                   <button style={{ background: "none", border: "none", fontSize: 18, color: "#9ca3af", cursor: "pointer" }}>⋯</button>
//                 </div>

//                 {post.type === "text" ? (
//                   <div style={{ padding: "4px 14px 14px" }}>
//                     <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.5, fontFamily: "sans-serif" }}>{post.text}</p>
//                   </div>
//                 ) : (
//                   <div style={{
//                     height: 140,
//                     background: post.bgColor,
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     fontSize: 56,
//                   }}>{post.emoji}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Nav */}
//         <div style={{
//           position: "absolute", bottom: 0, left: 0, right: 0,
//           background: "white",
//           borderTop: "1px solid #e5e7eb",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-around",
//           padding: "10px 16px 20px",
//           boxShadow: "0 -4px 20px rgba(99,102,241,0.08)",
//         }}>
//           {navItems.map((item, i) =>
//             item.isCenter ? (
//               <button
//                 key={i}
//                 onClick={() => setShowSheet(true)}
//                 style={{
//                   width: 52, height: 52, borderRadius: "50%",
//                   background: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
//                   border: "none",
//                   fontSize: 24, color: "white",
//                   cursor: "pointer",
//                   boxShadow: "0 4px 16px rgba(99,102,241,0.4)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   transition: "transform 0.15s",
//                 }}
//                 onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
//                 onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
//               >+</button>
//             ) : (
//               <button
//                 key={i}
//                 onClick={() => { if (item.path) navigate(item.path); setActiveNav(item.label); }}
//                 style={{
//                   background: "none", border: "none", cursor: "pointer",
//                   display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
//                 }}
//               >
//                 <span style={{ fontSize: 20 }}>{item.icon}</span>
//                 <span style={{
//                   fontSize: 10, fontFamily: "sans-serif",
//                   color: activeNav === item.label ? "#4338ca" : "#9ca3af",
//                   fontWeight: activeNav === item.label ? 700 : 400,
//                 }}>{item.label}</span>
//               </button>
//             )
//           )}
//         </div>

//         {/* ✅ Bottom Sheet — phone ke andar */}
//         {showSheet && (
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background: "rgba(0,0,0,0.45)",
//               display: "flex",
//               justifyContent: "flex-end",
//               flexDirection: "column",
//               zIndex: 999,
//             }}
//             onClick={(e) => e.target === e.currentTarget && setShowSheet(false)}
//           >
//             <div style={{
//               background: "#fff",
//               borderRadius: "20px 20px 0 0",
//               padding: "0 20px 36px",
//             }}>
//               <div style={{
//                 width: 36, height: 4, background: "#ddd",
//                 borderRadius: 2, margin: "12px auto 16px",
//               }} />

//               <p style={{
//                 textAlign: "center", fontSize: 13,
//                 color: "#888", fontWeight: 500, marginBottom: 20,
//               }}>
//                 Post banane ka tarika chunein
//               </p>

//               <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>

//                 <button onClick={() => setShowSheet(false)} style={optStyle}>
//                   <div style={{ ...circleStyle, background: "#E6F1FB" }}>
//                     <svg width="26" height="26" fill="none" stroke="#185FA5" strokeWidth="1.8" viewBox="0 0 24 24">
//                       <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
//                       <circle cx="12" cy="13" r="4" />
//                     </svg>
//                   </div>
//                   <span style={labelStyle}>Camera</span>
//                 </button>

//                 <label style={optStyle}>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     style={{ display: "none" }}
//                     onChange={(e) => { setShowSheet(false); console.log(e.target.files[0]); }}
//                   />
//                   <div style={{ ...circleStyle, background: "#EAF3DE" }}>
//                     <svg width="26" height="26" fill="none" stroke="#3B6D11" strokeWidth="1.8" viewBox="0 0 24 24">
//                       <rect x="3" y="3" width="18" height="18" rx="2" />
//                       <circle cx="8.5" cy="8.5" r="1.5" />
//                       <polyline points="21 15 16 10 5 21" />
//                     </svg>
//                   </div>
//                   <span style={labelStyle}>Gallery</span>
//                 </label>

//                 <button onClick={() => setShowSheet(false)} style={optStyle}>
//                   <div style={{ ...circleStyle, background: "#EEEDFE" }}>
//                     <svg width="26" height="26" fill="none" stroke="#3C3489" strokeWidth="1.8" viewBox="0 0 24 24">
//                       <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//                       <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//                     </svg>
//                   </div>
//                   <span style={labelStyle}>Edit</span>
//                 </button>

//               </div>

//               <button
//                 onClick={() => setShowSheet(false)}
//                 style={{
//                   width: "100%", padding: "13px",
//                   borderRadius: 10, border: "1px solid #eee",
//                   background: "#fff", fontSize: 15,
//                   fontWeight: 500, color: "#888", cursor: "pointer",
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const stories = [
  { id: 1, name: "Add", emoji: "➕", isAdd: true },
  { id: 2, name: "Emma", emoji: "🌸" },
  { id: 3, name: "Liam", emoji: "🌿" },
  { id: 4, name: "Ava", emoji: "🦋" },
  { id: 5, name: "Noah", emoji: "☀️" },
  { id: 6, name: "Mia", emoji: "🌙" },
];

const initialPosts = [
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
  },
];

const navItems = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "🔍", label: "Search", path: "/search" },
  { icon: null, label: null, isCenter: true },
  { icon: "💬", label: "Messages", path: "/messages" },
  { icon: "👤", label: "Profile", path: "/profile" },
];

const optStyle = {
  flex: 1, display: "flex", flexDirection: "column",
  alignItems: "center", gap: 10, padding: "18px 10px",
  borderRadius: 14, border: "1px solid #eee",
  background: "#fafafa", cursor: "pointer",
};
const circleStyle = {
  width: 52, height: 52, borderRadius: "50%",
  display: "flex", alignItems: "center", justifyContent: "center",
};
const labelStyle = { fontSize: 13, fontWeight: 500, color: "#333" };

export default function TruthBook() {
  const [activeNav, setActiveNav] = useState("Home");
  const [showSheet, setShowSheet] = useState(false);
  const [posts, setPosts] = useState(initialPosts);

  // Camera states
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraError, setCameraError] = useState("");

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const navigate = useNavigate();

  // Camera open karo
  const openCamera = async () => {
    setShowSheet(false);
    setCameraError("");
    setCapturedImage(null);
    setShowCamera(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }, // back camera
        audio: false,
      });
      streamRef.current = stream;
      // थोड़ा wait karo — video element render hone ke baad
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch (err) {
      setCameraError("Camera access nahi mila. Permission allow karo.");
    }
  };

  // Photo lo
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const imageDataUrl = canvas.toDataURL("image/jpeg");
    setCapturedImage(imageDataUrl);

    // Stream band karo
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
    }
  };

  // Photo post mein add karo
  const addCameraPost = () => {
    if (!capturedImage) return;
    const newPost = {
      id: Date.now(),
      user: "You",
      avatar: "😊",
      avatarBg: "#a5b4fc",
      time: "Just now",
      privacy: "Public",
      privacyIcon: "🌐",
      type: "camera",
      imageUrl: capturedImage,
    };
    setPosts([newPost, ...posts]);
    setCapturedImage(null);
    setShowCamera(false);
  };

  // Camera band karo
  const closeCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
    }
    setCapturedImage(null);
    setShowCamera(false);
  };

  // Gallery se image add karo
  const handleGalleryChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setShowSheet(false);
    const url = URL.createObjectURL(file);
    const newPost = {
      id: Date.now(),
      user: "You",
      avatar: "😊",
      avatarBg: "#a5b4fc",
      time: "Just now",
      privacy: "Public",
      privacyIcon: "🌐",
      type: "camera",
      imageUrl: url,
    };
    setPosts([newPost, ...posts]);
  };

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
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "10px 20px 14px",
        }}>
          <button style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#4338ca" }}>✏️</button>
          <h1 style={{
            margin: 0, fontSize: 26,
            fontFamily: "'Palatino Linotype', serif",
            fontStyle: "italic", color: "#1e1b4b", fontWeight: 700,
          }}>TruthBook</h1>
          <button style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", position: "relative", color: "#4338ca" }}>
            🔔
            <span style={{
              position: "absolute", top: -2, right: -2,
              width: 8, height: 8, background: "#ef4444", borderRadius: "50%", display: "block",
            }} />
          </button>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", paddingBottom: 80 }}>

          {/* Stories */}
          <div style={{ padding: "0 16px 16px" }}>
            <p style={{
              margin: "0 0 10px 4px", fontSize: 11, fontWeight: 700,
              letterSpacing: 1.5, color: "#6b7280", textTransform: "uppercase", fontFamily: "sans-serif",
            }}>Stories</p>
            <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 4 }}>
              {stories.map((story) => (
                <div key={story.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: story.isAdd ? "#e0e7ff" : "white",
                    border: story.isAdd ? "2px dashed #6366f1" : "2.5px solid #6366f1",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: story.isAdd ? 22 : 26, cursor: "pointer", transition: "transform 0.15s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  >{story.emoji}</div>
                  <span style={{ fontSize: 11, color: "#374151", fontFamily: "sans-serif", fontWeight: story.isAdd ? 600 : 400 }}>
                    {story.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Posts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 12px" }}>
            {posts.map((post) => (
              <div key={post.id} style={{
                background: "white", borderRadius: 20, overflow: "hidden",
                boxShadow: "0 2px 12px rgba(99,102,241,0.08)",
              }}>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "12px 14px 10px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: post.avatarBg,
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
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

                {post.type === "text" && (
                  <div style={{ padding: "4px 14px 14px" }}>
                    <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.5, fontFamily: "sans-serif" }}>{post.text}</p>
                  </div>
                )}
                {post.type === "image" && (
                  <div style={{
                    height: 140, background: post.bgColor,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56,
                  }}>{post.emoji}</div>
                )}
                {post.type === "camera" && (
                  <img src={post.imageUrl} alt="post" style={{ width: "100%", maxHeight: 200, objectFit: "cover", display: "block" }} />
                )}
              </div>
            ))}
          </div>
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
              <button key={i} onClick={() => setShowSheet(true)} style={{
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

        {/* ── BOTTOM SHEET ── */}
        {showSheet && (
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex", justifyContent: "flex-end", flexDirection: "column",
            zIndex: 999,
          }}
            onClick={(e) => e.target === e.currentTarget && setShowSheet(false)}
          >
            <div style={{ background: "#fff", borderRadius: "20px 20px 0 0", padding: "0 20px 36px" }}>
              <div style={{ width: 36, height: 4, background: "#ddd", borderRadius: 2, margin: "12px auto 16px" }} />
              <p style={{ textAlign: "center", fontSize: 13, color: "#888", fontWeight: 500, marginBottom: 20 }}>
                Post banane ka tarika chunein
              </p>
              <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>

                {/* Camera button */}
                <button onClick={openCamera} style={optStyle}>
                  <div style={{ ...circleStyle, background: "#E6F1FB" }}>
                    <svg width="26" height="26" fill="none" stroke="#185FA5" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </div>
                  <span style={labelStyle}>Camera</span>
                </button>

                {/* Gallery */}
                <label style={optStyle}>
                  <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleGalleryChange} />
                  <div style={{ ...circleStyle, background: "#EAF3DE" }}>
                    <svg width="26" height="26" fill="none" stroke="#3B6D11" strokeWidth="1.8" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <span style={labelStyle}>Gallery</span>
                </label>

                {/* Edit */}
                <button onClick={() => setShowSheet(false)} style={optStyle}>
                  <div style={{ ...circleStyle, background: "#EEEDFE" }}>
                    <svg width="26" height="26" fill="none" stroke="#3C3489" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </div>
                  <span style={labelStyle}>Edit</span>
                </button>

              </div>
              <button onClick={() => setShowSheet(false)} style={{
                width: "100%", padding: "13px", borderRadius: 10,
                border: "1px solid #eee", background: "#fff",
                fontSize: 15, fontWeight: 500, color: "#888", cursor: "pointer",
              }}>Cancel</button>
            </div>
          </div>
        )}

        {/* ── CAMERA SCREEN ── */}
        {showCamera && (
          <div style={{
            position: "absolute", inset: 0, background: "#000",
            display: "flex", flexDirection: "column",
            zIndex: 1000, borderRadius: "50px", overflow: "hidden",
          }}>
            {/* Top bar */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "16px 20px", background: "rgba(0,0,0,0.5)",
            }}>
              <button onClick={closeCamera} style={{
                background: "none", border: "none", color: "#fff",
                fontSize: 16, cursor: "pointer", fontFamily: "sans-serif",
              }}>✕ Band karo</button>
              <span style={{ color: "#fff", fontSize: 14, fontFamily: "sans-serif" }}>Camera</span>
              <div style={{ width: 80 }} />
            </div>

            {/* Camera error */}
            {cameraError ? (
              <div style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: 12, padding: 24,
              }}>
                <span style={{ fontSize: 40 }}>📷</span>
                <p style={{ color: "#fff", textAlign: "center", fontFamily: "sans-serif", fontSize: 14 }}>
                  {cameraError}
                </p>
              </div>
            ) : capturedImage ? (
              /* Captured photo preview */
              <div style={{ flex: 1, position: "relative" }}>
                <img src={capturedImage} alt="captured" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{
                  position: "absolute", bottom: 24, left: 0, right: 0,
                  display: "flex", justifyContent: "center", gap: 16, padding: "0 20px",
                }}>
                  <button onClick={() => { setCapturedImage(null); openCamera(); }} style={{
                    flex: 1, padding: "12px", borderRadius: 12,
                    border: "2px solid #fff", background: "transparent",
                    color: "#fff", fontSize: 15, fontWeight: 600,
                    cursor: "pointer", fontFamily: "sans-serif",
                  }}>🔄 Dobara lo</button>
                  <button onClick={addCameraPost} style={{
                    flex: 1, padding: "12px", borderRadius: 12,
                    border: "none", background: "#6366f1",
                    color: "#fff", fontSize: 15, fontWeight: 600,
                    cursor: "pointer", fontFamily: "sans-serif",
                  }}>✅ Post karo</button>
                </div>
              </div>
            ) : (
              /* Live camera */
              <div style={{ flex: 1, position: "relative" }}>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {/* Capture button */}
                <div style={{
                  position: "absolute", bottom: 32, left: 0, right: 0,
                  display: "flex", justifyContent: "center",
                }}>
                  <button onClick={capturePhoto} style={{
                    width: 70, height: 70, borderRadius: "50%",
                    border: "4px solid white", background: "rgba(255,255,255,0.2)",
                    cursor: "pointer", transition: "transform 0.1s",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                    onMouseDown={e => e.currentTarget.style.transform = "scale(0.92)"}
                    onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
                  >
                    <div style={{ width: 54, height: 54, borderRadius: "50%", background: "white" }} />
                  </button>
                </div>
              </div>
            )}

            {/* Hidden canvas */}
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        )}

      </div>
    </div>
  );
}