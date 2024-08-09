import React from "react";
import { useState } from "react";
import Sun from "./Sun.svg?react";
import Moon from "./Moon.svg?react";
import "./DarkMode.css";
import { useEffect } from "react";
const DarkMode = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("selectedTheme", newTheme);
  };
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, []);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="dark_mode">
      <input
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
