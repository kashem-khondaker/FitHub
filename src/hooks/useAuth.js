import { useState } from "react";
import ApiClient from "../services/ApiClient";
import authApiClient from "../services/AuthApiClient";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const getToken = () => {
    const tokens = localStorage.getItem("authTokens");
    return tokens ? JSON.parse(tokens) : null;
  };

  const [authTokens, setAuthTokens] = useState(getToken());

  // error handler
  const errorHandler = (error, defaultMsg = "Something went wrong") => {
    const msg = error.response?.data?.detail || defaultMsg;
    console.error("Error:", msg);
    setErrorMsg(msg);
  };

  const fetchUserProfile = async() => {
    try {
      const response = await authApiClient.get('/auth/users/me/')
      setUser(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  // login user
  const loginUser = async (userData) => {
    setErrorMsg("");
    try {
      const response = await ApiClient.post("/auth/jwt/create/", userData);
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      fetchUserProfile();
      return { success: true };
    } catch (error) {
      console.log("Login Error : ", error);
      errorHandler(error);
      return { success: false };
    } 
  };


  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
  }

  // User Profile Update by PATCH 

  // const UserProfileUpdate = async(data) => {
  //   try {
  //     const response = await authApiClient.patch(`/users/profile/${id}/`, data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }



  return {
    user,
    authTokens,
    errorMsg,
    loginUser,
    logoutUser,
  };
};

export default useAuth;
