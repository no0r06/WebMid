import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <h1>Settings</h1>

      <label>
        Dark Mode:
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </label>

      <p>Mode: {darkMode ? "Dark" : "Light"}</p>
    </div>
  );
}