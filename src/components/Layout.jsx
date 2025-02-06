import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FiSearch, FiBell, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../ThemeContext/ThemeContext.jsx';
import logo from '../assets/Navbar/Logo.png';
import img1 from '../assets/Navbar/DashBoard.svg';
import img2 from '../assets/Navbar/bid.svg';
import img3 from '../assets/Navbar/heart.svg';
import img4 from '../assets/Navbar/Collection.svg';
import img5 from '../assets/Navbar/Profile.svg';
import img6 from '../assets/Navbar/setting.svg';
import avatar from '../assets/Navbar/avatar.png';

const Layout = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            {/* Sidebar (Desktop: Left Sidebar, Mobile: Bottom Navbar) */}
            <aside className="navbar 
                              md:w-20 md:h-screen md:fixed md:left-0 md:top-0 
                              flex flex-row md:flex-col justify-between md:justify-start items-center 
                              py-4 md:py-8 space-x-4 md:space-x-0 md:space-y-8 
                              fixed bottom-0 left-0 right-0 w-full border-t border-gray-700 md:border-none z-50">

                {/* ✅ Logo (Hidden on Mobile) */}
                <div className="hidden md:block">
                    <img src={logo} alt="Logo" className="w-10 h-10" />
                </div>

                {/* ✅ Navigation Links - Always Visible */}
                <nav className="flex flex-row md:flex-col items-center gap-6 justify-around w-full px-4 md:px-0">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `p-2 rounded-full `
                        }
                    >
                        {({ isActive }) => (
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.9844 0.5625C10.4648 0.5625 10.0938 0.970703 10.0938 1.45312V7.39062C10.0938 7.91016 10.4648 8.28125 10.9844 8.28125H18.1094C18.5918 8.28125 19 7.91016 19 7.39062V1.45312C19 0.970703 18.5918 0.5625 18.1094 0.5625H10.9844ZM8.01562 0.5625H0.890625C0.371094 0.5625 0 0.970703 0 1.45312V7.39062C0 7.91016 0.371094 8.28125 0.890625 8.28125H8.01562C8.49805 8.28125 8.90625 7.91016 8.90625 7.39062V1.45312C8.90625 0.970703 8.49805 0.5625 8.01562 0.5625ZM0 10.3594V16.2969C0 16.8164 0.371094 17.1875 0.890625 17.1875H8.01562C8.49805 17.1875 8.90625 16.8164 8.90625 16.2969V10.3594C8.90625 9.87695 8.49805 9.46875 8.01562 9.46875H0.890625C0.371094 9.46875 0 9.87695 0 10.3594ZM10.9844 17.1875H18.1094C18.5918 17.1875 19 16.8164 19 16.2969V10.3594C19 9.87695 18.5918 9.46875 18.1094 9.46875H10.9844C10.4648 9.46875 10.0938 9.87695 10.0938 10.3594V16.2969C10.0938 16.8164 10.4648 17.1875 10.9844 17.1875Z"
                                    fill={isActive ? "#6F4FF2" : "#65646A"}
                                />
                            </svg>
                        )}
                    </NavLink>
                    <NavLink
                        to="/bid"
                        className={({ isActive }) => {
                            return `p-2 ${isActive ? 'text-[#6F4FF2]' : 'text-[#65646A]'} rounded-full`;
                        }}
                    >
                        <img src={img2} alt="Bid" className="w-6 h-6" />
                    </NavLink>
                    <NavLink to="/saved" className={({ isActive }) => `p-2 ${isActive ? 'bg-[#6F4FF2] text-white' : 'text-[#65646A]'} rounded-full`}>
                        <img src={img3} alt="Saved" className="w-6 h-6" />
                    </NavLink>
                    <NavLink to="/collection" className={({ isActive }) => `p-2 ${isActive ? 'bg-[#6F4FF2] text-white' : 'text-[#65646A]'} rounded-full`}>
                        <img src={img4} alt="Collection" className="w-6 h-6" />
                    </NavLink>
                    <NavLink to="/profile" className={({ isActive }) => `p-2 ${isActive ? 'bg-[#6F4FF2] text-white' : 'text-[#65646A]'} rounded-full`}>
                        <img src={img5} alt="Profile" className="w-6 h-6" />
                    </NavLink>
                    <NavLink to="/setting" className={({ isActive }) => `p-2 ${isActive ? 'bg-[#6F4FF2] text-white' : 'text-[#65646A]'} rounded-full`}>
                        <img src={img6} alt="Settings" className="w-6 h-6 " />
                    </NavLink>
                </nav>


            </aside>


            {/* Main Content */}
            <main className="flex-1 py-3  md:ml-20">
                {/* Header */}
                <header className="flex justify-between items-center mb-8 px-4 md:px-16">
                    {/* Search Bar */}
                    <div className="relative w-full max-w-[300px] mb-0">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                        <input
                            type="text"
                            placeholder="Search Here"
                            className="navbar pl-10 placeholder-gray-600 pr-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2zzzz focus:ring-purple-500 bg-gray-800 text-white"
                        />
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto justify-between md:justify-start">
                        <button className="p-2 text-gray-400 hover:text-white">
                            <FiBell size={20} />
                        </button>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full"
                        >
                            {theme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />}
                        </button>

                        {/* ✅ Profile Picture (Always Visible in Sidebar) */}
                        <div className="flex
-col items-center ">
                            <NavLink to="/profile">
                                <img src={avatar} alt="Profile" className="w-10 h-10 rounded-full border-2 border-[#6F4FF2]" />
                            </NavLink>
                        </div>
                    </div>
                </header>

                {/* Dynamic Content */}
                <Outlet />
            </main>

        </div>
    );
};

export default Layout;
