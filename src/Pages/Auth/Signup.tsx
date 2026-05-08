import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    alert("Account created (fake)");
    navigate("/login");
  };

  return (
    <div>
      <h1>Signup</h1>
      <button onClick={handleSignup}>Create Account</button>
    </div>
  );
}