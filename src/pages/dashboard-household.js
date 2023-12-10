import React, { useContext } from "react";
import { Link } from "gatsby";
import { Location } from '@reach/router';
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";


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

const DashboardHousehold = ({location}) => {
  const gContext = useContext(GlobalContext);
  // const defaultMembers = [
  //   {name: "John Doe",
  //    status: "enrolled",
  //    grade: 2,
  //    role: "Student",
  //    units: 5
  //   },
  //   {name: "Jane Doe",
  //   status: "enrolled",
  //   grade: 2,
  //   role: "Gaurdian",
  //   units: 5
  //  }]
  const defaultMembers = [];

const content =  <div className="mb-14">
<div className="row mb-11 align-items-between">
  <div className="col-lg-6 mb-lg-0 mb-4">
    <h3 className="font-size-6 mb-0">Household Members ({defaultMembers.length})</h3>
  
  </div>
  <div className="col-lg-6 mb-lg-0 mb-4">
  <Link to="/enroll" className="btn btn-primary float-right text-uppercase float-right border-dark">Add Member</Link>
  </div>
</div>
<div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
  {defaultMembers.length === 0 ? (<div className="pt-md pt-17">
  <div className="pricing-area">
    <div className="container pt-12 pt-lg-24 pb-13 pb-lg-25">
      <div className="row justify-content-center">
        <div
          className="col-xxl-6 col-lg-7 col-md-9"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {/* <!-- section-title start --> */}
          <div className="section-title text-center mb-12 mb-lg-18 mb-lg-15 pb-lg-15 pb-0">
            <h2 className="mb-9">
             No Household Members Found
            </h2>
            <p className="text-default-color font-size-4 px-5 px-md-10 px-lg-15 px-xl-24 px-xxl-22">
              Please add a household member
            </p>
          </div>
          {/* <!-- section-title end --> */}
        </div>
      </div>
    </div>
  </div>
</div>) :
  (<div className="table-responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th
            scope="col"
            className="pl-0  border-0 font-size-4 font-weight-normal"
          >
            Name
          </th>
          <th
            scope="col"
            className="border-0 font-size-4 font-weight-normal"
          >
           Status
          </th>
          <th
            scope="col"
            className="border-0 font-size-4 font-weight-normal"
          >
           Grade
          </th>
          <th
            scope="col"
            className="border-0 font-size-4 font-weight-normal"
          >
            Role
          </th>
        </tr>
      </thead>
      <tbody>
        {defaultMembers.map((member) => {
         return (<tr className="border border-color-2">
          <th scope="row" className="pl-6 border-0 py-7 pr-0">
            <Link
              to="/candidate-profile"
              className="media min-width-px-235 align-items-center"
            >
              {/* <div className="circle-36 mr-6">
                <img src={imgP1} alt="" className="w-100" />
              </div> */}
              <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                {member.name}
              </h4>
            </Link>
          </th>
          <td className="table-y-middle py-7 min-width-px-235 pr-0">
            <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
             {member.status}
            </h3>
          </td>
          <td className="table-y-middle py-7 min-width-px-170 pr-0">
            <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
             {member.grade}
            </h3>
          </td>
          <td className="table-y-middle py-7 min-width-px-170 pr-0">
            <div className="">
              <a
                href="/#"
                className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                onClick={(e) => {
                  e.preventDefault();
                  gContext.toggleApplicationModal();
                }}
              >
                {member.role}
              </a>
            </div>
          </td>

        </tr>)})}
      </tbody>
    </table>
  </div>)}
{/* Pagination needs to be implemented */}
  {/* <div className="pt-2">
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-hover-primary rounded-0 ml-n2">
        <li className="page-item rounded-0 flex-all-center">
          <a
            href="/#"
            className="page-link rounded-0 border-0 px-3active"
            aria-label="Previous"
          >
            <i className="fas fa-chevron-left"></i>
          </a>
        </li>
        <li className="page-item">
          <a
            href="/#"
            className="page-link border-0 font-size-4 font-weight-semibold px-3"
          >
            1
          </a>
        </li>
        <li className="page-item">
          <a
            href="/#"
            className="page-link border-0 font-size-4 font-weight-semibold px-3"
          >
            2
          </a>
        </li>
        <li className="page-item">
          <a
            href="/#"
            className="page-link border-0 font-size-4 font-weight-semibold px-3"
          >
            3
          </a>
        </li>
        <li className="page-item disabled">
          <a
            href="/#"
            className="page-link border-0 font-size-4 font-weight-semibold px-3"
          >
            ...
          </a>
        </li>
        <li className="page-item ">
          <a
            href="/#"
            className="page-link border-0 font-size-4 font-weight-semibold px-3"
          >
            7
          </a>
        </li>
        <li className="page-item rounded-0 flex-all-center">
          <a
            href="/#"
            className="page-link rounded-0 border-0 px-3"
            aria-label="Next"
          >
            <i className="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div> */}
</div>
</div>
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
  {location && location.pathname === "/dashboard-household" ?
<div className="dashboard-main-container mt-25 mt-lg-31"> 
  <div className="container">
      {content}
  </div>
</div> : content}
      </PageWrapper>
    </>
  );
};
export default DashboardHousehold;
