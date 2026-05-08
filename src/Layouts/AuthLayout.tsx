import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <Outlet />
      </div>

      <div className="mt-4 text-sm">
        <Link to="/login" className="text-purple-600 mr-3">
          Login
        </Link>
        <Link to="/signup" className="text-purple-600">
          Signup
        </Link>
      </div>

    </div>
  );
}