/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import lightImg from "../assets/images/svg/light.svg";
import aboutOne from "../assets/images/banner/man12.jpg";
import targetImg from "../assets/images/svg/target.svg";
const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <img src={aboutOne} alt="aboutOne" className=" mx-auto" />
          </div>
          <div>
            <div className="mini-title">About CodEmpower</div>
            <h4 className="column-title ">
              Empowering Ethiopian Women in Tech
              <span className="shape-bg">Through Education</span>
            </h4>
            <div>
              CodEmpower is a digital platform dedicated to providing Ethiopian women with the tools, resources, and support to thrive in the tech industry. Through accessible learning, mentorship, job opportunities, and community connections, CodEmpower bridges the gender gap in technology.
            </div>
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={lightImg}
                      alt="lightImg"
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Our Mission</h4>
                  <div>
                    Our mission is to empower Ethiopian women by providing free and affordable resources, mentorship, and career opportunities to help them excel in the tech industry.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={targetImg}
                      alt=""
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Our Vision</h4>
                  <div>
                    We envision an inclusive tech ecosystem where women in Ethiopia can thrive through access to industry-leading learning resources, mentorship, and direct job opportunities.
                  </div>
                </div>
              </li>
            </ul>
            <div className="pt-8">
              <a href="#" className=" btn btn-primary">
                Explore CodEmpower
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
