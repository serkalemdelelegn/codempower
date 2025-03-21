/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/cass.png";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    });
  }, []);

  return (
    <>
      <header
        className="site-header  home-one-header top-0 w-full z-[999] rt-sticky "
        ref={scrollNav}
      >
        <div className="main-header py-6">
          <div className="container">
            <div className=" flex items-center justify-between">
              <Link
                to={"/react-templates/edumim"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] "
              >
                <img src={logo} alt="logo" className="w-20 h-auto"/>
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    <li className="mr-30">
                      <a href="/react-templates/edumim">Home</a>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim"}> Home One</Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/home-two"}>
                            Home Two
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/home-three"}>
                            Home Three
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-item-has-children mr-30">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim/about"}>
                            About
                          </Link>
                        </li>
                        {/* <li>
                          <Link to={"/react-templates/edumim/about-two"}>
                            About 2
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link to={"/react-templates/edumim/instructor"}>
                            Instructor
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link to={"/react-templates/edumim/instructor-two"}>
                            Instructor 2
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link
                            to={"/react-templates/edumim/instructor-details"}
                          >
                            Instructor detail
                          </Link>
                        </li> */}
                        <li>
                          <Link to={"/react-templates/edumim/event"}>
                            Event
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/event-single"}>
                            Event Detail
                          </Link>
                        </li>
                        {/* <li>
                          <Link to={"/react-templates/edumim/error"}>404</Link>
                        </li> */}
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Instructor</a>
                      <ul className="sub-menu">
                        {/* <li>
                          <Link to={"/react-templates/edumim/blog-standard"}>
                            Blog Standard
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/single-blog"}>
                            Blog Single
                          </Link>
                        </li> */}

                        <li>
                          <Link to={"/react-templates/edumim/instructor"}>
                            Instructor
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={"/react-templates/edumim/instructor-details"}
                          >
                            Freelancing
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="/react-templates/edumim/courses-sidebar">Courses</a>
                      <ul className="sub-menu">
                        {/* <li>
                          <Link to={"/react-templates/edumim/courses"}>
                            Courses
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link to={"/react-templates/edumim/courses-sidebar"}>
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/single-course"}>
                            Course Detail
                          </Link>
                        </li> */}
                      </ul>
                    </li>
                    
                    {/* <li>
                      <Link to={"/react-templates/edumim/contacts"}>
                        Contacts
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div className=" hidden lg:block">
                    <a href="/react-templates/edumim/contacts" className="btn btn-primary py-[15px] px-8 mr-10">
                    Contact us
                      
                    </a>
                  </div>
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
