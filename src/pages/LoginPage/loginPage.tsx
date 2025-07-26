// src/pages/LoginPage/loginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../../Data/UserData";
import { users } from "../../Data/UserData";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);

    const found: User | undefined = users.find(
      (u: User) => u.mail === email && u.password === password
    );

    if (!found) {
      setErr("メールまたはパスワードが正しくありません。");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(found));

    if (found.role === "admin") {
      navigate("/manager");
    } else {
      navigate("/customer");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">ログイン</h1>
      <form onSubmit={handleLogin} className="login-form">
        <label className="login-label">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="login-input"
          />
        </label>

        <label className="login-label">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="login-input"
          />
        </label>

        {err && <p className="login-error">{err}</p>}

        <button type="submit" className="login-button">ログイン</button>
      </form>
    </div>
  );
};

export default LoginPage;
