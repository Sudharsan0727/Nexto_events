import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FilterBar from '../components/FilterBar';
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';
import CarouselBanner from '../components/CarouselBanner';
import CategoryCarousel from '../components/CategoryCarousel';
import { events, categories } from '../data/mockEvents';
import { Zap } from 'lucide-react';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredEvents = selectedCategory === 'All'
        ? events
        : events.filter(event => event.category === selectedCategory);

    const featuredEvents = events.filter(event => event.isFeatured);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-purple-100 selection:text-purple-900">
            <Navbar />

            {/* Dynamic Carousel Banner */}
            <CarouselBanner />

            {/* New Category Carousel Section */}
            <CategoryCarousel />

            <FilterBar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <main className="max-w-[1400px] mx-auto px-6 py-12">

                {/* Featured Section */}
                {selectedCategory === 'All' && (
                    <div className="mb-16">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">Recommended Events</h2>
                                <p className="text-gray-500 text-sm">Curated events just for you.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                            {featuredEvents.map(event => (
                                <EventCard key={`featured-${event.id}`} event={event} />
                            ))}
                        </div>
                    </div>
                )}

                {/* All Events Section - Hidden as per request */}
                {selectedCategory !== 'All' && (
                    <div>
                        <div className="flex justify-between items-end mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {selectedCategory}
                            </h2>
                            <div className="text-sm font-semibold text-gray-500">
                                Showing {filteredEvents.length} events
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                            {filteredEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>

                        {filteredEvents.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                                <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                                    <Zap size={32} className="text-gray-300" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">No events found</h3>
                                <p className="text-gray-500 mt-2">Try checking back later or select a different category.</p>
                            </div>
                        )}
                    </div>
                )}

            </main>

            <Footer />
        </div>
    );
};

export default Home;
