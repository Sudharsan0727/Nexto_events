
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../data/mockEvents';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    ArrowLeft, Calendar, MapPin, Ticket, ChevronRight,
    Info, ShieldCheck, CreditCard, ChevronDown, Plus, Minus,
    Star, Zap, Award, Crown, Music
} from 'lucide-react';

const BookingPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const event = events.find(e => e.id === parseInt(id));
    const [selectedTickets, setSelectedTickets] = useState({});
    const [totalAmount, setTotalAmount] = useState(0);

    // Mock Ticket Rates
    const ticketRates = [
        {
            id: 'vip',
            name: 'VIP Pass',
            price: 5000,
            capacity: 50,
            color: 'bg-amber-500',
            bg: 'bg-amber-100',
            border: 'border-amber-500',
            text: 'text-amber-700'
        },
        {
            id: 'platinum',
            name: 'Platinum Pass',
            price: 2000,
            capacity: 200,
            color: 'bg-pink-500',
            bg: 'bg-pink-100',
            border: 'border-pink-500',
            text: 'text-pink-700'
        },
        {
            id: 'gold',
            name: 'Gold Pass',
            price: 1500,
            capacity: 200,
            color: 'bg-blue-500',
            bg: 'bg-blue-100',
            border: 'border-blue-500',
            text: 'text-blue-700'
        },
        {
            id: 'silver',
            name: 'Silver Pass',
            price: 1000,
            capacity: 150,
            color: 'bg-indigo-500',
            bg: 'bg-indigo-100',
            border: 'border-indigo-500',
            text: 'text-indigo-700'
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const updateQuantity = (id, delta) => {
        const currentQty = selectedTickets[id] || 0;
        const rate = ticketRates.find(r => r.id === id);

        // Check capacity limit when adding
        if (delta > 0 && currentQty >= rate.capacity) return;

        const newQty = Math.max(0, currentQty + delta);

        const newSelected = { ...selectedTickets, [id]: newQty };
        setSelectedTickets(newSelected);

        // Update Total
        let total = 0;
        ticketRates.forEach(rate => {
            total += (newSelected[rate.id] || 0) * rate.price;
        });
        setTotalAmount(total);
    };

    const getAvailability = (id) => {
        const rate = ticketRates.find(r => r.id === id);
        const booked = selectedTickets[id] || 0;
        return rate.capacity - booked;
    };

    if (!event) return null;

    return (
        <div className="min-h-screen bg-[#f1f5f9] font-sans selection:bg-indigo-100">
            <Navbar />

            {/* Sticky Header */}
            <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors border border-gray-200"
                        >
                            <ArrowLeft size={18} className="text-gray-700" />
                        </button>
                        <div>
                            <h1 className="text-xl font-black text-gray-900 leading-tight tracking-tight">{event.title}</h1>
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">
                                <span>{event.date}</span>
                                <span>•</span>
                                <span>{event.venue.split(',')[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left: Layout Diagram */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <div className="bg-white rounded-[40px] p-6 md:p-12 border border-blue-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-12 relative z-10">
                                <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                                    <MapPin size={24} className="text-indigo-600" /> Venue Map
                                </h2>
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest border border-gray-200 px-3 py-1 rounded-full">
                                    Stage Front
                                </div>
                            </div>

                            {/* --- THE STAGE (Rectangle as per sketch) --- */}
                            <div className="flex justify-center mb-12 relative z-10">
                                <div className="w-[80%] h-24 bg-[#1e1e2e] rounded-xl shadow-2xl flex items-center justify-center relative overflow-hidden ring-4 ring-gray-100">
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                    <span className="text-white/90 font-black tracking-[0.5em] text-2xl uppercase font-heading">STAGE</span>
                                </div>
                            </div>

                            {/* --- SEATING LAYOUT (Stacked Blocks) --- */}
                            <div className="max-w-3xl mx-auto relative flex flex-col items-center gap-4">

                                {/* ROW 1: VIP (4 Blocks Row) */}
                                <div className="w-full flex justify-center gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={`vip-${i}`}
                                            onClick={() => updateQuantity('vip', 1)}
                                            className={`flex-1 h-28 bg-amber-50 rounded-2xl border-2 ${selectedTickets['vip'] ? 'border-amber-500 bg-amber-100' : 'border-amber-200 border-dashed'} flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 transition-all active:scale-95 group shadow-sm hover:shadow-lg`}
                                        >
                                            <Crown size={20} className="text-amber-500 mb-1 group-hover:scale-110 transition-transform" />
                                            <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider">VIP {i}</span>
                                            <span className="text-sm font-bold text-gray-900">₹5000</span>
                                            <span className="text-[9px] font-bold text-amber-600 mt-1">{Math.floor(getAvailability('vip') / 4)} left</span>
                                        </div>
                                    ))}
                                </div>

                                {/* ROW 2: PLATINUM (Single Full Width Bar) */}
                                <div
                                    onClick={() => updateQuantity('platinum', 1)}
                                    className={`w-full h-24 bg-pink-50 rounded-2xl border-2 ${selectedTickets['platinum'] ? 'border-pink-500 bg-pink-100' : 'border-pink-200'} flex items-center justify-between px-8 cursor-pointer hover:-translate-y-1 transition-all active:scale-95 group shadow-sm hover:shadow-lg`}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black uppercase text-pink-500 tracking-wider">Platinum</span>
                                        <span className="text-sm text-pink-400 font-medium">Zone A</span>
                                    </div>
                                    <span className="text-xl font-bold text-gray-900">₹2000</span>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-bold text-pink-500">{getAvailability('platinum')} seats left</span>
                                        {selectedTickets['platinum'] > 0 && <span className="bg-pink-500 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-md text-xs mt-1">{selectedTickets['platinum']}</span>}
                                    </div>
                                </div>

                                {/* ROW 3: GOLD (Single Full Width Bar) */}
                                <div
                                    onClick={() => updateQuantity('gold', 1)}
                                    className={`w-full h-20 bg-blue-50 rounded-2xl border-2 ${selectedTickets['gold'] ? 'border-blue-500 bg-blue-100' : 'border-blue-200'} flex items-center justify-between px-8 cursor-pointer hover:-translate-y-1 transition-all active:scale-95 group shadow-sm hover:shadow-lg`}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black uppercase text-blue-500 tracking-wider">Gold</span>
                                        <span className="text-sm text-blue-400 font-medium">Zone B</span>
                                    </div>
                                    <span className="text-xl font-bold text-gray-900">₹1500</span>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-bold text-blue-500">{getAvailability('gold')} seats left</span>
                                        {selectedTickets['gold'] > 0 && <span className="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-md text-xs mt-1">{selectedTickets['gold']}</span>}
                                    </div>
                                </div>

                                {/* ROW 4: SILVER (Single Full Width Bar) */}
                                <div
                                    onClick={() => updateQuantity('silver', 1)}
                                    className={`w-full h-20 bg-indigo-50 rounded-2xl border-2 ${selectedTickets['silver'] ? 'border-indigo-500 bg-indigo-100' : 'border-indigo-200'} flex items-center justify-between px-8 cursor-pointer hover:-translate-y-1 transition-all active:scale-95 group shadow-sm hover:shadow-lg`}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black uppercase text-indigo-500 tracking-wider">Silver</span>
                                        <span className="text-sm text-indigo-400 font-medium">Zone C</span>
                                    </div>
                                    <span className="text-xl font-bold text-gray-900">₹1000</span>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-bold text-indigo-500">{getAvailability('silver')} seats left</span>
                                        {selectedTickets['silver'] > 0 && <span className="bg-indigo-500 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-md text-xs mt-1">{selectedTickets['silver']}</span>}
                                    </div>
                                </div>

                                <div className="mt-8 text-center text-xs text-gray-400 font-medium">
                                    Front of Stage
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right: Summary Order Card */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24">
                            <div className="bg-white rounded-[32px] p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100">
                                <h3 className="text-xl font-black text-gray-900 mb-6 font-heading">Your Booking</h3>

                                <div className="space-y-4 mb-8 min-h-[150px]">
                                    {ticketRates.some(r => selectedTickets[r.id] > 0) ? (
                                        ticketRates.filter(r => selectedTickets[r.id] > 0).map(rate => (
                                            <div key={rate.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-gray-200 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-xl ${rate.bg} flex items-center justify-center ${rate.text}`}>
                                                        <Ticket size={18} />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 text-sm">{rate.name}</p>
                                                        <p className="text-xs text-gray-500">₹{rate.price} each</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                                                    <button
                                                        onClick={() => updateQuantity(rate.id, -1)}
                                                        className="w-6 h-6 rounded hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-sm font-bold w-3 text-center">{selectedTickets[rate.id]}</span>
                                                    <button
                                                        onClick={() => updateQuantity(rate.id, 1)}
                                                        className="w-6 h-6 rounded hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="h-full flex flex-col items-center justify-center text-gray-400 py-8 border-2 border-dashed border-gray-100 rounded-3xl">
                                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                                                <Ticket size={24} className="opacity-50" />
                                            </div>
                                            <p className="text-sm font-medium">Select seats from the map</p>
                                        </div>
                                    )}
                                </div>

                                {/* Bill Details */}
                                <div className="space-y-3 pt-6 border-t border-dashed border-gray-200">
                                    <div className="flex justify-between text-sm text-gray-500 font-medium">
                                        <span>Subtotal</span>
                                        <span>₹{totalAmount}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-500 font-medium">
                                        <span>Platform Fee</span>
                                        <span>₹{totalAmount > 0 ? 49 : 0}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-500 font-medium">
                                        <span>GST (18%)</span>
                                        <span>₹{totalAmount > 0 ? Math.round(totalAmount * 0.18) : 0}</span>
                                    </div>
                                </div>

                                {/* Total & Pay Button */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="flex justify-between items-end mb-6">
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Amount</span>
                                        <span className="text-3xl font-black text-gray-900">₹{totalAmount > 0 ? totalAmount + 49 + Math.round(totalAmount * 0.18) : 0}</span>
                                    </div>

                                    <button
                                        disabled={totalAmount === 0}
                                        onClick={() => navigate('/checkout', {
                                            state: {
                                                selectedTickets,
                                                totalAmount,
                                                event
                                            }
                                        })}
                                        className={`w-full py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-3 shadow-lg ${totalAmount > 0
                                            ? 'bg-gray-900 text-white hover:bg-black hover:scale-[1.02] hover:-translate-y-1 shadow-gray-200'
                                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        Checkout <ChevronRight size={20} />
                                    </button>

                                    <div className="flex items-center justify-center gap-2 mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 py-2 rounded-lg">
                                        <ShieldCheck size={12} /> 100% Secure Payment
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default BookingPage;
