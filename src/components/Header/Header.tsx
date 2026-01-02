'use client';
import { FaGlobeAmericas, FaHandsHelping, FaSun } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import './header.css'
import { useState } from "react";

export const Header = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    return (
        <div className="header">
            <div className='header-container'>
                <FaHandsHelping className="haader-fanh" />
                <div>
                    <FaGlobeAmericas className='icon-figlobe' />
                </div>
                <div className='header-icon'>
                    <div className={`theme-btn ${theme === "light" ? "active-sun" : ""}`}
                        onClick={() => setTheme("light")}>
                        <FaSun className="icon-fasun" />
                    </div>
                    <div className={`theme-btn ${theme === "dark" ? "active-moon" : ""}`}
                        onClick={() => setTheme("dark")}>
                        <MdDarkMode className="icon-fasun" />
                    </div>
                </div>
            </div>
        </div>
    )
}