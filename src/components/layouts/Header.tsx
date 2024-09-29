import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className=" animate-fade-down animate-delay-300 animate-once md:flex  w-full content-center items-center justify-between p-10 flex-wrap">
            {/* Logo */}
            <div className="w-16 h-16">
                <img src="./hotel-sign.png" alt="Hotel Logo" />
            </div>

            <div className="sm:ml-auto block md:hidden text-end mt-[-30px]">
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
                    isMenuOpen ? "block" : "hidden"
                }  md:flex items-center justify-between font-semibold text-cyan-600 uppercase text-end `}
            >
                <li className="md:ml-10 md:mr-10">
                    <a href="#">Home</a>
                </li>
                <li className="md:ml-10 md:mr-10">
                    <a href="#">Properties</a>
                </li>
                <li className="md:ml-10 md:mr-10">
                    <a href="#">Agents</a>
                </li>
                <li className="md:ml-10 md:mr-10">
                    <a href="#">Blog</a>
                </li>
                <li className="block md:hidden">
                    <a href=""> Login</a>
                </li>
            </ul>

            {/* Login Button (hidden on small screens) */}
            <button className="hidden md:block border-2 rounded border-cyan-500 text-cyan-600 pl-4 pr-4 pt-2 pb-2 font-semibold animate-bounce-slow ">
                Login
            </button>
        </header>
    );
};

export default Header;
