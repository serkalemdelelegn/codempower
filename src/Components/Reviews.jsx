import React from 'react';
import { Star } from 'lucide-react';

export const Reviews = () => {
  const ratings = [
    { stars: 5, percentage: 40 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  const reviews = [
    {
      id: 1,
      author: 'Daniel Smith',
      date: 'Jan 24, 2022',
      rating: 5,
      content: 'There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration.',
    },
    {
      id: 2,
      author: 'Daniel Smith',
      date: 'Jan 24, 2022',
      rating: 5,
      content: 'There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg">
        <div className="flex gap-12">
          <div className="flex-1">
            {ratings.map(({ stars, percentage }) => (
              <div key={stars} className="flex items-center gap-4 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-500 w-12">{percentage}%</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">4.9</div>
            <div className="flex justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-sm text-gray-500">(2 Review)</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-[72px] h-[72px] bg-gray-200 rounded-lg" />
              <div className="flex-1">
                <div className="flex mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-2">{review.content}</p>
                <div>
                  <div className="font-medium">{review.author}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};