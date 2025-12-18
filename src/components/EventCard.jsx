import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/event/${event.id}`)}
            className="group w-full h-full bg-white rounded-[24px] overflow-hidden border-2 border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
        >
            {/* Image Section (Full Bleed / No Padding) */}
            <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />

                {/* Floating Date Badge */}
                <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-gray-900 uppercase tracking-wide">{event.date.split(',')[0] || 'Upcoming'}</span>
                    </div>
                </div>

                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/20 shadow-sm">
                        {event.category}
                    </span>
                </div>
            </div>

            {/* Content Section (Padding Only Here) */}
            <div className="p-5 pt-4 flex flex-col gap-2 flex-1">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-[#074faf] transition-colors">
                    {event.title}
                </h3>

                {/* Venue & Date Meta */}
                <div className="flex flex-col gap-1.5 opacity-80">
                    <p className="text-xs font-semibold text-gray-500 flex items-center gap-2">
                        <span>🗓️</span> {event.date}
                    </p>
                    <p className="text-xs font-semibold text-gray-500 flex items-center gap-2 line-clamp-1">
                        <span>📍</span> {event.venue}
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                        <span className="block text-[10px] font-bold text-gray-400 uppercase">Price</span>
                        <span className="text-xl font-bold text-gray-900">{event.price}</span>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            // Optional: Add like logic here
                        }}
                        className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#074faf] transition-all duration-300 shadow-lg group-hover:scale-110"
                    >
                        <Heart size={18} className="group-hover:fill-white transition-colors" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
