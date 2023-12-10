import React from "react";
import { Nav, Tab } from "react-bootstrap";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import StripePayment from "../components/Stripe/stripe-payment-element";

import imgF1 from "../assets/image/l2/png/featured-job-logo-1.png";
import imgB1 from "../assets/image/l1/png/feature-brand-1.png";
import imgB2 from "../assets/image/l1/png/feature-brand-4.png";
import imgB3 from "../assets/image/l1/png/feature-brand-5.png";
import imgB4 from "../assets/image/l3/png/github-mark.png";
import imgB5 from "../assets/image/l3/png/universal.png";

const CandidateProfile = () => {
  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="bg-default-2 pt-16 pt-lg-22 pb-lg-27">
          <div className="container">
            {/* <!-- back Button --> */}
            <div className="row justify-content-center">
              <div className="col-12 mt-13 dark-mode-texts">
                <div className="mb-9">
                  <Link to="/dashboard-courses?enroll" className="d-flex align-items-center ml-4">
                    <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                    <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                      Back
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- back Button End --> */}
            <div className="row ">
              {/* <!-- Company Profile --> */}
              <div className="col-12 col-xl-12 col-lg-12">
                <div className="bg-white rounded-4 pt-11 shadow-9">
                  <div className="d-xs-flex align-items-center pl-xs-12 mb-8 text-center text-xs-left">
                    <Link to="/#" className="mr-xs-7 mb-5 mb-xs-0">
                      <img className="square-72 rounded-6" src="none" alt="" />
                    </Link>
                    <div className="">
                      <h2 className="mt-xs-n5">
                        <Link
                          to="/#"
                          className="font-size-6 text-black-2 font-weight-semibold"
                        >
                          History: American Revolution
                        </Link>
                      </h2>
                      <span className="mb-0 text-gray font-size-4">
                        History 202
                      </span>
                    </div>
                  </div>
                  {/* <!-- Tab Section Start --> */}
                  <Tab.Container id="left-tabs-example" defaultActiveKey="course">
                    <Nav
                      className="nav border-bottom border-mercury pl-12"
                      role="tablist"
                    >
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="course"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Course
                        </Nav.Link>
                      </li>
                    </Nav>
                    {/* <!-- Tab Content --> */}
                    <Tab.Content className="pl-12 pt-10 pb-7 pr-12 pr-xxl-24">
                      <Tab.Pane eventKey="course">
                        {/* <!-- Middle Body Start --> */}
                        <div className="row">
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Class Size</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                50
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Credits</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                3
                              </h5>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Taught By</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                               John Larson
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Location</p>
                               <h5 className="font-size-4 font-weight-semibold text-black-2">
                                TBD
                              </h5>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Email</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                jlarson@school.com
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Price</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                $255
                              </h5>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                        </div>
                        {/* <!-- Middle Body End --> */}
                        {/* <!-- Excerpt Start --> */}
                        <h4 className="font-size-6 mb-7 text-black-2 font-weight-semibold">
                          About Course
                        </h4>
                        <div className="pt-5 ">
                          <p className="font-size-4 mb-8">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Dictum at tempor commodo ullamcorper a. Eget lorem dolor sed viverra ipsum. Dignissim diam quis enim lobortis scelerisque fermentum. Maecenas ultricies mi eget mauris pharetra et ultrices. Egestas maecenas pharetra convallis posuere morbi leo urna. Magna etiam tempor orci eu. Dictum sit amet justo donec enim diam vulputate ut pharetra. Tincidunt ornare massa eget egestas purus viverra accumsan in. Iaculis eu non diam phasellus. Ornare suspendisse sed nisi lacus. Cras semper auctor neque vitae tempus. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Arcu felis bibendum ut tristique. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Faucibus et molestie ac feugiat sed lectus.
                          </p>
                          <p className="font-size-4 mb-8">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Dictum at tempor commodo ullamcorper a. Eget lorem dolor sed viverra ipsum. Dignissim diam quis enim lobortis scelerisque fermentum. Maecenas ultricies mi eget mauris pharetra et ultrices. Egestas maecenas pharetra convallis posuere morbi leo urna. Magna etiam tempor orci eu. Dictum sit amet justo donec enim diam vulputate ut pharetra. Tincidunt ornare massa eget egestas purus viverra accumsan in. Iaculis eu non diam phasellus. Ornare suspendisse sed nisi lacus. Cras semper auctor neque vitae tempus. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Arcu felis bibendum ut tristique. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Faucibus et molestie ac feugiat sed lectus.
                          </p>
                        </div>
                        {/* <!-- Excerpt End --> */}
                      </Tab.Pane>
                      <StripePayment />
                    </Tab.Content>
                    {/* <!-- Tab Content End --> */}
                    {/* <!-- Tab Section End --> */}
                  </Tab.Container>
                </div>
              </div>
              {/* <!-- Company Profile End --> */}
              {/* <!-- Sidebar --> */}
             
              {/* <!-- end Sidebar --> */}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default CandidateProfile;
