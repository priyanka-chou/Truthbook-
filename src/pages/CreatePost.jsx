import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
   const [showSheet, setShowSheet] = useState(false);
  return (
    <div style={styles.bottomNav}>
      
      <button onClick={() => navigate("/")}>🏠</button>

      <button onClick={() => navigate("/search")}>🔍</button>

      {/* 🔥 MAIN + BUTTON */}
      <button onClick={() => navigate("/create-post")}>
        +
      </button>

      <button onClick={() => navigate("/messages")}>💬</button>

      <button onClick={() => navigate("/profile")}>👤</button>

    </div>
  );
}