import React, { useContext, useEffect, useState } from 'react';
import { location, navigate } from "gatsby";
import styled from "styled-components";
import { useAuthContext } from '../context/AuthContext';
import { setToken } from '../utils/helperFn';

const backendUrl = process.env.BACKEND_URL || "localhost:1337";
const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

const LoginRedirect = ({location}) => {
  const [text, setText] = useState('Loading...');
  const {setAuthToken} = useAuthContext();
  useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    const fetchUserData = async () =>  await fetch(`https://${backendUrl}/api/auth/auth0/callback${location.search}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then(res => res.json())
      .then((res) => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        setAuthToken(res.jwt);
         setToken(res.jwt);
        setText('You have been successfully logged in. You will be redirected in a few seconds...');
        
      }).then(()=> setTimeout(() => navigate('/dashboard-main'), 5000)) // Redirect to homepage after 3 sec)
      .catch(err => {
        console.log(err);
        setText('An error occurred, please contact Admin for more details.')
      });

      fetchUserData();
  }, [location, location.search]);

  return <div>
  
    <div className="pricing-area">
            <div className="container pt-12 pt-lg-24 pb-13 pb-lg-25">
              <div className="row justify-content-center">
                <div
                  className="col-xxl-6 col-lg-7 col-md-9"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <div className="section-title text-center mb-12 mb-lg-18 mb-lg-15 pb-lg-15 pb-0">
                    <h2 className="mb-9">
                     {text}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </div>
};

export default LoginRedirect;