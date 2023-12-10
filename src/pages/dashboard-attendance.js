import React, {useContext} from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";

const defaultJobs = [
  { value: "History", label: "History" },
  { value: "Science", label: "Science" },
  { value: "Archery", label: "Archery" },
  { value: "Fitness", label: "Fitness" },
  { value: "Kayaking", label: "Kayaking" },
];

const weeks = [
  { value: "11/27/23", label: "11/27/23" },
  { value: "12/04/23", label: "12/04/23" },
  { value: "12/11/23", label: "12/11/23" },
  { value: "12/18/23", label: "12/18/23" },
  { value: "12/25/23", label: "12/25/23" },
]

const defaultStudents  = [
  {name: 'Bob Doe', course: "history", attendance: ["T", "W", "TH", "F"]},
  {name: 'Jane Doe', course: "history", attendance: ["M", "T", "W", "TH", "F"]},
  {name: 'Jack Doe', course: "history", attendance: []},
  {name: 'Joe Doe', course: "history", attendance: ["M", "T", "TH", "F"]},
  {name: 'Pharell Doe', course: "history", attendance: ["M", "T", "W", "TH"]},
]




const DashboardAttendance = ({location}) => {
  const gContext = useContext(GlobalContext);
  const isTeacher = gContext.header.role === "teacher"

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
          options={defaultJobs}
          className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
          border={false}
        />
      </div>
    </div>
    <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
      <p className="font-size-4 mb-0 mr-6 py-2">Filter by Week:</p>
      <div className="h-px-48">
        <Select
          options={weeks}
          className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
          border={false}
        />
      </div>
    </div>
  </div>
</div>
<div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
  <div className="table-responsive ">
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
        {defaultStudents.map(student => {
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
                {student.name}
              </Link>
            </div>
          </th>
          <td className="table-y-middle py-7 min-width-px-135">
            <label
              htmlFor={`${student.name}-monday`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${student.name}-monday`}
                  disabled={!isTeacher}
                  defaultChecked={student.attendance.includes("M")}
                />
                <span className={`checkbox ${isTeacher ? '' : 'disabled'} `}></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
            <label
              htmlFor={`${student.name}-tuesday`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${student.name}-tuesday`}
                  disabled={!isTeacher}
                  defaultChecked={student.attendance.includes("T")}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
            <label
              htmlFor={`${student.name}-wednesday`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${student.name}-wednesday`}
                  disabled={!isTeacher}
                  defaultChecked={student.attendance.includes("W")}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
          <label
              htmlFor={`${student.name}-thursday`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${student.name}-thursday`}
                  disabled={!isTeacher}
                  defaultChecked={student.attendance.includes("TH")}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
          <td className="table-y-middle py-7 min-width-px-135">
          <label
              htmlFor={`${student.name}-friday`}
              className="gr-check-input d-flex  mr-3"
              >
                <input
                  className="d-none"
                  type="checkbox"
                  id={`${student.name}-friday`}
                  disabled={!isTeacher}
                  defaultChecked={student.attendance.includes("F")}
                />
                <span className="checkbox mr-5"></span>
            </label>
          </td>
        </tr>
        })}
      </tbody>
    </table>
    {isTeacher ? <button className="btn btn-primary btn-xl w-20 text-uppercase float-right">Update</button>:  null}
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
