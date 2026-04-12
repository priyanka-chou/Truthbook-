import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ProfilePage() {
  const [data, setData] = useState("");
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
    navigate("/");
    return;
  }

    const result = await res.text();
    setData(result);
  };

  useEffect(() => {
    getProfile();
  }, []);

 const handleLogout = () => {
  localStorage.removeItem("token");

  // 🔥 redirect to login
  navigate("/");
};

  return (
    <div>
      <h2>Profile Page</h2>

      <p>{data}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}