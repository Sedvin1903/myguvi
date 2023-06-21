import React from 'react';
import {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/Authcontext";
import  './style.css';
//import axios from "axios";


const EditHome = () => {
    
    const { currentUser , updateBio } = useContext(AuthContext);


    const [bio, setInputs] = useState({
      id: currentUser?.data?._id ,
      name : "",
      email : "",
     age: "",
     dob: "",
     mobile: "",
    });
    const [err, setError] = useState(null);
    

    const history = useNavigate();

    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const hsubmit = async (e) => {
        e.preventDefault();

        try{
 
            await updateBio(bio);
            alert('Profile Successfully Updated !!')
            history('/home');
        }
        catch(err){
            console.log(err);
            setError(err.response.data);

        }

    };


    return (
        <div className="edithome">

            <center>
            <br /><br />
            <h1>Edit Profile <i className="fa-solid fa-user-pen"></i></h1>
            <br /><br />
            <form >

            <div className="mb-3">
            <label>Name</label>
            <input
            required
              type="text"
              className="form-group row"
              placeholder = "Name"
              name = "name"
              //value={currentUser?.data?.name}
              onChange={handleChange}
            />
            </div>
          <div className="mb-3">
            <label>Email</label>
            <input
            required
              type="email"
              className="form-group row"
              placeholder="Email"
              name = "email"
              onChange={handleChange}
              //value={currentUser?.data?.email}
            /></div>
          <div className="mb-3">
                    <label>Age</label>
                    <input
                    required
                    type="number"
                    className="form-group row"
                    name = "age"
                    placeholder="Age"
                    onChange={handleChange}
                    />
                     </div>
          <div className="mb-3">
                    <label>DOB</label>
                    <input
                    required
                    type="text"
                    className="form-group row"
                    name = "dob"
                    placeholder="DD-MM-YYYY"
                    onChange={handleChange}
                    />     </div>
         <div className="mb-3">
                    <label>Mobile No.</label>
                    <input
                    required
                    type="text"
                    className="form-group row"
                    name = "mobile"
                    placeholder="Enter 10 digits"
                    onChange={handleChange}
                    />     </div>

          <br /><br />
                <input type="submit"className="btn btn-primary" onClick={hsubmit} />
                {err && <p>{err}</p>}
            </form>
            </center>
        </div>
    );
};

export default EditHome;
