import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const FilterBar = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4 transition-all duration-300">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex items-center gap-4">

                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-gray-300 transition-all flex-shrink-0 shadow-sm">
                        <SlidersHorizontal size={16} />
                        Filters
                    </button>

                    <div className="w-px h-8 bg-gray-200 mx-2 hidden sm:block"></div>

                    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar flex-1 pb-1 sm:pb-0">
                        <button
                            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === 'All'
                                    ? 'bg-black text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            onClick={() => onSelectCategory('All')}
                        >
                            All
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === cat.name
                                        ? 'bg-black text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                onClick={() => onSelectCategory(cat.name)}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
