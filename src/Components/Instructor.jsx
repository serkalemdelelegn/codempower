/* eslint-disable no-unused-vars */
import React from 'react';
import { Book, Users, Star, Facebook, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';

export const Instructor = () => {
  const stats = [
    { icon: Book, label: '65+ Courses' },
    { icon: Users, label: '2k+ Student Learned' },
    { icon: Star, label: '547+ Reviews' },
    { icon: Star, label: '4.9 Average Rating' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex gap-8">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=270&h=310&fit=crop&crop=faces"
          alt="Daniel Smith"
          className="w-[270px] h-[310px] object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1">Daniel Smith</h2>
          <p className="text-pink-500 mb-4">User Experience Designer</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {stats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-gray-600">
                <Icon className="w-5 h-5 text-teal-500" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mb-6">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-gray-600">
            There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable. If You Are Going To Use A Passage Of Lorem Ipsum, You Need To Be Sure There Isn't Anything Embarrassing Hidden In The Middle Of Text. All The Lorem Ipsum Generators On The Internet Tend.
          </p>
        </div>
      </div>
    </div>
  );
};