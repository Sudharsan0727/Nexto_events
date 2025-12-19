import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Mic, Rocket, Film, Trophy, Smile, Music, Lightbulb, Moon, Medal, Star, Utensils, Users, Dumbbell, Briefcase, Mic2 } from 'lucide-react';

const categories = [
    {
        name: 'Comedy Shows',
        count: '45+ Events',
        icon: Mic,
        color: 'text-pink-500',
        bg: 'bg-pink-50'
    },
    {
        name: 'Amusement Park',
        count: '10+ Events',
        icon: Rocket,
        color: 'text-sky-500',
        bg: 'bg-sky-50'
    },
    {
        name: 'Theatre Shows',
        count: '15+ Events',
        icon: Film,
        color: 'text-teal-500',
        bg: 'bg-teal-50'
    },
    {
        name: 'ICC Men’s T20WC',
        count: 'Match Tickets',
        icon: Trophy,
        color: 'text-indigo-500',
        bg: 'bg-indigo-50'
    },
    {
        name: 'Kids',
        count: '20+ Events',
        icon: Smile,
        color: 'text-yellow-500',
        bg: 'bg-yellow-50'
    },
    {
        name: 'Music Festivals',
        count: '30+ Events',
        icon: Music,
        color: 'text-orange-500',
        bg: 'bg-orange-50'
    },
    {
        name: 'Workshops',
        count: '12+ Events',
        icon: Lightbulb,
        color: 'text-green-500',
        bg: 'bg-green-50'
    },
    {
        name: 'Night life Events',
        count: '18+ Events',
        icon: Moon,
        color: 'text-purple-500',
        bg: 'bg-purple-50'
    },
    {
        name: 'Sports',
        count: '50+ Events',
        icon: Medal,
        color: 'text-red-500',
        bg: 'bg-red-50'
    },
    {
        name: 'Performance',
        count: '10+ Events',
        icon: Star,
        color: 'text-fuchsia-500',
        bg: 'bg-fuchsia-50'
    },
    {
        name: 'Food & Drinks',
        count: '25+ Events',
        icon: Utensils,
        color: 'text-amber-500',
        bg: 'bg-amber-50'
    },
    {
        name: 'Social Mixers',
        count: '15+ Events',
        icon: Users,
        color: 'text-blue-500',
        bg: 'bg-blue-50'
    },
    {
        name: 'Fitness',
        count: '20+ Events',
        icon: Dumbbell,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50'
    },
    {
        name: 'Conferences',
        count: '5+ Events',
        icon: Briefcase,
        color: 'text-slate-500',
        bg: 'bg-slate-50'
    },
    {
        name: 'Open Mics',
        count: '8+ Events',
        icon: Mic2,
        color: 'text-rose-500',
        bg: 'bg-rose-50'
    }
];

const CategoryCarousel = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(checkScroll, 100);
        window.addEventListener('resize', checkScroll);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.addEventListener('scroll', checkScroll);
        }
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', checkScroll);
            if (scrollContainerRef.current) {
                scrollContainerRef.current.removeEventListener('scroll', checkScroll);
            }
        };
    }, []);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    return (
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 relative">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">The Best Of Live Events</h2>
            </div>

            <div className="relative group">
                {/* Navigation Arrow (Left) */}
                <button
                    onClick={scrollLeft}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#333] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-30 ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none invisible'
                        }`}
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x px-1 mx-12"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="min-w-[150px] snap-start cursor-pointer group flex flex-col items-center"
                        >
                            {/* Circular Icon Wrapper with Animated Ring */}
                            <div className="w-[130px] h-[130px] rounded-full p-2 bg-white border-2 border-dashed border-gray-200 group-hover:border-solid group-hover:border-pink-500 transition-all duration-300 relative shadow-sm group-hover:shadow-lg hover:rotate-3">
                                <div className={`w-full h-full rounded-full flex items-center justify-center ${cat.bg} overflow-hidden relative transition-colors duration-300 group-hover:bg-opacity-80`}>
                                    <cat.icon
                                        size={56}
                                        className={`${cat.color} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                                        strokeWidth={1.5}
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="mt-4 px-1 text-center max-w-[140px]">
                                <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-pink-600 transition-colors">
                                    {cat.name}
                                </h3>
                                <p className="text-[10px] font-semibold text-gray-400 mt-1 uppercase tracking-wider">
                                    {cat.count}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrow (Right) */}
                <button
                    onClick={scrollRight}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#333] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-30 ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none translate-x-4'
                        }`}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default CategoryCarousel;
