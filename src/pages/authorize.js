import React, { useEffect, useState } from 'react';
import { location, navigate } from "gatsby";

const backendUrl ="http://localhost:1337";

const LoginRedirect = ({location}) => {
  const [text, setText] = useState('Loading...');

  useEffect(() => {
    if (!location) {
        return <div>Loading...</div>
    }
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    console.log("TIS IS PASS LOADING", `${backendUrl}/api/auth/auth0/callback${location.search}`)
    fetch(`${backendUrl}/api/auth/auth0/callback${location.search}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        console.log("this is res", res)
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('username', res.user.username);
        setText('You have been successfully logged in. You will be redirected in a few seconds...');
        setTimeout(() => navigate('/dashboard-main'), 3000); // Redirect to homepage after 3 sec
      })
      .catch(err => {
        console.log(err);
        setText('An error occurred, please see the developer console.')
      });
  }, [location, location.search]);

  return <p>{text}</p>
};

export default LoginRedirect;