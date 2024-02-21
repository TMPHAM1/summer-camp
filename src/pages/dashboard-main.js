import React, { useContext, useState, useEffect } from "react";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import PageWrapper from "../components/PageWrapper";
import { AuthContext } from "../context/AuthContext";
import DashboardAttendance from "./dashboard-attendance";
import DashboardCourses from "./dashboard-courses";
import NameModal from "../components/ModalUserRole"
import { getUserCourses } from "../utils/apiCalls";
import styled, {keyframes} from "styled-components";

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


const DashboardMain = () => {
  const {user} = useContext(AuthContext);
  const [showNameModal, setShowNameModal] = useState(false)
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const toggleNameModal = () => {
    setShowNameModal(!showNameModal);
  }
  const userRole = user ? user.role.name : 'Authenticated';
  const courseInfoText = {
    Authenticated: "Courses Enrolled",
    Teacher: "Courses Taught", 
    guardian: "Total Courses Enrolled",
  }

  useEffect(() => {
    if(user && !user.first_name) {
      toggleNameModal();
    }
  }, [user])

  useEffect(()=> {
    const fetchData = async () => {
    try {
      setIsLoading(true);
         const userCourses  = await getUserCourses(user.username, user.role.name === "Teacher");
         setCourses(userCourses.data)
       }
    catch (error) {
       console.log(error);
     }
     finally {setIsLoading(false)}
   };
   
   fetchData();
   }, [user])
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
         <NameModal showModal={showNameModal} user={user} onHide={toggleNameModal} />
        
        <div className="dashboard-main-container mt-25 mt-lg-31">
          <div className="container">
            <div className="row mb-7">
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-blue bg-blue-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      {isLoading ? <Loader/> :   <LazyLoad>
                        <span className="counter">
                          <CountUp duration={courses.length < 5 ? 2 : 7} end={courses.length} />
                        </span>
                      </LazyLoad>}
                    
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      {courseInfoText[userRole]}
                    </p>
                  </div>
                </a>
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
