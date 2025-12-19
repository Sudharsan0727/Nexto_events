
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    ArrowLeft, Calendar, MapPin, Ticket, ShieldCheck,
    CreditCard, User, Mail, Phone, Lock, ChevronRight, Clock
} from 'lucide-react';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedTickets, totalAmount, event } = location.state || {};

    // Auto-focus state or simple form state
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [timeLeft, setTimeLeft] = useState(600);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!selectedTickets || totalAmount === 0) navigate('/');
        const timer = setInterval(() => setTimeLeft(p => p > 0 ? p - 1 : 0), 1000);
        return () => clearInterval(timer);
    }, [selectedTickets, totalAmount, navigate]);

    const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

    if (!event) return null;

    const platformFee = 49;
    const gst = Math.round(totalAmount * 0.18);
    const finalTotal = totalAmount + platformFee + gst;

    return (
        <div className="min-h-screen bg-gray-100 font-sans pb-20">
            <Navbar />

            {/* IMMERSIVE HERO HEADER */}
            <div className="relative h-[35vh] min-h-[300px] w-full overflow-hidden bg-gray-900">
                <img
                    src={event.image || event.poster}
                    alt="Background"
                    className="w-full h-full object-cover opacity-40 blur-sm scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-black/60"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 pb-20">
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
                        Checkout
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-2 tracking-tight shadow-black drop-shadow-lg">{event.title}</h1>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base font-medium text-gray-200">
                        <span className="flex items-center gap-2"><Calendar size={16} className="text-pink-500" /> {event.date}</span>
                        <span className="hidden md:inline">•</span>
                        <span className="flex items-center gap-2"><Clock size={16} className="text-pink-500" /> {event.time}</span>
                        <span className="hidden md:inline">•</span>
                        <span className="flex items-center gap-2"><MapPin size={16} className="text-pink-500" /> {event.venue.split(',')[0]}</span>
                    </div>
                </div>
            </div>

            {/* FLOATING CONTENT CONTAINER */}
            <main className="max-w-6xl mx-auto px-4 -mt-24 relative z-10">

                {/* MOBILE TOP TIMER - REFINED PILL */}
                <div className="lg:hidden flex justify-center mb-6">
                    <div className="bg-white text-gray-900 px-5 py-2.5 rounded-full shadow-lg shadow-black/20 border border-gray-100 flex items-center gap-3 w-fit">
                        <div className="flex items-center gap-2">
                            <Clock size={14} className="text-red-500 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Time Remaining</span>
                        </div>
                        <span className="font-mono font-black text-xl text-[#111] tracking-wider min-w-[60px] text-center">
                            {formatTime(timeLeft)}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT: MAIN FORM */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* 1. CONTACT CARD */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-black/5 p-6 md:p-8 border-t-4 border-pink-500">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-black ring-4 ring-pink-50">1</span>
                                Contact Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={18} />
                                        <input
                                            type="text"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-4 transition-all focus:bg-white font-medium"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={18} />
                                        <input
                                            type="tel"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-4 transition-all focus:bg-white font-medium"
                                            placeholder="Enter phone number"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={18} />
                                        <input
                                            type="email"
                                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-4 transition-all focus:bg-white font-medium"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                                        <ShieldCheck size={12} className="text-green-500" />
                                        Your tickets will be sent here. No spam, we promise.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2. PAYMENT CARD */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-black/5 p-6 md:p-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-sm font-black ring-4 ring-gray-50">2</span>
                                Payment Method
                            </h2>

                            <div className="space-y-4">
                                {/* Option 1: Card */}
                                <label className={`flex items-center justify-between p-5 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-pink-500 bg-pink-50/30' : 'border-gray-100 hover:border-gray-200'}`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-pink-500' : 'border-gray-300'}`}>
                                            {paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100"><CreditCard size={20} className="text-pink-600" /></div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm">Credit / Debit Card</p>
                                                <p className="text-xs text-gray-500">Visa, Mastercard, RuPay</p>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="radio" name="payment" className="hidden" onChange={() => setPaymentMethod('card')} />
                                </label>

                                {/* Option 2: UPI */}
                                <label className={`flex items-center justify-between p-5 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-pink-500 bg-pink-50/30' : 'border-gray-100 hover:border-gray-200'}`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'upi' ? 'border-pink-500' : 'border-gray-300'}`}>
                                            {paymentMethod === 'upi' && <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100"><ShieldCheck size={20} className="text-green-600" /></div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm">UPI</p>
                                                <p className="text-xs text-gray-500">Google Pay, PhonePe, Paytm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="radio" name="payment" className="hidden" onChange={() => setPaymentMethod('upi')} />
                                </label>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT: ORDER SUMMARY (Sticky) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-4">

                            {/* TIMER CARD (Desktop Only) */}
                            <div className="hidden lg:flex bg-red-50 border border-red-100 rounded-xl p-4 items-center justify-between shadow-sm">
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-red-500 animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-red-800">Time Remaining</span>
                                </div>
                                <span className="font-mono font-black text-xl text-red-600">
                                    {formatTime(timeLeft)}
                                </span>
                            </div>

                            {/* RECEIPT CARD */}
                            <div className="bg-white rounded-2xl shadow-xl shadow-black/5 overflow-hidden border border-gray-100 relative">
                                {/* Top Pattern */}
                                <div className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 border-b border-dashed border-gray-200 pb-4 mb-4 flex justify-between items-center">
                                        Order Summary
                                    </h3>

                                    {/* Items List */}
                                    <div className="space-y-3 mb-6">
                                        {Object.entries(selectedTickets).map(([key, count]) => {
                                            if (count === 0) return null;
                                            const labels = { vip: 'VIP Pass', platinum: 'Platinum Pass', gold: 'Gold Pass', silver: 'Silver Pass' };
                                            const prices = { vip: 5000, platinum: 2000, gold: 1500, silver: 1000 };

                                            // Dynamic Colors for Tags
                                            const colors = { vip: 'bg-amber-100 text-amber-700', platinum: 'bg-pink-100 text-pink-700', gold: 'bg-blue-100 text-blue-700', silver: 'bg-indigo-100 text-indigo-700' };

                                            return (
                                                <div key={key} className="flex justify-between items-start">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold text-gray-800">{labels[key]}</span>
                                                        <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded w-fit mt-1 ${colors[key]}`}>x {count} tickets</span>
                                                    </div>
                                                    <span className="font-bold text-gray-900">₹{prices[key] * count}</span>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Costs */}
                                    <div className="bg-gray-50 rounded-xl p-4 space-y-2 mb-6 border border-gray-100">
                                        <div className="flex justify-between text-xs text-gray-500 font-medium">
                                            <span>Subtotal</span>
                                            <span>₹{totalAmount}</span>
                                        </div>
                                        <div className="flex justify-between text-xs text-gray-500 font-medium">
                                            <span>Platform Fee</span>
                                            <span>₹{platformFee}</span>
                                        </div>
                                        <div className="flex justify-between text-xs text-gray-500 font-medium">
                                            <span>GST (18%)</span>
                                            <span>₹{gst}</span>
                                        </div>
                                        <div className="border-t border-gray-200 my-2 pt-2 flex justify-between items-center">
                                            <span className="font-bold text-gray-900">Total Amount</span>
                                            <span className="font-black text-xl text-pink-600">₹{finalTotal}</span>
                                        </div>
                                    </div>

                                    {/* Pay Button (Desktop Only) */}
                                    <button className="hidden lg:flex w-full py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-bold shadow-lg shadow-gray-300 transition-all hover:scale-[1.02] hover:-translate-y-1 active:scale-95 items-center justify-center gap-2 group">
                                        Pay ₹{finalTotal} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    <p className="text-[10px] text-center text-gray-400 mt-4 leading-relaxed">
                                        By clicking "Pay", you agree to our <span className="underline">Terms</span>. Refunds are subject to organizer policy.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>

            {/* --- MOBILE/TABLET FIXED PAY BAR --- */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 px-6 lg:hidden z-50 safe-area-bottom shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Total to Pay</p>
                        <p className="text-2xl font-black text-pink-600 tracking-tight">₹{finalTotal}</p>
                    </div>
                    <button className="flex-1 bg-[#111] text-white h-12 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#ff084e] shadow-lg shadow-black/20 flex items-center justify-center gap-2 active:scale-95 transition-transform">
                        Pay Securely <ShieldCheck size={18} />
                    </button>
                </div>
            </div >
        </div >
    );
};

export default Checkout;
