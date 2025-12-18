import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const events = [
    {
        id: 1,
        title: "Corpor ART 2025",
        date: "Dec 5, 2025 • 4:00 PM",
        venue: "Chennai Trade Centre",
        price: "₹2500 onwards",
        image: "/corpor-art-2025.png",
        poster: "/corpor-art-2025.png",
        category: "Events/Sounds"
    },
    {
        id: 5,
        title: "Alaap Music Academy Chennai",
        date: "Feb 20, 2025 • 6:00 PM",
        venue: "Chennai",
        price: "₹999 onwards",
        image: "/alaap-music-academy-banner.jpg",
        poster: "/alaap-music-academy.jpg",
        category: "Music Events"
    }
];

const CarouselBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % events.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full relative overflow-hidden min-h-[600px] md:h-[600px] flex items-center justify-center bg-white group hover:cursor-default py-12 md:py-0">

            {/* 1. Ambient Background Layer (Vibrant Blur without solid white side) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden bg-white">
                    <img
                        key={currentSlide}
                        src={events[currentSlide].image}
                        alt="Background"
                        className="w-full h-full object-cover blur-[10px] opacity-100 scale-150 transition-all duration-1000 origin-center"
                    />
                </div>

                {/* Uniform Lighter Overlay (Glass Effect) */}
                <div className="absolute inset-0 bg-white/60 z-10 transition-colors duration-1000"></div>

                {/* Bottom Fade to White (Blends into page content below) */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent z-10"></div>
            </div>

            {/* 2. Main Layout Container */}
            <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-12 z-20 h-full flex items-center justify-between">

                {/* LEFT ARROW (Absolute Positioning for Clean Layout) */}
                <button
                    onClick={prevSlide}
                    className="absolute left-6 z-30 hidden md:flex w-10 h-10 rounded-full bg-white/90 hover:bg-white items-center justify-center transition-all shadow-md text-gray-900 border border-gray-100"
                >
                    <ChevronLeft size={28} />
                </button>

                {/* CENTER CONTENT GRID */}
                <div key={currentSlide} className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center h-full px-2 md:px-24">

                    {/* Text Section (Left - Adjusted 7 columns) */}
                    <div className="md:col-span-7 lg:col-span-7 flex flex-col items-center md:items-start justify-center space-y-4 md:pr-4 animate-[swipeInText_1s_cubic-bezier(0.25,1,0.5,1)] text-center md:text-left order-2 md:order-1">

                        <style>
                            {`
                                @keyframes swipeInText {
                                    from { opacity: 0; clip-path: inset(0 100% 0 0); transform: translateX(-20px); }
                                    to { opacity: 1; clip-path: inset(0 0 0 0); transform: translateX(0); }
                                }
                                @keyframes swipeInPoster {
                                    from { opacity: 0; clip-path: inset(0 0 0 100%); transform: translateX(20px); }
                                    to { opacity: 1; clip-path: inset(0 0 0 0); transform: translateX(0); }
                                }
                            `}
                        </style>

                        <div className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-widest opacity-80">
                            {events[currentSlide].date}
                        </div>

                        {/* Title: Size Increased */}
                        <h1 className="text-[32px] md:text-[45px] lg:text-[55px] font-bold text-[#111] leading-[1.1] tracking-normal">
                            {events[currentSlide].title}
                        </h1>

                        <div className="space-y-2 md:space-y-3 pt-2">
                            <p className="text-lg md:text-2xl font-bold text-gray-800">
                                {events[currentSlide].venue}
                            </p>
                            <p className="text-base md:text-lg font-bold text-gray-600">
                                {events[currentSlide].price}
                            </p>
                        </div>

                        <div className="pt-6 md:pt-8 w-full md:w-auto">
                            <button
                                onClick={() => navigate(`/event/${events[currentSlide].id}`)}
                                className="bg-[#111] text-white h-12 md:h-14 px-8 md:px-10 rounded-xl font-bold text-sm md:text-base tracking-wide hover:bg-black hover:scale-105 transition-all shadow-lg w-full md:w-auto"
                            >
                                Book tickets
                            </button>
                        </div>
                    </div>

                    {/* Poster Section (Right - Increased Size 5 columns) */}
                    <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-end items-center relative animate-[swipeInPoster_1s_cubic-bezier(0.25,1,0.5,1)] order-1 md:order-2">
                        <div className="relative w-[280px] xs:w-[300px] md:w-[340px] aspect-[3/4] md:h-[480px] rounded-[24px] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                            <img
                                src={events[currentSlide].poster}
                                alt={events[currentSlide].title}
                                className="w-full h-full object-cover"
                            />
                            {/* Inner Border for sharpness */}
                            <div className="absolute inset-0 border border-black/5 rounded-[24px]"></div>
                        </div>
                    </div>

                </div>

                {/* RIGHT ARROW */}
                <button
                    onClick={nextSlide}
                    className="absolute right-6 z-30 hidden md:flex w-10 h-10 rounded-full bg-white/90 hover:bg-white items-center justify-center transition-all shadow-md text-gray-900 border border-gray-100"
                >
                    <ChevronRight size={28} />
                </button>

            </div>

            {/* Mobile Dots */}
            {/* Pagination Dots (Universal) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                {events.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index
                            ? 'w-6 h-2 bg-black'
                            : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
};

export default CarouselBanner;
