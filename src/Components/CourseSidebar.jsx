/* eslint-disable no-unused-vars */
import React from 'react';
import { Clock, Users, Book, Globe2, User2 } from 'lucide-react';

export const CourseSidebar = () => {
  const courseDetails = [
    { icon: User2, label: 'Instructor', value: 'Daniel Smith' },
    { icon: Book, label: 'Lectures', value: '23' },
    { icon: Clock, label: 'Duration', value: '2H: 36Minutes' },
    { icon: Users, label: 'Enrolled', value: '2k Students' },
    { icon: Book, label: 'Course Level', value: 'Intermediate' },
    { icon: Globe2, label: 'Language', value: 'English' },
  ];

  const socialPlatforms = ['facebook', 'twitter', 'pinterest', 'instagram'];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
      <div className="aspect-video bg-gray-200 rounded-lg mb-4">
        <div className="w-full h-full flex items-center justify-center">
          <div className="bg-pink-500 rounded-full p-4">
            <div className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">Free</h2>
        <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
          Enroll Now
        </button>
      </div>

      <div className="space-y-4">
        {courseDetails.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon className="w-5 h-5 text-gray-400" />
              <span>{label}</span>
            </div>
            <span>{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t">
        <p className="text-sm text-gray-600 mb-3">Share On:</p>
        <div className="flex space-x-2">
          {socialPlatforms.map((platform) => (
            <a
              key={platform}
              href={`#${platform}`}
              className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <span className="sr-only">{platform}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};