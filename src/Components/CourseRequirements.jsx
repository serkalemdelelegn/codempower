/* eslint-disable no-unused-vars */
import React from 'react';
import { Monitor, Pencil, Wifi } from 'lucide-react';

export const CourseRequirements = () => {
  const requirements = [
    { icon: Monitor, text: 'Computer/Mobile' },
    { icon: Pencil, text: 'Paper & Pencil' },
    { icon: Wifi, text: 'Internet Connect' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {requirements.map(({ icon: Icon, text }, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3">
          <Icon className="w-6 h-6 text-teal-500" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
};