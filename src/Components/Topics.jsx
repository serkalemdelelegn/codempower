/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// Dummy data for topics
const topicsData = [
  {
    logo: "https://cdn-icons-png.flaticon.com/512/919/919827.png", // Web Development icon
    title: "Web Development",
    quantity: "12 Courses",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/919/919852.png", // Python icon
    title: "Python Programming",
    quantity: "8 Courses",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/2103/2103655.png", // AI icon
    title: "AI & Machine Learning",
    quantity: "10 Courses",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png", // JavaScript icon
    title: "JavaScript Basics",
    quantity: "15 Courses",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/919/919831.png", // Data Science icon
    title: "Data Science",
    quantity: "7 Courses",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/919/919860.png", // UI/UX icon
    title: "UI/UX Design",
    quantity: "9 Courses",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/919/919855.png", // Freelancing icon
    title: "Freelancing 101",
    quantity: "5 Courses",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/919/919832.png", // Career Growth icon
    title: "Career Growth",
    quantity: "6 Courses",
  },
];
//hi3wutskegjdvxn,m dkleszdjkbxh

const Topics = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Empower Yourself with Tech Skills</div>
          <div className="column-title">
            Popular <span className="shape-bg">Topics</span> to Learn
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          {topicsData.map((item, index) => (
            <a
              className="rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-[#FFE8E8] text-center px-6 py-[65px] hover:-translate-y-2"
              href="#"
              key={index}
            >
              <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#FFE8E8]">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-[32px] h-[32px] object-cover"
                />
              </div>
              <div className="course-content">
                <h4 className="text-2xl mb-2 font-bold">{item.title}</h4>
                <p>{item.quantity}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;