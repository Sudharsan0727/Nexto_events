
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { events } from '../data/mockEvents';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import artist1 from '../assets/artists/artist1.png';
import artist2 from '../assets/artists/artist2.png';
import artist3 from '../assets/artists/artist3.png';
import artist4 from '../assets/artists/artist4.png';
import {
    Calendar, MapPin, ArrowLeft, Globe, Clock, Users, Plus, Ticket, ChevronDown, X, Layers, Info, Smile, PawPrint, Share2, Heart, ShieldCheck, Tag
} from 'lucide-react';

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const event = events.find(e => e.id === parseInt(id));
    const [activeFaq, setActiveFaq] = useState(null);
    const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

    // Full Event Guide Data 
    const fullEventGuide = [
        { icon: Globe, label: "Language", value: "Tamil, Telugu, English, Malayalam", color: "text-blue-600", bg: "bg-blue-50" },
        { icon: Clock, label: "Duration", value: "5 Hours and 15 Minutes", color: "text-green-600", bg: "bg-green-50" },
        { icon: Ticket, label: "Tickets Needed For", value: "3 yrs & above", color: "text-orange-600", bg: "bg-orange-50" },
        { icon: Info, label: "Entry Allowed For", value: "All ages", color: "text-purple-600", bg: "bg-purple-50" },
        { icon: Layers, label: "Layout", value: "Outdoor", color: "text-indigo-600", bg: "bg-indigo-50" },
        { icon: Users, label: "Seating Arrangement", value: "Standing", color: "text-teal-600", bg: "bg-teal-50" },
        { icon: Smile, label: "Kid Friendly?", value: "Yes", color: "text-yellow-600", bg: "bg-yellow-50" },
        { icon: PawPrint, label: "Pet Friendly?", value: "No", color: "text-red-600", bg: "bg-red-50" },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!event) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Event not found</h2>
                <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 relative">
            <Navbar />

            {/* --- AMBIENT BACKGROUND LAYER --- */}
            <div className="absolute inset-0 h-[800px] z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-white">
                    <img
                        src={event.detailsImage || event.image || event.poster}
                        alt="Ambient Background"
                        className="w-full h-full object-cover blur-[60px] opacity-40 scale-150 origin-top"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/80 to-white"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* LEFT CONTENT COLUMN (66%) */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Event Image */}
                        <div className="h-[280px] md:h-[500px] group relative">
                            <img
                                src={event.detailsImage || event.image || event.poster}
                                alt={event.title}
                                className="w-full h-full object-cover rounded-[24px] md:rounded-[32px] shadow-2xl"
                            />
                            {/* Mobile Category Badge Overlay */}
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full z-10 md:hidden">
                                <p className="text-xs font-bold text-[#111] uppercase tracking-wider">{event.category}</p>
                            </div>
                        </div>

                        {/* MOBILE ONLY: Title & Key Info */}
                        <div className="md:hidden space-y-4">
                            <h1 className="text-3xl font-black text-[#111] leading-tight tracking-tight">{event.title}</h1>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                                        <Calendar size={16} className="text-orange-600" />
                                    </div>
                                    <p className="font-bold text-sm">{event.date} • {event.time || '4:00 PM'}</p>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                        <MapPin size={16} className="text-blue-600" />
                                    </div>
                                    <p className="font-bold text-sm">{event.venue}</p>
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <section className="border-b border-gray-200 pb-8">
                            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">About the Event</h2>
                            <div className="relative">
                                <div className={`text-gray-700 text-[15px] leading-7 transition-all duration-300 ${activeFaq === 'description' ? '' : 'max-h-[120px] overflow-hidden'}`}>
                                    <p className="mb-4">🎭 <strong>{event.title.toUpperCase()} - The Experience 2025!</strong> ✨</p>
                                    <p className="mb-4">Get ready to step into a world of artistic brilliance! <strong>{event.venue}</strong> presents {event.title}, an electrifying live performance packed with mind-blowing music, dazzling lights, stunning visuals, and an atmosphere that you simply cannot miss.</p>
                                    <p>From immersive setups to an artist lineup that screams perfection, we are bringing you the grandest celebration the city has ever seen. Join us for a night of rhythm, energy, and pure magic. 🔥🎶</p>
                                </div>
                                <button
                                    onClick={() => setActiveFaq(activeFaq === 'description' ? null : 'description')}
                                    className="flex items-center gap-1 text-[#111] font-bold text-sm mt-2 hover:opacity-70 transition-opacity"
                                >
                                    {activeFaq === 'description' ? 'Show less' : 'Show more'}
                                    <ChevronDown size={16} className={activeFaq === 'description' ? 'rotate-180' : ''} />
                                </button>
                            </div>
                        </section>

                        {/* Event Guide Pills */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-[#111]">Event Guide</h3>
                                <button onClick={() => setIsGuideModalOpen(true)} className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
                                    See all <span className="text-lg">›</span>
                                </button>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-blue-50 p-2.5 rounded-lg text-blue-600"><Globe size={20} /></div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Language</p>
                                        <p className="font-bold text-[#111]">English/Tamil</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-green-50 p-2.5 rounded-lg text-green-600"><Clock size={20} /></div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Duration</p>
                                        <p className="font-bold text-[#111]">3-4 Hours</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-orange-50 p-2.5 rounded-lg text-orange-600"><Users size={20} /></div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Age Limit</p>
                                        <p className="font-bold text-[#111]">18+ Years</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Artists Section */}
                        <section>
                            <h3 className="text-xl font-bold text-[#111] mb-10">Artist Lineup</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-16">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="group relative flex items-center gap-4 cursor-pointer">
                                        <div className="relative w-20 h-20 md:w-32 md:h-32 shrink-0">
                                            <div className="absolute inset-0 bg-[#111] rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 hidden md:block"></div>
                                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md md:shadow-xl border border-gray-100">
                                                <img
                                                    src={i === 1 ? artist1 : i === 2 ? artist2 : i === 3 ? artist3 : artist4}
                                                    alt="Artist"
                                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                        </div>
                                        <div className="relative z-10 flex-1">
                                            <div className="flex items-center gap-2 mb-1 md:mb-2">
                                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600"></div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Performer</p>
                                            </div>
                                            <h4 className="text-lg md:text-2xl font-bold text-[#111] tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                                                {i === 1 ? 'Hiphop Tamizha' : 'Artist Name ' + i}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Venue Section */}
                        <section>
                            <h3 className="text-xl font-bold text-[#111] mb-6">Venue</h3>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 text-[#111]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-[#111]">{event.venue}</h4>
                                        <p className="text-gray-500 text-sm max-w-sm mt-1 font-medium">Chennai Trade Centre, Nandambakkam, Chennai, Tamil Nadu 600089</p>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#111] rounded-xl font-bold text-sm text-[#111] hover:bg-[#111] hover:text-white transition-colors">
                                    <MapPin size={16} /> Get Directions
                                </button>
                            </div>
                        </section>

                    </div>

                    {/* RIGHT: Details Card (Sticky 33%) - DESKTOP ONLY */}
                    <div className="hidden lg:block lg:col-span-1 sticky top-24">
                        <div className="relative group">

                            {/* AMBIENT SOFT GLOW BEHIND CARD */}
                            <div className="absolute -inset-10 bg-red-500/5 rounded-full blur-[80px] -z-10 transition-opacity duration-1000"></div>

                            {/* COMPACT CRYSTAL GLASS BODY */}
                            <div className="relative bg-white/70 backdrop-blur-[24px] rounded-[32px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] border border-white/60 flex flex-col h-fit overflow-hidden">

                                <h1 className="text-[26px] font-black text-[#000] leading-tight mb-6 tracking-tight relative z-10">
                                    {event.title}
                                </h1>

                                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200 relative z-10">
                                    {/* Item Row */}
                                    <div className="flex items-center gap-4 text-[#1e293b]">
                                        <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center shadow-sm border border-pink-100">
                                            <Tag size={18} className="text-pink-600" />
                                        </div>
                                        <p className="text-[17px] font-bold tracking-tight">{event.category}</p>
                                    </div>

                                    {/* Item Row */}
                                    <div className="flex items-center gap-4 text-[#1e293b]">
                                        <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center shadow-sm border border-orange-100">
                                            <Calendar size={18} className="text-orange-600" />
                                        </div>
                                        <p className="text-[17px] font-bold tracking-tight">{event.date} • {event.time || '4:00 PM'}</p>
                                    </div>

                                    {/* Item Row */}
                                    <div className="flex items-center gap-4 text-[#1e293b]">
                                        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm border border-blue-100">
                                            <MapPin size={18} className="text-blue-600" />
                                        </div>
                                        <p className="text-[17px] font-bold tracking-tight">{event.venue.split(',')[0]}</p>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex flex-col">
                                            <p className="text-[14px] text-gray-500 font-medium mb-0.5">Starts from</p>
                                            <p className="text-2xl font-bold text-[#000] tracking-tight">{event.price.split(' ')[0]}</p>
                                        </div>
                                        <button
                                            onClick={() => navigate(`/event/${id}/book`)}
                                            className="bg-[#111] text-white px-7 h-[52px] rounded-xl font-bold text-[15px] uppercase tracking-wider hover:bg-[#ff084e] hover:scale-105 hover:shadow-[0_10px_20px_rgba(255,8,78,0.3)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95 shadow-lg shadow-black/5 flex items-center justify-center">
                                            BOOK TICKETS
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                {/* --- FOOTER BANNER --- */}
                <div className="w-full rounded-[40px] overflow-hidden mt-20 relative bg-gradient-to-br from-[#0a0a0b] via-[#111] to-[#6366f1]/20 text-white p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5">

                    {/* Decorative Gradient Glows */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6366f1]/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#a855f7]/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div className="max-w-xl z-10">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                            Elevate Your Experience <br />
                            <span className="text-gray-400">With Premium Access</span>
                        </h2>
                        <button className="bg-white text-[#111] px-8 py-3 rounded-xl font-bold hover:bg-[#6366f1] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl shadow-black/20">
                            Explore Premium
                        </button>
                    </div>
                </div>

            </div>

            <Footer />

            {/* --- MOBILE/TABLET FIXED BOTTOM BAR --- */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 px-6 lg:hidden z-50 safe-area-bottom flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Price</p>
                    <p className="text-2xl font-black text-[#111] tracking-tight">{event.price.split(' ')[0]}</p>
                </div>
                <button
                    onClick={() => navigate(`/event/${id}/book`)}
                    className="bg-[#111] text-white px-8 h-12 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#ff084e] shadow-lg shadow-black/20 flex items-center gap-2"
                >
                    <Ticket size={18} /> Book Now
                </button>
            </div>

            {/* --- EVENT GUIDE MODAL --- */}
            {isGuideModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsGuideModalOpen(false)}></div>
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900">Event Guide</h3>
                            <button onClick={() => setIsGuideModalOpen(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200"><X size={18} /></button>
                        </div>
                        <div className="p-6 max-h-[70vh] overflow-y-auto">
                            <div className="space-y-6">
                                {fullEventGuide.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                                            <p className="font-bold text-gray-900 text-[15px]">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventDetails;
