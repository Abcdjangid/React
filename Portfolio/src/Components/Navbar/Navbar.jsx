import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Scroll to section with offset
    const handleScrollToSection = (id, offset = 80) => {
        const section = document.getElementById(id);
        if (section) {
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: sectionPosition,
                behavior: "smooth",
            });
        }
        setIsOpen(false); // Close menu after clicking a link
    };

    return (
        <nav className="Navbar">
            <a className="logo" onClick={() => handleScrollToSection("Home")}>Chitvan</a>

            <button className="menu-toggle" onClick={toggleMenu}>
                {isOpen ? "✖" : "☰"}
            </button>

            <div className={`Navbar-right ${isOpen ? "open" : ""}`}>
                <a onClick={() => handleScrollToSection("Home", 160)}>Home</a>
                <a onClick={() => handleScrollToSection("Services", 90)}>Services</a>
                <a onClick={() => handleScrollToSection("Works", 150)}>Works</a>
                <a onClick={() => handleScrollToSection("Resume", 80)}>Resume</a>
                <a onClick={() => handleScrollToSection("Contact", 80)}>Contact</a>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
