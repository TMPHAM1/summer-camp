import axios from "axios";
const backendUrl = process.env.BACKEND_URL || "localhost:1337";


const config = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      'Content-Type': `application/json`
    }
  };
  
export const getCourses = async (id) =>
     await axios.get(`https://${backendUrl}/api/courses${id ?  `/${id}` : ''}?populate=teacher,user`, config)
    .then(response => {
      console.log(response.data);
      return response.data
    })
    .catch(error => {
      console.error(error);
    });

    export const getUserCourses = async (id) =>
    await axios.get(`https://${backendUrl}/api/courses?filters[user][username][$eq]=${id}&populate=user,teacher`, config)
   .then(response => {
     console.log(response.data);
     return response.data
   })
   .catch(error => {
     console.error(error);
   });

// export const updateProfile = async (id) =>
//     await axios.put(`https://${backendUrl}/api/users${id ?  `/${id}` : ''}?populate=teacher`, config)
//    .then(response => {
//      console.log(response.data);
//      return response.data
//    })
//    .catch(error => {
//      console.error(error);
//    });

export const registerUser = async(user, course) => {
console.log('THIS IS COURSE', course)
await axios.put(`https://${backendUrl}/api/courses/${course.id}?populate=user,teacher`, JSON.stringify({
  data: {
  user: {connect: [user.id] }
  }
}), config)
.then(response => {
  const data = response
  console.log("WE HAVE SUCCEEDED")
  return data
})
.catch(error => {
  console.error(error);
});
}