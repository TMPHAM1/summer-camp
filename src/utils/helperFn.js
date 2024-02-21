
import { AUTH_TOKEN } from "../constant"
    

const windowExists = typeof window !== 'undefined' && window.localStorage;
export const titleCase = str => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
};

export const getToken = () => {
  return  windowExists ? localStorage.getItem(AUTH_TOKEN) : null;
};

export const setToken = (token) => {
  if (token && windowExists) {
    windowExists ? localStorage.setItem(AUTH_TOKEN, token) : null;
  }
};

export const removeToken = () => {
  if (windowExists) {
  localStorage.removeItem(AUTH_TOKEN)
  }
};