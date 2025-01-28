import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FiSearch, FiBell, FiGrid, FiFolder, FiHeart, FiUser, FiSettings, FiLogOut, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../ThemeContext/ThemeContext.jsx';

const Layout = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex min-h-screen ">
            {/* Sidebar */}
            <aside className="w-20 navbar flex flex-col items-center py-8 space-y-8">
                <NavLink to="/" className="text-2xl font-bold ">
                    N
                </NavLink>
                <nav className="flex flex-col space-y-6">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `p-3 rounded-xl ${isActive ? 'text-primary bg-primary/10' : 'text-gray-400 hover:bg-primary/10'}`
                        }
                    >
                        <FiGrid size={20} />
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `p-3 rounded-xl ${isActive ? 'text-primary bg-primary/10' : 'text-gray-400 hover:bg-primary/10'}`
                        }
                    >
                        <FiFolder size={20} />
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 py-8  ">
                <header className="flex justify-between items-center mb-8 mx-8">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                        <input
                            type="text"
                            placeholder="Search Here"
                            className="navbar pl-10 pr-4 py-2 rounded-lg w-[300px] focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
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
                    </div>
                </header>

                {/* Dynamic Content */}
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
