import React, { useState } from 'react';
import { Search, Star, Clock, Users, ChevronRight, LayoutGrid, List } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: 'UI/UX Design And Graphics Learning Bootcamp 2022',
    price: 72.39,
    category: 'Art & Design',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=370&h=248',
    lessons: 2,
    duration: '4h 30m',
    rating: 4.5
  },
  {
    id: 2,
    title: 'Financial Security Thinking And Principles Theory',
    price: 49.33,
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=370&h=248',
    lessons: 2,
    duration: '4h 30m',
    rating: 4.5
  },
  {
    id: 3,
    title: 'Logo Design: From Concept To Presentation',
    price: 'Free',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=370&h=248',
    lessons: 2,
    duration: '4h 30m',
    rating: 4.5
  },
  {
    id: 4,
    title: 'Professional Ceramic Moulding For Beginners',
    price: 84,
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=370&h=248',
    lessons: 2,
    duration: '4h 30m',
    rating: 4.5
  },
];

const categories = [
  { name: 'Development', count: 23 },
  { name: 'Art & Design', count: 45 },
  { name: 'Data Science', count: 14 },
  { name: 'Technology', count: 28 },
  { name: 'IT Management', count: 34 },
];

const skillLevels = [
  { name: 'All Levels', count: 82 },
  { name: 'Beginner Levels', count: 82 },
  { name: 'Intermediate Level', count: 82 },
  { name: 'Expert Level', count: 82 },
];

const languages = [
  { name: 'Spanish Language', count: 82 },
  { name: 'Arabic Language', count: 82 },
  { name: 'United States (US)', count: 82 },
  { name: 'United Kingdom (UK)', count: 82 },
];

function Courses() {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState(100);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search keyword..."
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-rose-400 text-white p-2 rounded-lg">
                <Search size={20} />
              </button>
            </div>

            {/* Price Filter */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Price Filter</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full accent-teal-500"
              />
              <div className="flex justify-between mt-2">
                <span>Price: ${priceRange}</span>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between text-gray-600 hover:text-teal-500 cursor-pointer">
                    <span>{category.name} ({category.count})</span>
                    <ChevronRight size={20} />
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Level */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Skill Level</h3>
              <div className="space-y-3">
                {skillLevels.map((level) => (
                  <div key={level.name} className="flex items-center justify-between text-gray-600 hover:text-teal-500 cursor-pointer">
                    <span>{level.name} ({level.count})</span>
                    <ChevronRight size={20} />
                  </div>
                ))}
              </div>
            </div>

            {/* Language */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Language</h3>
              <div className="space-y-3">
                {languages.map((language) => (
                  <div key={language.name} className="flex items-center justify-between text-gray-600 hover:text-teal-500 cursor-pointer">
                    <span>{language.name} ({language.count})</span>
                    <ChevronRight size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-teal-500 text-white' : 'bg-gray-100'} rounded-lg`}
                >
                  <LayoutGrid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-teal-500 text-white' : 'bg-gray-100'} rounded-lg`}
                >
                  <List size={20} />
                </button>
                <span className="text-gray-500">Showing 12 Courses Of 52</span>
              </div>
              <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Sort By: Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>

            {/* Course Grid */}
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6`}>
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <span className="px-3 py-1 bg-teal-500 text-white text-sm rounded-full">{course.category}</span>
                    <h3 className="mt-4 text-lg font-semibold leading-tight">{course.title}</h3>
                    <div className="mt-4 flex items-center justify-between text-gray-500">
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{course.lessons} Lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="fill-yellow-400 text-yellow-400" size={16} />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xl font-bold text-teal-500">
                        {typeof course.price === 'number' ? `$${course.price.toFixed(2)}` : course.price}
                      </span>
                      <button onClick={() => navigate("/course_detail")} className="px-4 py-2 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition-colors inline-flex items-center gap-2">
                Load More
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;