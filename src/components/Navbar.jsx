import React, { useState } from 'react';
import { Search, Menu, X, Globe, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/nexto-logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex justify-between h-20 items-center">

                        {/* Brand */}
                        <Link to="/" className="flex items-center gap-2 z-20">
                            <img src={logo} alt="Nexto Events Logo" className="w-10 h-10 object-contain" />
                            <span className="font-bold text-xl tracking-tight text-gray-900">Nexto Events</span>
                        </Link>

                        {/* Centered Search Pill */}
                        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md">
                            <div className="w-full relative shadow-sm hover:shadow-md transition-shadow duration-200 rounded-full">
                                <input
                                    type="text"
                                    placeholder="Search events..."
                                    className="w-full py-3 pl-6 pr-12 bg-white border border-gray-200 rounded-full text-sm font-medium placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
                                />
                                <button className="absolute right-2 top-1.5 p-1.5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                                    <Search size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="hidden lg:flex items-center gap-6 z-20">
                            <nav className="flex gap-6">
                                <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">Events</Link>
                                <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">Dining</Link>
                                <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">Experiences</Link>
                            </nav>

                            <div className="h-4 w-px bg-gray-200"></div>

                            <div className="flex items-center gap-3">
                                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                                    <Globe size={20} />
                                </button>
                                <button className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 hover:shadow-md transition-all">
                                    <Menu size={18} className="text-gray-500" />
                                    <UserCircle size={24} className="text-gray-400" />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="lg:hidden flex items-center z-20">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 text-gray-600"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

            </nav>

            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <>
                    <style>
                        {`
                        @keyframes mobileMenuCorner {
                            from { opacity: 0; transform: scale(0); }
                            to { opacity: 1; transform: scale(1); }
                        }
                    `}
                    </style>
                    <div className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-white z-40 p-6 overflow-y-auto shadow-xl border-t border-gray-100 animate-[mobileMenuCorner_0.4s_ease-out] origin-top-right">
                        <div className="space-y-6">
                            <Link to="/" className="block text-xl font-semibold text-gray-900">Events</Link>
                            <Link to="/" className="block text-xl font-semibold text-gray-900">Dining</Link>
                            <Link to="/" className="block text-xl font-semibold text-gray-900">Experiences</Link>
                            <hr className="border-gray-100" />
                            <Link to="/login" className="block text-lg text-gray-600">Log in</Link>
                            <Link to="/signup" className="block text-lg text-gray-600">Sign up</Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
