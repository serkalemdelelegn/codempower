/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const EventsList = () => {
  // Online image URLs for events
  const eventImages = [
    "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Tech Conference
    "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Networking Event
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Workshop
    "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Coding Bootcamp
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Career Fair
    "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Panel Discussion
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80", // AI Summit
    "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Hackathon
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80", // Mentorship Session
  ];

  const eventTitles = [
    "Tech Empowerment Conference 2023",
    "Women in Tech Networking Night",
    "Intro to Web Development Workshop",
    "Coding Bootcamp for Beginners",
    "Tech Career Fair 2023",
    "Panel Discussion: Breaking Barriers in Tech",
    "AI and Machine Learning Summit",
    "24-Hour Women-Only Hackathon",
    "Mentorship Session with Industry Leaders",
  ];

  const eventDates = [
    "Fri, Nov 10, 2023 | 9:00 AM",
    "Sat, Nov 11, 2023 | 6:00 PM",
    "Sun, Nov 12, 2023 | 10:00 AM",
    "Mon, Nov 13, 2023 | 8:00 AM",
    "Tue, Nov 14, 2023 | 11:00 AM",
    "Wed, Nov 15, 2023 | 3:00 PM",
    "Thu, Nov 16, 2023 | 9:00 AM",
    "Fri, Nov 17, 2023 | 12:00 PM",
    "Sat, Nov 18, 2023 | 2:00 PM",
  ];

  const eventLocations = [
    "Addis Ababa, Ethiopia",
    "Online Event",
    "CodEmpower HQ, Addis Ababa",
    "CodEmpower HQ, Addis Ababa",
    "Sheraton Addis, Ethiopia",
    "Online Event",
    "Skylight Hotel, Addis Ababa",
    "CodEmpower HQ, Addis Ababa",
    "Online Event",
  ];

  return (
    <div className="nav-tab-wrapper tabs section-padding">
      <div className="container">
        <div className="flex items-center mb-14">
          <div className="flex-1 flex space-x-6 items-center">
            <span>Showing 9 events of 25</span>
          </div>
          <div className="flex-0">
            <div className="min-w-[272px]">
              <select>
                <option data-display="Sort By: Date">Sort By: Date</option>
                <option value="1">Popularity</option>
                <option value="2">Location</option>
                <option value="3">Event Type</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {eventImages.map((item, index) => (
            <div
              className="bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3"
              key={index}
            >
              <div className="event-thumb h-[297px] rounded-t-[8px] relative">
                <img
                  src={item}
                  alt={eventTitles[index]}
                  className="w-full h-full object-cover rounded-t-[8px]"
                />
              </div>
              <div className="event-content p-8">
                <h4 className="text-xl mb-5 font-bold">
                  <Link
                    to="/codempower/events/event-details"
                    className="hover:text-primary transition duration-150"
                  >
                    {eventTitles[index]}
                  </Link>
                </h4>
                <ul className="list space-y-3 mb-6">
                  <li className="flex space-x-2">
                    <span className="text-lg text-secondary">
                      <iconify-icon icon="heroicons:calendar-days"></iconify-icon>
                    </span>
                    <span>{eventDates[index]}</span>
                  </li>
                  <li className="flex space-x-2">
                    <span className="text-lg text-secondary">
                      <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                    </span>
                    <span>{eventLocations[index]}</span>
                  </li>
                </ul>
                <Link
                  to="/react-templates/edumim/event-single"
                  className="btn px-8 py-[11px] bg-black text-white hover:bg-primary"
                >
                  detail info
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination mt-14">
          <ul className="flex justify-center space-x-3">
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                <iconify-icon
                  icon="heroicons:chevron-double-left-20-solid"
                  className="text-2xl"
                ></iconify-icon>
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-primary text-white rounded font-semibold"
              >
                1
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                2
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                3
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                4
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                <iconify-icon
                  icon="heroicons:chevron-double-right-20-solid"
                  className="text-2xl"
                ></iconify-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventsList;