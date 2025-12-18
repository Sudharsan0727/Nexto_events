
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Apple, Smartphone } from 'lucide-react';
import logo from '../assets/nexto-logo.png';

const Footer = () => {
    return (
        <footer className="relative mt-24 bg-white/70 backdrop-blur-3xl border-t border-white/60 overflow-hidden">

            {/* Ambient Glass Blobs */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#074faf]/5 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-10">

                <div className="flex flex-col lg:flex-row gap-16 mb-20">

                    {/* Left: App Promo Section */}
                    <div className="lg:w-1/3">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-white/50">
                                <img src={logo} alt="N" className="w-6 h-6 object-contain" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-gray-900">Nexto Events</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            Experience the best events on the go.
                        </h2>
                        <p className="text-gray-500 mb-8 max-w-sm">
                            Download our award-winning app to book tickets, manage RSVPs, and discover new experiences anywhere, anytime.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center gap-3 bg-gray-900/90 text-white px-5 py-3 rounded-2xl hover:bg-black hover:scale-105 transition-all shadow-xl shadow-gray-200 backdrop-blur-md">
                                <Apple size={24} />
                                <div className="text-left">
                                    <p className="text-[10px] font-medium uppercase tracking-wider opacity-80">Download on the</p>
                                    <p className="text-sm font-bold leading-none">App Store</p>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 bg-white/50 text-gray-900 px-5 py-3 rounded-2xl hover:bg-white transition-all shadow-lg shadow-gray-100 border border-white/60 backdrop-blur-md">
                                <Smartphone size={24} />
                                <div className="text-left">
                                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">Get it on</p>
                                    <p className="text-sm font-bold leading-none">Google Play</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right: Links Grid */}
                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6">Discovery</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                {['Concerts', 'Festivals', 'Workshops', 'Sports', 'Virtual'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-[#074faf] transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6">Organizers</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                {['Sell Tickets', 'Event Manager', 'Check-in App', 'Pricing', 'Resources'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-[#074faf] transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                {['About Us', 'Careers', 'Press', 'Blog', 'Contact'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-[#074faf] transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-500">
                                {['Help Center', 'Terms', 'Privacy', 'Cookies', 'Sitemap'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-[#074faf] transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm font-medium text-gray-500 text-center md:text-left">
                        © 2025 Nexto Events. Powered by <a href="https://nextodigital.in" className="text-[#074faf] hover:underline font-bold">Nexto Digital</a>
                    </p>

                    <div className="flex gap-4">
                        {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#074faf] transition-all duration-300 shadow-sm border border-white/50">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

