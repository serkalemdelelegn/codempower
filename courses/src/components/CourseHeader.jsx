import React from 'react';

export const CourseHeader = ({ title, category, trainer, lastUpdate }) => {
  return (
    <div className="mb-8">
      <span className="inline-block px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm mb-4">
        {category}
      </span>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      
      <div className="flex items-center space-x-4 text-gray-600">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces" 
          alt="Trainer" 
          className="w-8 h-8 rounded-full" 
        />
        <div>
          <span className="text-gray-400">Trainer: </span>
          <span>{trainer}</span>
        </div>
        <div>
          <span className="text-gray-400">Last Update: </span>
          <span>{lastUpdate}</span>
        </div>
      </div>
    </div>
  );
};