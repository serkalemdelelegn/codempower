import React from 'react';

export const CourseTabs = ({ activeTab, onTabChange }) => {
  const tabs = ['Overview', 'Curriculum', 'Instructor', 'Reviews'];

  return (
    <div className="flex border-b mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-6 py-3 ${
            activeTab === tab
              ? 'text-pink-500 border-b-2 border-pink-500'
              : 'text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};