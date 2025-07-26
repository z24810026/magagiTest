// src/App.tsx
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/loginPage";
import CustomerPage from "./pages/CustomerPage/customer";
import ManagerPage from "./pages/Manager/manager";
import type { User, Role } from "../src/Data/UserData"; // ← ここを修正！

const getCurrentUser = (): User | null => {
  const raw = localStorage.getItem("currentUser");
  return raw ? (JSON.parse(raw) as User) : null;
};

// 認可コンポーネント（role でアクセス制御）
const RequireAuth: React.FC<{ allow: Role[] }> = ({ allow }) => {
  const location = useLocation();
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!allow.includes(user.role)) {
    return <Navigate to={user.role === "admin" ? "/manager" : "/customer"} replace />;
  }
  return <Outlet />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<RequireAuth allow={["user"]} />}>
          <Route path="/customer" element={<CustomerPage />} />
        </Route>

        <Route element={<RequireAuth allow={["admin"]} />}>
          <Route path="/manager" element={<ManagerPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
