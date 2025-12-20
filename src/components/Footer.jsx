
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/chennai-media-logo.png';

const Footer = () => {
    return (
        <footer className="relative mt-24 bg-white/70 backdrop-blur-xl border-t border-white/40 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
            {/* Ambient Glass Gradients - crucial for the effect to be visible */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-20">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">

                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Chennai Media"
                            className="h-12 object-contain"
                        />
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-8">
                        {['Terms & Conditions', 'Privacy Policy', 'Contact Us', 'List your events'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    {/* QR Code Section */}

                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-500 text-center md:text-left max-w-2xl leading-relaxed">
                        By accessing this page, you confirm that you have read, understood, and agreed to our Terms of Service, Cookie Policy, Privacy Policy, and Content Guidelines. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="text-gray-400 hover:text-gray-900 transition-colors"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

