// src/pages/Manager/manager.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../../Data/UserData"; // ← ここを修正！

const ManagerPage: React.FC = () => {
  const navigate = useNavigate();

  const raw = localStorage.getItem("currentUser");
  const user: User | null = raw ? JSON.parse(raw) : null;

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Manager Page</h1>
      <p>ログインユーザ: {user?.mail}</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default ManagerPage;
