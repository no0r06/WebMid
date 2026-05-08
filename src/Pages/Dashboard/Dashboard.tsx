import { useState } from "react";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  const notify = (type: string) => {
    if (type === "success") setMessage("Success triggered");
    if (type === "warning") setMessage("Warning triggered");
    if (type === "fail") setMessage("Fail triggered");

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="flex flex-col gap-4">

      <h1 className="text-2xl font-bold text-purple-600">
        Dashboard
      </h1>

      <div className="flex gap-3">
        <button
          onClick={() => notify("success")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Success
        </button>

        <button
          onClick={() => notify("warning")}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Warning
        </button>

        <button
          onClick={() => notify("fail")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Fail
        </button>
      </div>

      {message && (
        <div className="mt-4 p-2 bg-gray-200 rounded">
          {message}
        </div>
      )}

    </div>
  );
}