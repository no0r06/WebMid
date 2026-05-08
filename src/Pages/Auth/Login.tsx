import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    // STEP 1: fake confirmation
    const confirmLogin = window.confirm("Are you sure you want to log in?");

    if (!confirmLogin) return;

    // STEP 2: spinner simulation
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // STEP 3: save login state
      localStorage.setItem("auth", "true");

      // STEP 4: redirect to dashboard
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-4">

      <h1 className="text-2xl font-bold text-purple-600">
        Login
      </h1>

      <input className="border p-2" placeholder="Email" />
      <input className="border p-2" placeholder="Password" />

      <button
        onClick={handleLogin}
        className="bg-purple-600 text-white p-2 rounded"
      >
        {loading ? "Loading..." : "Login"}
      </button>

    </div>
  );
}