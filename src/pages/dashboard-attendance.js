import React, {useContext, useState, useEffect} from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import { AuthContext } from "../context/AuthContext";
import { getUserCourses, getAttendanceByStudent, getAttendanceByCourse, updateAttendance } from "../utils/apiCalls";
import {startCase} from 'lodash'
import styled, {keyframes} from "styled-components";

const weeks = [
  { value: 1, label: "Week 1" },
  { value: 2, label: "Week 2" },
  { value: 3, label: "Week 3" },
  { value: 4, label: "Week 4" },
]

const DashboardAttendance = ({location}) => {

  const rotation =
   keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
 `
const Loader = styled.div`
  width: 20px;
  height: 20px;
  border: 4px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;  



  const aContext = useContext(AuthContext);
  const {user} = aContext;
  
  const isTeacher = user ? user.role.name === "Teacher": false;
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([])
  const [courseSelected, setCourseSelected] = useState(null)
  const [weekSelected, setWeekSelected] = useState({ value: "1", label: "Week 1" },);
  const [attendance, setAttendance] = useState(null);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const handleCourseSelect = (value) => {
    setCourseSelected(value)
  }

  const handleWeekSelected = (value) => {
    setWeekSelected(value)
  }
  const handleAttendanceChange = (e)=> {
    const value = e.target.checked;
    const  [student, day] = e.target.id.split("-")
    const updateAttendance = {...attendance, [student]: {...attendance[student], [day]: value}}
    setAttendance(updateAttendance);
  }

  const handleUpdateAttendance = async () => {
    setSubmitIsLoading(true);
    try {
      for (const student of students) {
        await updateAttendance({courseID: courseSelected.value, weekNumber: weekSelected.value, weekTracker: attendance[student], userID: user.id })
      }
      setShowCheck(true);
      setTimeout(setShowCheck(false), 6000)
  }
  catch(error){
    console.log(error);
  }
  finally {setSubmitIsLoading(false)}
  }
  const getStudents = (studentData) => {
      const studentDataFormatted = [];
      studentData.forEach(student => {
        studentDataFormatted.push(`${student.attributes.first_name}_${student.attributes.last_name}`)
      })

      return studentDataFormatted;
  }
  useEffect(()=> {
    const fetchData = async () => {
     try {
         if(user) {
         const userCourses  = await getUserCourses(user.username);
         const coursesData = userCourses.data.map((course)=> {return {value: course.id, label: course.attributes.name, students: getStudents(course.attributes.user.data) }})
         if (coursesData.length > 0) {
          setCourseSelected(coursesData[0]);
         }
         setCourses(coursesData)
         }
       
     } catch (error) {
       console.log(error);
     }
   };
   
   fetchData();
   }, [user])
   // Handle Attendance Population
   useEffect(()=> {
    const fetchData = async () => {
     try {
       if(!isTeacher && courseSelected) {
        const attendanceData = await getAttendanceByStudent(user.id, courseSelected.value)
        const attendanceDataFormatted = {};
        attendanceData.data.forEach(item=> {
          attendanceDataFormatted[item.attributes.week_number] = item.attributes.week_tracker;
        })
        setAttendance(attendanceDataFormatted);
       }
       else if (courseSelected) {
        const courseAttendanceData = await getAttendanceByCourse(courseSelected.value, weekSelected.value);
        const courseAttendanceDataFormatted = {};
        courseAttendanceData.data.forEach(item=> {
          courseAttendanceDataFormatted[`${item.attributes.user.data.attributes.first_name}_${item.attributes.user.data.attributes.last_name}`] = item.attributes.week_tracker;
        })
        setStudents(courseSelected.students)
        setAttendance(courseAttendanceDataFormatted);
        }
    } catch (error) {
       console.log(error);
     }
   };
   
   fetchData();
   }, [weekSelected, courseSelected])

  const content =  <div className="mb-18">
<div className="row mb-11 align-items-center">
  <div className="col-lg-6 mb-lg-0 mb-4">
    <h3 className="font-size-6 mb-0">Attendance</h3>
  </div>
  <div className="col-lg-6">
    <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
      <p className="font-size-4 mb-0 mr-6 py-2">Filter by Course:</p>
      <div className="h-px-48">
        <Select
          options={courses}
          className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
          border={false}
          onChange={handleCourseSelect}
          value={courseSelected}
        />
      </div>
    </div>
    {isTeacher ? <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
      <p className="font-size-4 mb-0 mr-6 py-2">Filter by Week:</p>
      <div className="h-px-48">
        <Select
          options={weeks}
          className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
          border={false}
          onChange={handleWeekSelected}
          value={weekSelected}
        />
      </div>
    </div> : null}
  </div>
</div>
<div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
 { courseSelected ?<div className="table-responsive ">
    <table className="table table-striped">
      <thead>
        <tr>
        <th
            scope="col"
            className="pl-0 border-0 font-size-4 font-weight-normal"
          >
            Student
        </th>
          <th
            scope="col"
            className="pl-0 border-0 font-size-4 font-weight-normal"
          >
            Monday
          </th>
          <th
            scope="col"
            className="pl-4 border-0 font-size-4 font-weight-normal"
          >
            Tuesday
          </th>
          <th
            scope="col"
            className="pl-0 border-0 font-size-4 font-weight-normal"
          >
            Wednesday
          </th>
          <th
            scope="col"
            className="pl-0 border-0 font-size-4 font-weight-normal"
          >
            Thursday
          </th>
          <th
            scope="col"
            className="pl-0 border-0 font-size-4 font-weight-normal"
          >
            Friday
          </th>
        </tr>
      </thead>
      <tbody>
        {isTeacher ? students.map(student => {
          return <tr className="border border-color-2">
          <th
            scope="row"
            className="pl-6 border-0 py-7 min-width-px-235"
          >
            <div className="">
              <Link
                to="/job-details"
                className="font-size-4 mb-0 font-weight-semibold text-black-2"
              >
                {startCase(student.split("_"))}
              </Link>
            </div>
          </th>
          <td className="table-y-middle py-7 min-width-px-135">
            <label
              htmlFor={`${student}-MON`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${student}-MON`}
                  defaultChecked={false}
                  checked={attendance && attendance[student] ? attendance[student].MON : false}
                  onChange={handleAttendanceChange}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
            <label
              htmlFor={`${student}-TUE`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${student}-TUE`}
                  checked={attendance && attendance[student] ? attendance[student].TUE : false}
                  onChange={handleAttendanceChange}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
            <label
              htmlFor={`${student}-WED`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${student}-WED`}
                  checked={attendance && attendance[student] ? attendance[student].WED: false}
                  onChange={handleAttendanceChange}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
          <label
              htmlFor={`${student}-THUR`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${student}-THUR`}
                  checked={attendance && attendance[student] ? attendance[student].THUR : false}
                  onChange={handleAttendanceChange}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
          <label
              htmlFor={`${student}-FRI`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${student}-FRI`}
                  checked={attendance && attendance[student] ? attendance[student].FRI : false}
                  onChange={handleAttendanceChange}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
        </tr>
        }) : 
        weeks.map(week => {
          return <tr className="border border-color-2">
          <th
            scope="row"
            className="pl-6 border-0 py-7 min-width-px-235"
          >
            <div className="">
              <Link
                to="/job-details"
                className="font-size-4 mb-0 font-weight-semibold text-black-2"
              >
                {week.label}
              </Link>
            </div>
          </th>
          <td className="table-y-middle py-7 min-width-px-135">
            <label
              htmlFor={`${week.label}-monday`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${week.label}-monday`}
                  disabled={!isTeacher}
                  defaultChecked={false}
                  checked={attendance && attendance[week.value] ? attendance[week.value].MON : false}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
            <label
              htmlFor={`${week.label}-tuesday`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${week.label}-tuesday`}
                  defaultChecked={false}
                  checked={attendance && attendance[week.value] ? attendance[week.value].TUE : false}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
            <label
              htmlFor={`${week.label}-wednesday`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${week.label}-wednesday`}
                  defaultChecked={false}
                  checked={attendance && attendance[week.value] ? attendance[week.value].WED : false}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
          <label
              htmlFor={`${week.name}-thursday`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${week.label}-thursday`}
                  defaultChecked={false}
                  checked={attendance && attendance[week.value] ? attendance[week.value].THUR : false}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
          <label
              htmlFor={`${week.label}-friday`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${week.label}-friday`}
                  defaultChecked={false}
                  checked={attendance && attendance[week.value] ? attendance[week.value].FRI : false}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
        </tr>
        })}
      </tbody>
    </table>
    {isTeacher ? <button onClick={handleUpdateAttendance} className="btn btn-primary btn-xl w-20 text-uppercase float-right d-flex flex-align-items-center">{showCheck ? "Update Succcessful" : "Update"}<span className="ml-2">{submitIsLoading ? <Loader /> : (showCheck ? <font size="3"> <i class="fas fa-check text-white"></i> </font> : null)}</span></button>:  null}
  </div> : <div> No Course Selected to show Attendance </div>}
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
      {location && location.pathname === "/dashboard-attendance" ?
<div className="dashboard-main-container mt-25 mt-lg-31"> 
  <div className="container">
      {content}
  </div>
</div> : content}
      </PageWrapper>
    </>
  );
};
export default DashboardAttendance;
