// import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Landing from "./components/Landing"
import NotFound from "./components/NotFound"
import  { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { useState } from 'react';

function App() {

  
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     { path: "/", element: <Landing /> },
  //     { path: "/signup", element: <Signup/> },
  //     { path: "/login", element: <Login/> },
  //     { path: "/home", element: <Home /> },
  //     { path: "/*", element: <NotFound /> },
  //   ],
  // },
  {
    path: "/", 
    element: <Landing />, 
  },
  {
    path: "/signup", 
    element: <Signup />, 
  },
  {
    path: "/home", 
    element: <Home/>, 
  },
  {
    path: "/login", 
    element: <Login/>, 
  }, { path: "/*", element: <NotFound />, },

]);
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;

