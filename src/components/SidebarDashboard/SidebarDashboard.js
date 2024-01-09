import React, { useContext } from "react";
import { Link } from "gatsby";
import { Collapse } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import imgL from "../../assets/image/logo-main-black.png";

const Sidebar = () => {
  const gContext = useContext(GlobalContext);
  const role = gContext.userRole
  const roleCreation= {
    student: "Enroll in a Course",
    teacher: "Create a course",
    parent: "Enroll Student in a course",
  }

  const roleCreationButtonRedirect = {
    student: "/dashboard-courses?enroll",
    teacher: "/create-course",
    parent: "/dashboard-courses?enroll",
  }
  return (
    <>
      <Collapse in={gContext.showSidebarDashboard}>
        <div className="dashboard-sidebar-wrapper pt-11" id="sidebar">
          <div className="brand-logo px-11">
            <Link to="/">
              <img src={imgL} alt="" />
            </Link>
          </div>
          <div className="my-15 px-11">
            <Link
              to={roleCreationButtonRedirect[role]}
              className="btn btn-primary btn-xl w-100 text-uppercase"
            >
              <span className="mr-5 d-inline-block">+</span>{roleCreation[role]}
            </Link>
          </div>
          <ul className="list-unstyled dashboard-layout-sidebar">
            <li className="">
              <Link
                activeClassName="active"
                to="/dashboard-main"
                className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
              >
                <i className="icon icon-layout-11 mr-7"></i>Dashboard
              </Link>
            </li>
            {role === "teacher" ?
            (<li className="">
              <Link
                to="/dashboard-attendance"
                activeClassName="active"
                className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
              >
                <i className="fas fa-briefcase mr-7"></i>Attendance
              </Link>
            </li>
            ): null}
            <li className="">
              <Link
                to="/dashboard-courses"
                activeClassName="active"
                className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
              >
                <i className="fas fa-book mr-7"></i>Courses{" "}
                <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">
                  14
                </span>
              </Link>
            </li>
            <li className="">
              <Link
                to="/dashboard-household"
                activeClassName="active"
                className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
              >
                <i className="fas fa-home mr-7"></i>Household
              </Link>
            </li>
            <li className="">
              <Link
                to="/dashboard-settings"
                activeClassName="active"
                className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"
              >
                <i className="fas fa-cog mr-7"></i>Settings
              </Link>
            </li>
          </ul>
        </div>
      </Collapse>
      <a
        href="/#"
        className="sidebar-mobile-button"
        onClick={(e) => {
          e.preventDefault();
          gContext.toggleSidebarDashboard();
        }}
      >
        <i className="icon icon-sidebar-2"></i>
      </a>
    </>
  );
};

export default Sidebar;
