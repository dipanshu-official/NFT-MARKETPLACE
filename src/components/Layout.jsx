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
            <aside className={`${theme === "dark" ? "navbar" : "bg-[#FFFFFF]"}
                              md:w-20 md:h-screen md:fixed md:left-0 md:top-0 
                              flex flex-row md:flex-col justify-between md:justify-start items-center 
                              py-4 md:py-8 space-x-4 md:space-x-0 md:space-y-8 
                              fixed bottom-0 left-0 right-0 w-full border-t border-gray-700 md:border-none z-50`}>

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
                            return `p-2  rounded-full`;
                        }}
                    >
                        {({ isActive }) => (

                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="19" height="19" fill={isActive ? '#6F4FF2' : "#65646A"} />
                                <defs>
                                    <pattern id="pattern0_101_6260" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlink:href="#image0_101_6260" transform="scale(0.00444444)" />
                                    </pattern>
                                    <image id="image0_101_6260" width="225" height="225" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAYAAAA+s9J6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAzLTExVDIwOjU3OjQwKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAzLTEyVDE2OjEyOjE2KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMy0xMlQxNjoxMjoxNiswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MjVhZjExNy01MmQ5LTg4NDQtOTM5My00ZjQ5MDA0YTQ2MTQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0NGU3ZGM1ZS1mYTkwLTEwNDAtYjg4OS1kYmJlMDEyNTE0M2YiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NmNjYjU4MS00OTFkLWQ3NDItOTdjNC0wYTk0ZWEyODhlNjYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2Y2NiNTgxLTQ5MWQtZDc0Mi05N2M0LTBhOTRlYTI4OGU2NiIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0xMVQyMDo1Nzo0MCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNDA5YmEwOC0wN2NhLWZiNDgtOGI0NC01MjZiODMxYzYzY2IiIHN0RXZ0OndoZW49IjIwMjItMDMtMTFUMjA6NTc6NDArMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzI1YWYxMTctNTJkOS04ODQ0LTkzOTMtNGY0OTAwNGE0NjE0IiBzdEV2dDp3aGVuPSIyMDIyLTAzLTEyVDE2OjEyOjE2KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FcwJzQAACjNJREFU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" />
                                </defs>
                            </svg>
                        )}

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
            <main className={`flex-1 py-3  md:ml-20 ${theme === "dark" ? "bg-[#131129]" : "bg-[#F2F2F2]"}`}>
                {/* Header */}
                <header className="flex justify-between items-center mb-8 px-4 md:px-16">
                    {/* Search Bar */}
                    <div className="relative w-full max-w-[300px] mb-0">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                        <input
                            type="text"
                            placeholder="Search Here"
                            className={`${theme === "dark" ? "navbar" : "bg-white"} pl-10 placeholder-gray-600 pr-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2zzzz focus:ring-purple-500 bg-gray-800 ${theme === "dark" ? "text-white" : "text-black"}`}
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
