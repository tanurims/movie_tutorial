import React from "react";
import '../css/ThemeToggle.css';
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return(
        <div className="theme-toggle-container">
            <span className={`theme-icon sun ${!isDarkMode ? 'active' : ''}`}>☀️</span>
            <label className="theme-toggle">
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleTheme}
                />
                <span className="slider">
                    <span className="slider-button"></span>
                </span>
            </label>
            <span className={`theme-icon moon ${isDarkMode ? 'active' : ''}`}>🌙</span>
        </div>
    );
};

export default ThemeToggle;