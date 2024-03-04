// #components/AuthProvider/AuthProvider.jsx
    
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"
import { message } from "antd";
import { API, BEARER } from "../../constant";
import { useEffect } from "react";
import { getToken } from "../../utils/helperFn";
import { navigate } from "gatsby";

const AuthProvider = ({ children, location }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [authToken, setToken] = useState(getToken())
  const {user, setUser} = useContext(AuthContext)

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/users/me?populate=role,courses`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });
      const data = await response.json();
      setUser(data)
      setUserData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      message.error("Error While Getting Logged In User Details");
    }
  };

  const handleUser = (user) => {
    setUserData(user);
  };

  useEffect(() => {
      fetchLoggedInUser(authToken);
  }, [authToken]);


  return (
    <AuthContext.Provider
      value={{ user: userData, setUser: handleUser, setAuthToken: setToken, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;