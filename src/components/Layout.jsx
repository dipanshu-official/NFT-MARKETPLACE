import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FiSearch, FiBell, FiGrid, FiFolder, FiHeart, FiUser, FiSettings, FiLogOut, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../ThemeContext/ThemeContext.jsx';
import logo from '../assets/Navbar/Logo.png'
import img1 from '../assets/Navbar/DashBoard.svg'
import img2 from '../assets/Navbar/bid.svg'
import img3 from '../assets/Navbar/heart.svg'
import img4 from '../assets/Navbar/Collection.svg'
import img5 from '../assets/Navbar/Profile.svg'
import img6 from '../assets/Navbar/setting.svg'
import img7 from '../assets/Navbar/sign-out.svg'
import avatar from '../assets/Navbar/avatar.png'



const Layout = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex min-h-screen ">
            {/* Sidebar */}
            <aside className=" navbar flex flex-col items-center py-8 space-y-8 ">
                <nav className="flex flex-col space-y-10 items-center w-20 ">


                    <NavLink to="/" >
                        <img src={logo} alt="" className={({ isActive }) =>
                            ` rounded-xl ${isActive ? 'text-primary bg-primary/10' : 'text-gray-400 hover:bg-primary/10'}`
                        }
                        />

                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `rounded-xl ${isActive ? 'text-primary bg-primary/10' : 'text-gray-400 hover:bg-primary/10'}`
                        }
                    >
                        <img src={img1} alt="" />
                    </NavLink>
                    <NavLink
                        to="/bid"
                        className={({ isActive }) =>
                            ` rounded-xl ${isActive ? 'text-primary bg-primary/10' : 'text-gray-400 hover:bg-primary/10'}`
                        }
                    >
                        <img src={img2} alt="" />
                    </NavLink>
                    <NavLink
                        to="/saved"
                        className={({ isActive }) =>
                            ` rounded-xl ${isActive ? 'text-primary bg-primary/10' : 'text-gray-400 hover:bg-primary/10'}`
                        }
                    >
                        <img src={img3} alt="" />
                    </NavLink>
                    <NavLink
                        to="/collection"
                        className={({ isActive }) =>
                            ` rounded-xl ${isActive ? 'text-primary bg-primary/10' : 'text-gray-400 hover:bg-primary/10'}`
                        }
                    >
                        <img src={img4} alt="" />
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            ` rounded-xl ${isActive ? 'text-primary bg-primary/10' : 'text-gray-400 hover:bg-primary/10'}`
                        }
                    >
                        <img src={img5} alt="" />
                    </NavLink>
                    <NavLink
                        to="/setting"
                        className={({ isActive }) =>
                            `rounded-xl ${isActive ? 'text-primary bg-primary/10' : 'text-gray-400 hover:bg-primary/10'}`
                        }
                    >
                        <img src={img6} alt="" />
                    </NavLink>

                </nav>
            </aside>
            {/* Main Content */}
            <main className="flex-1 py-6  ">
                <header className="flex justify-between items-center mb-8 px-16 ">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />

                        <input
                            type="text"
                            placeholder="Search Here"
                            className="navbar pl-10 placeholder-gray-600 pr-4 py-2 rounded-lg w-[300px] focus:outline-none focus:ring-2 focus:ring-primary"
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
                        <NavLink to="/profile">
                            <img src={avatar} alt="" />
                        </NavLink>
                    </div>
                </header>

                {/* Dynamic Content */}
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
