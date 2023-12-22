import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { Location } from '@reach/router';
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";
import InformationModal from "../components/InformationModal"

const DashboardCourses = ({location}) => {
  const gContext = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false)
  const fillerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Dictum at tempor commodo ullamcorper a. Eget lorem dolor sed viverra ipsum. Dignissim diam quis enim lobortis scelerisque fermentum. Maecenas ultricies mi eget mauris pharetra et ultrices. Egestas maecenas pharetra convallis posuere morbi leo urna. Magna etiam tempor orci eu. Dictum sit amet justo donec enim diam vulputate ut pharetra. Tincidunt ornare massa eget egestas purus viverra accumsan in. Iaculis eu non diam phasellus. Ornare suspendisse sed nisi lacus. Cras semper auctor neque vitae tempus. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Arcu felis bibendum ut tristique. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Faucibus et molestie ac feugiat sed lectus."
  const defaultCourses = [
    {name: "History",
     start_date: "1/22/23",
     end_date: "4/29/23",
     taught_by: "Marley Jones",
     seats_available: 50,
     description: fillerText,
    },
    {name: "Science",
    start_date: "1/22/23",
    end_date: "4/29/23",
    taught_by: "Marley Jones",
    seats_available: 25,
    description: fillerText,
   },
   {name: "Archery",
   start_date: "1/22/23",
   end_date: "4/29/23",
   taught_by: "Marley Jones",
   seats_available: 0,
   description: fillerText,
  }, {name: "Phsyics",
  start_date: "1/22/23",
  end_date: "4/29/23",
  taught_by: "Marley Jones",
  seats_available: 50,
  description: fillerText,
 }, {name: "Math",
 start_date: "1/22/23",
 end_date: "4/29/23",
 taught_by: "Marley Jones",
 seats_available: 50,
 description: fillerText,
}
  ]
const handleToggle = () => {setShowModal(!showModal)}
const isEnroll = location && location.search === "?enroll" ;
const role = gContext.header.role

const content =  <div className="mb-14">
   <InformationModal showModal={showModal} handleClose={handleToggle} />
<div className="row mb-11 align-items-between">
  <div className="col-lg-6 mb-lg-0 mb-4">
    <h3 className="font-size-6 mb-0">Course List ({defaultCourses.length})</h3>
  
  </div>
  <div className="col-lg-6 mb-lg-0 mb-4">
  {isEnroll && role !== "teacher" ? null : <Link to="/dashboard-courses?enroll" className="btn btn-primary float-right text-uppercase float-right border-dark">Enroll</Link>}
  </div>
</div>
<div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
  <div className="table-responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th
            scope="col"
            className="pl-0  border-0 font-size-4 font-weight-normal"
          >
            Course Name
          </th>
          <th
            scope="col"
            className="border-0 font-size-4 font-weight-normal"
          >
            Taught By
          </th>
          <th
            scope="col"
            className="border-0 font-size-4 font-weight-normal"
          >
            Start Date
          </th>
          <th
            scope="col"
            className="border-0 font-size-4 font-weight-normal"
          >
            End Date
          </th>
          <th
            scope="col"
            className="border-0 font-size-4 font-weight-normal"
          ></th>
          <th
            scope="col"
            className="border-0 font-size-4 font-weight-normal"
          ></th>
        </tr>
      </thead>
      <tbody>
        {defaultCourses.map((course) => {
          const registartionAvailable = course.seats_available !== 0;
         return (<tr className="border border-color-2">
          <th scope="row" className="pl-6 border-0 py-7 pr-0">
            <span
              onClick={handleToggle}
              className="media min-width-px-235 align-items-center"
            >
              {/* <div className="circle-36 mr-6">
                <img src={imgP1} alt="" className="w-100" />
              </div> */}
              <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                {course.name}
              </h4>
            </span>
          </th>
          <td className="table-y-middle py-7 min-width-px-235 pr-0">
            <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
             {course.taught_by}
            </h3>
          </td>
          <td className="table-y-middle py-7 min-width-px-170 pr-0">
            <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
             {course.start_date}
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
                {course.end_date}
              </a>
            </div>
          </td>
          <td className="table-y-middle py-7 min-width-px-100 pr-0">
            <div className="">
              <Link
                to="/#"
                className={`font-size-3 font-weight-bold ${course.seats_available < 5 ? 'text-red-2' : 'text-black-2'} text-uppercase`}
              >
               {course.seats_available}
              </Link>
            </div>
          </td>
          <td className="table-y-middle py-7 min-width-px-110 pr-0">
            <div className="">
              <Link
                className="font-size-3 font-weight-bold text-green text-uppercase"
              >
                {isEnroll ? 
                <button disabled={!registartionAvailable} className={`btn ${registartionAvailable ?  "btn-primary" : "btn-light disabled"} btn-md w-20 text-uppercase float-right border-dark`}>{registartionAvailable ? "Register" : "Full" }</button> : 
                <button onClick={handleToggle} className={`btn btn-primary btn-md w-20 text-uppercase float-right border-dark`}>Details</button>}
              </Link>
            </div>
          </td>
         
        </tr>)})}
      </tbody>
    </table>
  </div>
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
  {location && location.pathname === "/dashboard-courses" ?
<div className="dashboard-main-container mt-25 mt-lg-31"> 
  <div className="container">
      {content}
  </div>
</div> : content}
      </PageWrapper>
    </>
  );
};
export default DashboardCourses;
