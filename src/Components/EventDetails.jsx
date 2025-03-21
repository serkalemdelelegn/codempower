/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import {
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  mainEvent,
  circleClock,
  rc1,
  rc2,
} from "../constant/images";
import abe from "../assets/images/banner/women.jpg"

const EventDetails = () => {
  useEffect(() => {
    if (document.getElementById("timer")) {
      var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime(); // Update the count down every 1 second

      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime(); // Find the distance between now and the count down date

        var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000); // Display the result in the element with id="demo"

        document.getElementById("timer").innerHTML =
          "<div class='text-[44px] font-bold'>" +
          days +
          "<div class=' text-lg font-medium mt-2 capitalize'>days</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          hours +
          "<div class='text-lg font-medium mt-2 capitalize'>hours</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          minutes +
          "<div class='text-lg font-medium mt-2 capitalize'>minutes</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          seconds +
          "<div class='text-lg font-medium mt-2 capitalize'>seconds</div></div>"; // If the count down is finished, write some text

        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
  }, []);

  return (
    <div className="nav-tab-wrapper tabs section-padding">
      <div className="container">
        <img
          src={abe}
          alt="Women in Tech Conference"
          className="lg:mb-10 mb-6 block w-full rounded-lg"
        />
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <h3 className="text-3xl font-bold mb-6">Women in Tech Conference 2023</h3>
            <div className="lg:my-6 my-4 text-lg text-gray-700">
              Join us for the annual Women in Tech Conference, a gathering of inspiring women in the tech industry. This event is designed to empower Ethiopian women with the skills, knowledge, and connections needed to thrive in the digital world. Whether you're a beginner or an experienced professional, this conference offers something for everyone.
            </div>
            <div className="bg-secondary text-white p-10 rounded-md">
              <div
                id="timer"
                className="md:flex space-y-4 md:space-y-0 justify-between text-center"
              >
                {/* Timer will be dynamically inserted here */}
              </div>
            </div>
            <div className="py-6 text-lg text-gray-700">
              <h4 className="text-2xl font-bold mb-4">What to Expect</h4>
              <ul className="list-disc pl-6 space-y-3">
                <li>Keynote speeches from leading women in tech.</li>
                <li>Interactive workshops on coding, AI, and data science.</li>
                <li>Networking opportunities with industry professionals.</li>
                <li>Panel discussions on breaking barriers in tech.</li>
                <li>Career fair with top tech companies.</li>
              </ul>
            </div>
            <div className="flex justify-between border-y border-[#ECECEC] py-4 md:mt-12 mt-10">
              <div className="text-black font-semibold">Previous</div>
              <ul className="flex space-x-3 lg:justify-end items-center">
                {[fbIcon, pnIcon, twIcon, insIcon].map((item, indx) => (
                  <li key={indx}>
                    <a href="#" className="flex h-8 w-8">
                      <img src={item} alt="Social Media Icon" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 relative lg:-mt-20">
            <div className="sidebarWrapper max-w-[90%] mx-auto space-y-[30px]">
              <div className="wdiget custom-text space-y-5">
                <h4 className="widget-title text-2xl font-bold">Event Details</h4>
                <ul className="list space-y-6">
                  <li className="flex space-x-3">
                    <div className="flex-1 space-x-3 flex">
                      <img src={circleClock} alt="Time Icon" />
                      <div>4:00 PM - 8:00 PM</div>
                    </div>
                  </li>
                  <li className="flex space-x-3">
                    <div className="flex-1 space-x-3 flex">
                      <img src={circleClock} alt="Date Icon" />
                      <div>November 15, 2023</div>
                    </div>
                  </li>
                  <li className="flex space-x-3">
                    <div className="flex-1 space-x-3 flex">
                      <img src={circleClock} alt="Location Icon" />
                      <div>Sheraton Addis, Addis Ababa, Ethiopia</div>
                    </div>
                  </li>
                  <li className="flex space-x-3">
                    <div className="flex-1 space-x-3 flex">
                      <img src={circleClock} alt="Email Icon" />
                      <div>info@codempower.org</div>
                    </div>
                  </li>
                  <li className="flex space-x-3">
                    <div className="flex-1 space-x-3 flex">
                      <img src={circleClock} alt="Phone Icon" />
                      <div>+251 911 234 567</div>
                    </div>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-md text-lg w-full text-center">
                  contact us
                </a>
              </div>

              <div className="wdiget">
                <h4 className="widget-title text-2xl font-bold">Special Guests</h4>
                <ul className="list space-y-6">
  <li className="flex space-x-4 border-[#ECECEC]">
    <div className="flex-none">
      <div className="h-20 w-20 rounded-full">
        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Ayelech Mohammed"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
    <div className="flex-1">
      <div className="mb-1 font-bold text-black capitalize">
      Ayelech Mohammed
      </div>
      <span className="text-primary font-semibold">
        Senior Software Engineer
      </span>
    </div>
  </li>
  <li className="flex space-x-4 border-[#ECECEC]">
    <div className="flex-none">
      <div className="h-20 w-20 rounded-full">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Sara Tesfaye"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
    <div className="flex-1">
      <div className="mb-1 font-bold text-black capitalize">
        Sara Tesfaye
      </div>
      <span className="text-primary font-semibold">
        AI Researcher at Microsoft
      </span>
    </div>
  </li>
</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;