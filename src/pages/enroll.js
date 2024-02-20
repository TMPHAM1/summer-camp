import React, {useContext, useEffect, useState} from "react";
import { Nav, Tab } from "react-bootstrap";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import StripePayment from "../components/Stripe/stripe-payment-element";
import { getCourses, } from "../utils/apiCalls";
import { AuthContext } from "../context/AuthContext";



const CandidateProfile = ({location}) => {  
  const enrollParams = new URLSearchParams(location.search);
  const aContext = useContext(AuthContext);
  const {user} = aContext;
  const [course, setCourse] = useState(null)
  const courseID = enrollParams.get('course');
  useEffect(()=> {
    const fetchData = async () => {
     try {
       const response = await getCourses(courseID);
       setCourse(response.data);
     } catch (error) {
       console.log(error);
     }
   };
   
   fetchData();
   }, [])
   if(!course) {
      return <div>Error with purchasing current course</div>
   }
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
                          {course.attributes.name}
                        </Link>
                      </h2>
                      <span className="mb-0 text-gray font-size-4">
                          {course.attributes.name}
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
                              <p className="font-size-4">Seat Available</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                                 {course.attributes.seats_available - course.attributes.user.data.length}
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
                               {course.attributes.teacher.data ? course.attributes.teacher.data.attributes.name : "TBD"}
                              </h5>
                            </div>
                            <div className="mb-8">
                              <p className="font-size-4">Location</p>
                               <h5 className="font-size-4 font-weight-semibold text-black-2">
                                {course.attributes.location}
                              </h5>
                            </div>
                          </div>
                          {/* <!-- Single Widgets End --> */}
                          {/* <!-- Single Widgets Start --> */}
                          <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                            <div className="mb-8">
                              <p className="font-size-4">Email</p>
                              <h5 className="font-size-4 font-weight-semibold text-black-2">
                              {course.attributes.teacher.data ? course.attributes.teacher.data.attributes.email : ''}
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
                          
                        {course.attributes.description.split(/\r?\n|\r|\n/g).map((descriptionBlock) => <p className="font-size-4 mb-8">{descriptionBlock}</p> )}
                          
                        </div>
                        {/* <!-- Excerpt End --> */}
                      </Tab.Pane>
                      <StripePayment course={course} user={user}/>
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
