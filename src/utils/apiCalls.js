import axios from "axios";
import { getToken } from "./helperFn";
import { BEARER } from "../constant";
const backendUrl = process.env.BACKEND_URL || "localhost:1337";


const config = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      'Content-Type': `application/json`
    }
  };

// Course Calls 
  
export const getCourses = async (id) =>
     await axios.get(`https://${backendUrl}/api/courses${id ?  `/${id}` : ''}?populate=teacher,user`, config)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error(error);
    });

    export const getUserCourses = async (id) =>
    await axios.get(`https://${backendUrl}/api/courses?filters[user][username][$eq]=${id}&populate=user,teacher`, config)
   .then(response => {
     return response.data
   })
   .catch(error => {
     console.error(error);
   });






// USER CALLS

export const registerUser = async(user, course) => {
await axios.put(`https://${backendUrl}/api/courses/${course.id}?populate=user,teacher`, JSON.stringify({
  data: {
  user: {connect: [user.id] }
  }
}), config)
.then(response => {
  const data = response
  return data
})
.catch(error => {
  console.error(error);
});
}


export const updateUser = async(info, userID) => {
  const token = getToken();
  const data = {}
 Object.keys(info).map(key => data[key] = info[key]);
  await axios.put(`https://${backendUrl}/api/users/${userID}`, JSON.stringify(
    data
), config)
  .then(response => {
    const data = response
    return data
  })
  .catch(error => {
    console.error(error);
  });
  }

  // Attendance calls
  
  export const getAttendanceByStudent = async (userID, courseID) =>
  await axios.get(`https://${backendUrl}/api/attendance-records?filters[course][id][$eq]=${courseID}&filters[user][id][$eq]=${userID}`, config)
 .then(response => {
   return response.data
 })
 .catch(error => {
   console.error(error);
 });


 export const getAttendanceByCourse = async (courseID, weekNumber) =>
 await axios.get(`https://${backendUrl}/api/attendance-records?filters[course][id][$eq]=${courseID}&filters[week_number][$eq]=${weekNumber}&populate=user`, config)
.then(response => {
  return response.data
})
.catch(error => {
  console.error(error);
});

export const updateAttendance = async (attendanceData) => {
  const {userID, courseID, weekNumber, weekTracker} = attendanceData;
  const {id} = weekTracker;
  const data = {
    user: {connect: [userID] },
    course: {connect: [courseID]},
    week_number: parseInt(weekNumber),
    week_tracker: weekTracker,
    }
  if (id) {
    delete weekTracker.id
    await axios.put(`https://${backendUrl}/api/attendance-records/${id}`, JSON.stringify(
      {data}
  ), config).then(response => {
    return response.data
  })
  .catch(error => {
    console.error(error);
  });
  }
  else {
    await axios.post(`https://${backendUrl}/api/attendance-records/ `, JSON.stringify(
      {data}
  ), config).then(response => {
    return response.data
  })
  .catch(error => {
    console.error(error);
  });

  }




}
