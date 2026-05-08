import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Top Nav */}
      <nav className="flex gap-4 p-4 bg-purple-600 text-white">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      {/* Page Content */}
      <main className="p-6 flex-1 bg-gray-100">
        <Outlet />
      </main>

    </div>
  );
}