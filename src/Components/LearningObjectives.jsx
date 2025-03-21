import React from 'react';

export const LearningObjectives = () => {
  const objectives = [
    'Learn How Perspective Works And How To Incorporate Your Art',
    'Learn How Perspective Works And How To Incorporate Your Art',
    'Learn How Perspective Works And How To Incorporate Your Art',
    'Learn How Perspective Works And How To Incorporate Your Art',
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-bold mb-4">What You Will Learn?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {objectives.map((objective, index) => (
          <div key={index} className="flex items-start space-x-2">
            <div className="mt-1">✓</div>
            <p className="text-gray-600">{objective}</p>
          </div>
        ))}
      </div>
    </div>
  );
};