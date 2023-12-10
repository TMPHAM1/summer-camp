import React, { useContext } from "react";
import { Link } from "gatsby";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";
import DashboardAttendance from "./dashboard-attendance";
import DashboardCourses from "./dashboard-courses";


import imgP1 from "../assets/image/table-one-profile-image-1.png";
import imgP2 from "../assets/image/table-one-profile-image-2.png";
import imgP3 from "../assets/image/table-one-profile-image-3.png";
import imgP4 from "../assets/image/table-one-profile-image-4.png";
import imgP5 from "../assets/image/table-one-profile-image-5.png";

const defaultJobs = [
  { value: "pd", label: "Product Designer" },
  { value: "gd", label: "Graphics Designer" },
  { value: "fd", label: "Frontend Developer" },
  { value: "bd", label: "Backend Developer" },
  { value: "cw", label: "Content Writer" },
];

const DashboardMain = () => {
  const gContext = useContext(GlobalContext);
  const role = gContext.header.role
  // Check Authenthentication
  const courseInfoText = {
    student: "Courses Enrolled",
    teacher: "Courses Managed", 
    guardian: "Total Courses Enrolled",
  }
  return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div className="dashboard-main-container mt-25 mt-lg-31">
          <div className="container">
            <div className="row mb-7">
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-blue bg-blue-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={6} end={5} />
                        </span>
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      {courseInfoText[role]}
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-pink bg-pink-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-user"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={4} end={256} />
                        </span>
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      Total Applicants
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-egg-blue bg-egg-blue-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-mouse-pointer"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp
                            duration={2}
                            decimal="."
                            decimals={1}
                            end={50}
                          />
                        </span>
                        %
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      Attendance Rate
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
            </div>
            <DashboardAttendance />
            <DashboardCourses />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardMain;
