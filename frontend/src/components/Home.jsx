import React , { useContext} from "react";
import {useNavigate } from 'react-router-dom';
import  './style.css';
import { AuthContext } from "../auth/Authcontext";

const Home = () => {
    
   
    const history = useNavigate()
  
    const { currentUser , currentUserb, logout } = useContext(AuthContext);

    const emaill = currentUserb?.data?.email || currentUser?.data?.email;
    //const username = email.substring(0, email.indexOf('@'));
    const username = currentUserb?.data?.name || currentUser?.data?.name;
    const getAge = () => {
        return Math.floor(Math.random() * 80) + 1; // Generates a random age between 1 and 80
      }; 
    
      const getDOB = () => {
        const randomDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'); // Generates a random day between 1 and 28
        const randomMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0'); // Generates a random month between 1 and 12
        const randomYear = String(Math.floor(Math.random() * (2003 - 1960 + 1)) + 1960); // Generates a random year between 1940 and 2003
    
        return `${randomDay}-${randomMonth}-${randomYear}`;
      };
    
      const getMobileNumber = () => {
        const randomNumber = String(Math.floor(Math.random() * 9000000000) + 1000000000); // Generates a random 10-digit mobile number
        const formattedNumber = `${randomNumber.substring(0, 3)}-${randomNumber.substring(3, 6)}-${randomNumber.substring(6)}`;
        return formattedNumber;
      };


      async function handleLogout() {
       await logout();
       alert('"User has been logged out !!')
        history('/')
      };
    
      const defaultAge = getAge();
      const defaultdob = getDOB();
      const defaultmobile = getMobileNumber();
      const age = currentUserb?.data?.age || defaultAge ;
      const dob = currentUserb?.data?.dob || defaultdob ;
      const mobile = currentUserb?.data?.mobile || defaultmobile ;
      
      



    return (
        <div className="homepage">
        <br /><br />
        <h1><center>Hello {username} !!</center></h1>
        <br/>
             <center>
             <h2>  <i className="fa-solid fa-user-pen" style={{fontSize:'0.4cm'}}> <a href="/edithome">Edit User Info </a></i> </h2>
             <div className="card" style={{ width: '18rem' }}>
            <div className="card-header">
               Name: {username}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" >Email : &nbsp; {emaill}</li>
                <li className="list-group-item">Age : &nbsp; {age } </li>
                <li className="list-group-item">DOB : &nbsp; {dob}</li>
                <li className="list-group-item">Mobile : &nbsp; {mobile}</li>
            </ul>
            </div>
            </center>
           
            <button  onClick={handleLogout} className="btn btn-primary">Logout</button>
            <br/><br/>
              <a className="btn btn-primary | pro" href="/user" role="button">
                 <i className="fa-solid fa-user me-2"></i>
                 Profile
              </a>
        </div>
    )
};



export default Home