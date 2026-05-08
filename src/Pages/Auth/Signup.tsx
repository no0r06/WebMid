export default function Signup() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-3xl font-bold text-purple-600 text-center">
        Sign Up
      </h1>

      <input className="border p-2 rounded" placeholder="Username" />
      <input className="border p-2 rounded" placeholder="Email" />
      <input className="border p-2 rounded" placeholder="Password" />

      <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded transition">
        Create Account
      </button>
    </div>
  );
}