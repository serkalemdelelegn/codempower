import React from 'react';

export const RelatedCourses = () => {
  const courses = [1, 2, 3];
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-6">Related Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video bg-gray-200"></div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                {stars.map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <h3 className="font-semibold mb-2">Greatest Passion In...</h3>
              <p className="text-teal-500">$38.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};