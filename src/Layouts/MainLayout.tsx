import { Outlet, Link } from "react-router-dom";
import { authService } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();

  const logout = () => {
    authService.logout();
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <Link to="/dashboard">Dashboard</Link>{" | "}
        <Link to="/profile">Profile</Link>{" | "}
        <Link to="/settings">Settings</Link>{" | "}
        <button onClick={logout}>Logout</button>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}