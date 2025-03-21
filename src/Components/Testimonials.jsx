/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import testiLeft from "../assets/images/all-img/testi-left.png";
// import { faq } from "../constant/images";

const Testimonials = () => {
  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-16.png')] bg-cover  bg-no-repeat lg:mt-[136px]">
      {/* <div className="container lg:-mt-[250px] xl:pb-[136px] lg:pb-20 pb-10">
        <div
          className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] bg-white shadow-box14 rounded-md
                divide-x-2 divide-[#E4EEED] py-20"
        >
          <div className=" text-center ">
            <h2 className="text-secondary font-bold ">
              <span className=" counter"></span>K+
            </h2>
            <span className="block text-black font-semibold">
              Enrolled Students
            </span>
          </div>

          <div className="  text-center">
            <h2 className="text-secondary font-bold ">
              <span className=" counter">348</span>+
            </h2>
            <span className="block text-black font-semibold">
              Academic Programs
            </span>
          </div>

          <div className=" text-center">
            <h2 className="text-secondary font-bold ">
              <span className=" counter">125</span>+
            </h2>
            <span className="block text-black font-semibold">
              Winning Award
            </span>
          </div>

          <div className="  text-center">
            <h2 className="text-secondary font-bold ">
              <span className=" counter">37</span>+
            </h2>
            <span className="block text-black font-semibold">
              Certified Students
            </span>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-10 gap-6 ">
          {/* <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img src={testiLeft} alt="" draggable="false" />
          </div> */}
          <div className="xl:col-span-5 lg:col-span-6 col-span-12 flex flex-col justify-center ">
            <div className="mini-title">Testimonial</div>
            <h4 className="column-title ">
              What Says Our
              <span className="shape-bg">target users</span>
              About CodEmpower platform
            </h4>
            <div>
            CodEmpower has been a game changer for aspiring women coders providing
             top notch online education and a dedicated work platform. Users love how
              it offers flexible learning real world projects and career opportunities 
              helping them grow their skills and secure jobs in tech. Many appreciate the 
              supportive community and mentorship making 
            CodEmpower more than just a platform it is a pathway to success!
            </div>
            {/* <div className="mt-12">
              <a href="#" className="btn btn-primary">
                View All Reviews
              </a>
            </div> */}
          </div>
          {/* <div>
            <img src={faq} alt="" />
          </div> */}
        </div>
        
      </div>
      
    </div>
  );
};

export default Testimonials;
