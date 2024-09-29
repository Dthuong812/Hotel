import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative flex-wrap items-center content-center justify-between w-full p-10 animate-fade-down animate-delay-300 animate-once md:flex">
            {/* Logo */}
            <div className="w-16 h-16">
                <img src="./hotel-sign.png" alt="Hotel Logo" />
            </div>

            <div className="sm:ml-auto block md:hidden text-end mt-[-40px]">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-8 h-8 text-cyan-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
            <ul
                className={`${
                    isMenuOpen ? "block absolute z-10 right-10 " : "hidden"
                }  md:flex items-center justify-between font-semibold text-cyan-600 uppercase text-end `}
            >
                <li className="mb-2 md:mx-10 md:mb-0">
                    <a href="#">Home</a>
                </li>
                <li className="mb-2 md:mx-10 md:mb-0">
                    <a href="#">Properties</a>
                </li>
                <li className="mb-2 md:mx-10 md:mb-0">
                    <a href="#">Agents</a>
                </li>
                <li className="mb-2 md:mx-10 md:mb-0">
                    <a href="#">Blog</a>
                </li>
                <li className="block md:hidden">
                    <a href=""> Login</a>
                </li>
            </ul>

            {/* Login Button (hidden on small screens) */}
            <button className="hidden pt-2 pb-2 pl-4 pr-4 font-semibold border-2 rounded md:block border-cyan-500 text-cyan-600 animate-bounce-slow ">
                Login
            </button>
        </header>
    );
};

export default Header;
