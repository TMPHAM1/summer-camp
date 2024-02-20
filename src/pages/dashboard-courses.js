import React, { useContext, useEffect, useState } from "react";
import { Link, navigate } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import GlobalContext from "../context/GlobalContext";
import InformationModal from "../components/InformationModal"
import {getCourses, getUserCourses} from "../utils/apiCalls"
import { AuthContext } from "../context/AuthContext";

const DashboardCourses = ({location}) => {
  const gContext = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false)
  const isEnroll = location && location.search === "?enroll" ;
  const {user} = useContext(AuthContext);
const [courses, setCourses] = useState([]);
const [courseSelected, setCourseSelected] = useState(null);
useEffect(()=> {
 const fetchData = async () => {

  try {
    const courses = await getCourses();
    if(isEnroll) { 
    setCourses(courses.data);
    }
    else {
      if(user) {
      const userCourses  = await getUserCourses(user.username);
      setCourses(userCourses.data)
      }
    }
  } catch (error) {
    console.log(error);
  }
};

fetchData();
}, [location, user])
const title = isEnroll ? "Course List" : "My Courses"
const handleToggle = () => {
  setShowModal(!showModal)}
const username = user ? user.username : null;
const role = user ? user.role.name : 'Authenticated';
const content =  <div className="mb-14">
   <InformationModal showModal={showModal} handleClose={handleToggle} course={courseSelected}/>
<div className="row mb-11 align-items-between">
  <div className="col-lg-6 mb-lg-0 mb-4">
    <h3 className="font-size-6 mb-0">{title} ({courses.length})</h3>
  
  </div>
  <div className="col-lg-6 mb-lg-0 mb-4">
  {!isEnroll && role === "Teacher" ? null : <Link to="/dashboard-courses?enroll" className="btn btn-primary float-right text-uppercase float-right border-dark">Enroll</Link>}
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
          >
            Seats Available
          </th>
          <th
            scope="col"
            className="border-0 font-size-4 font-weight-normal"
          ></th>
        </tr>
      </thead>
      <tbody>
        {courses ? courses.map((course) => {
          
          const registrationAvailable = course.attributes.seats_available - course.attributes.user.data.length  !== 0;
         return (<tr className="border border-color-2">
          <th scope="row" className="pl-6 border-0 py-7 pr-0">
            <span
              onClick={handleToggle}
              className="media min-width-px-235 align-items-center"
            >
              <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                {course.attributes.name}
              </h4>
            </span>
          </th>
          <td className="table-y-middle py-7 min-width-px-235 pr-0">
            <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
             {course.attributes.teacher.data ? course.attributes.teacher.data.attributes.name : 'TBD'}
            </h3>
          </td>
          <td className="table-y-middle py-7 min-width-px-170 pr-0">
            <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
             {course.attributes.start_date}
            </h3>
          </td>
          <td className="table-y-middle py-7 min-width-px-170 pr-0">
            <div className="">
              <a
                href="/#"
                className="font-size-3 font-weight-bold text-black-2 text-uppercase"
              >
                {course.attributes.end_date}
              </a>
            </div>
          </td>
          <td className="table-y-middle py-7 min-width-px-100 pr-0">
            <div className="">
         
               {course.attributes.seats_available - course.attributes.user.data.length}
                 </div>
          </td>
          <td className="table-y-middle py-7 min-width-px-110 pr-0">
            <div className="">
              <Link
                className="font-size-3 font-weight-bold text-green text-uppercase"
              >
                {isEnroll ? 
                  ((course.attributes.user.data.some((item) => {return item.attributes.username === username})) 
                  ? <button  disabled={true} className={`btn btn-warning btn-light disabled btn-md w-20 text-uppercase float-right border-dark`}>Already Enrolled</button> 
                  : 
                  <button onClick={()=> {setCourseSelected(course); navigate(`/enroll?course=${course.id}`)}} disabled={!registrationAvailable} className={`btn ${registrationAvailable ?  "btn-primary" : "btn-danger disabled"} btn-md w-20 text-uppercase float-right border-dark`}>{registrationAvailable ? "Register" : "Full" }</button>) 
                  : <button onClick={()=> {setCourseSelected(course); handleToggle();}} className={`btn btn-primary btn-md w-20 text-uppercase float-right border-dark`}>Details</button>}
              </Link>
            </div>
          </td>
         
        </tr>)}) : <div>No Courses Available</div>}
      </tbody>
    </table>
  </div>
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
