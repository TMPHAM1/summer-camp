import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { Nav, Tab } from "react-bootstrap";
import { Link } from "gatsby";
import GlobalContext from "../../context/GlobalContext";

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalSignUp = (props) => {
  const {course, handleClose,showModal} = props;
  if(!course) {
    return <div></div>
  }
  console.log("THIS IS COURSE PASSED THRU INFORMATION MODAL", course)
  const {description, teacher, seats_available, start_date, end_date, name, location, credits, cost} = course.attributes;
  console.log('THIS IS COURSE', course);
  console.log('THIS IS TEACHER', teacher)
  return (
    <ModalStyled
      size="lg"
      centered
      show={showModal}
      onHide={()=> {}}
    >
      <Modal.Body className="p-0">
        <button
          type="button"
          className="circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10"
          onClick={handleClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="login-modal-main bg-white rounded-8 overflow-hidden">
          <div className="row no-gutters">
            <div className="container">
            <div className="row ">
              {/* <!-- Course Information --> */}
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
                          {name}
                        </Link>
                      </h2>
                      <span className="mb-0 text-gray font-size-4">
                       {location || "TBD"}
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
                                {seats_available}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Credits</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                {credits || "TBD"}
                              </h5>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Taught By</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                               {teacher.data ? teacher.data.attributes.name : "TBD"}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Location</p>
                               <h5 className="font-size-4 font-weight-semibold text-black-2">
                                {location || "TBD"}
                              </h5>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Email</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                {teacher.data ? teacher.data.attributes.name :"TBD"}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Price</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                {cost || "TBD"}
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
                            {description}
                          </p>
                        </div>
                        {/* <!-- Excerpt End --> */}
                      </Tab.Pane>
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
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};

export default ModalSignUp;
