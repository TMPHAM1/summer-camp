import axios from "axios";

const config = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
    }
  };
  
export const getCourses = async (id) =>
     await axios.get(`https://api.tienmpham.com/api/courses${id ?  `/${id}` : ''}?populate=teacher`, config)
    .then(response => {
      console.log(response.data);
      return response.data
    })
    .catch(error => {
      console.error(error);
    });

    export const updateProfile = async (id) =>
    await axios.get(`https://api.tienmpham.com/api/users${id ?  `/${id}` : ''}?populate=teacher`, config)
   .then(response => {
     console.log(response.data);
     return response.data
   })
   .catch(error => {
     console.error(error);
   });

