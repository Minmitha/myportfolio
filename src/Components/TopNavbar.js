import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TopNavbar = () => {
    const location = useLocation();
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Check if the current route is active
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className="bg-[#111111] border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed w-full z-10 md:hidden">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex-1">
                        <span className="self-center text-2xl font-semibold  whitespace-nowrap text-[#FFB400] mr-3 font-serif">Hi</span>
                        <span className="self-center text-2xl font-semibold  whitespace-nowrap text-white font-serif">Welcome,</span>
                    </div>
                    <button
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    <div className={`${isNavOpen ? "block" : "hidden"} w-full`}>
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg bg-[#111111] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    to="/"
                                    className={`block py-2 px-3 text-white rounded-full font-serif ${
                                        isActive("/") ? "bg-[#FFB400]" : "hover:bg-[#FFB400]"
                                    } md:hover:bg-transparent md:p-0 hover:bg-[#FFB400] md:dark:bg-transparent`}
                                    aria-current={isActive("/") ? "page" : undefined}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={`block py-2 px-3 text-white rounded-full font-serif ${
                                        isActive("/about") ? "bg-[#FFB400]" : "hover:bg-[#FFB400]"
                                    } md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/portfolio"
                                    className={`block py-2 px-3 text-white rounded-full font-serif ${
                                        isActive("/portfolio") ? "bg-[#FFB400]" : "hover:bg-[#FFB400]"
                                    } md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contactme"
                                    className={`block py-2 px-3 text-white rounded-full font-serif ${
                                        isActive("/contactme") ? "bg-[#FFB400]" : "hover:bg-[#FFB400]"
                                    } md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default TopNavbar;