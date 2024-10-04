import React, { useState } from "react";
import "./Light.css"; // Import the custom CSS file

function Light() {
  // State to manage light/dark mode
  const [theme, setTheme] = useState("light");

  // Function to toggle between light and dark mode
  const toggleTheme = (mode) => {
    setTheme(mode);
  };

  return (
    <div className={`Light ${theme}`}>
      <header className="Light-header">
        <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
        <p>Toggle between Light and Dark Mode!</p>

        {/* Buttons to switch themes */}
        <button onClick={() => toggleTheme("light")}>Light Mode</button>
        <button onClick={() => toggleTheme("dark")}>Dark Mode</button>
      </header>
    </div>
  );
}

export default Light;
