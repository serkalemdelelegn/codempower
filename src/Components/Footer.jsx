/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import footerLogo from "../assets/images/logo/footer-logo.svg";
import logo from "../assets/images/logo/cass.png";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-black bg-[url('../images/all-img/footer-bg-1.png')] bg-cover bg-center bg-no-repeat">
      <div className="section-padding container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {/* About Section */}
          <div className="single-footer">
            <div className="lg:max-w-[270px]">
              <a href="#" className="mb-10 block">
                <img src={logo} alt="logo" className="w-20 h-auto"/>
              </a>
              <p className="text-gray-400">
                CodEmpower is a platform dedicated to empowering Ethiopian women in tech by providing accessible learning resources, mentorship, and career opportunities.
              </p>
              <ul className="flex space-x-4 pt-8">
                {[
                  { icon: "bxl:facebook", link: "#" },
                  { icon: "bxl:twitter", link: "#" },
                  { icon: "bxl:linkedin", link: "#" },
                  { icon: "bxl:instagram", link: "#" },
                ].map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.link}
                      className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white transition hover:bg-primary hover:text-white"
                    >
                      <iconify-icon icon={social.icon}></iconify-icon>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="single-footer">
            <div className="flex space-x-[80px]">
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Quick Links</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-primary">Home</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">Learning Hub</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">Mentorship</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">Job Hub</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="single-footer">
            <h4 className="mb-8 text-2xl font-bold text-white">Contact Us</h4>
            <div className="mb-8 text-gray-400">
              Have questions or need support? Visit our <a href="/react-templates/edumim/contacts" className="text-primary underline">Contact Page</a> to get in touch with us.
            </div>
            <a
              href="/contact"
              className="btn btn-primary w-full text-center"
            >
              Go to Contact Page
            </a>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="container border-t border-white border-opacity-[0.1] py-8 text-center text-base text-gray-400">
        &copy; Copyright {updatedDate} | CodEmpower | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
