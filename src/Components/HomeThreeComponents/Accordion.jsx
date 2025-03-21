import { Disclosure } from "@headlessui/react";
import React from "react";
import { faq } from "../../constant/images";

const Accordion = () => {
  return (
    <div className="section-padding  bg-white bg-[url('../images/all-img/section-bg-15.png')] bg-bottom  bg-cover bg-no-repeat">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
          <div>
            {/* <div className="mini-title">Frequently Asked Question</div> */}
            <div className="column-title ">
              General <span className="shape-bg">Questions</span>
            </div>
            <ul className="list accrodains space-y-[30px] lg:max-w-[470px]">
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>What is CodEmpower and who is it for?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    CodEmpower is an online learning and work platform designed to empower women coders by providing education, real-world projects, and career opportunities.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>How can I enroll in courses on CodEmpower?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    browse available courses, and enroll in the ones that match your learning goals.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure  >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Does CodEmpower offer job opportunities after completing courses?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    Yes CodEmpower connects learners with real projects and job opportunities helping them build their careers in tech.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Do I need prior coding experience to join CodEmpower?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    No CodEmpower offers courses for beginners as well as advanced learners so you can start from any level.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>


            </ul>
          </div>
          <div>
            <img src={faq} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
