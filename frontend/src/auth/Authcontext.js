import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null);
    const [currentUserb, setCurrentUserb] = useState(
      JSON.parse(localStorage.getItem("userbio")) || null);

  const login = async (inputs) => {
    const res = await axios.post("https://myguvi-backend.onrender.com/api/user/login", inputs);
    const userData = res.data;
    setCurrentUser(userData);
  };

  const updateBio = async (bio) => {
    const res = await axios.post("https://myguvi-backend.onrender.com/api/user/bio",bio);
    const userbio = res.data;
    setCurrentUserb(userbio);
  };


  const logout = async () => {
    await axios.post("https://myguvi-backend.onrender.com/api/user/logout");
    setCurrentUser(null);
    setCurrentUserb(null);
  };

 
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("userbio", JSON.stringify(currentUserb));
  }, [currentUser,currentUserb]);

  return (
    <AuthContext.Provider value={{ currentUser,currentUserb,login, logout ,updateBio }}>
      {children}
    </AuthContext.Provider>
  );
};