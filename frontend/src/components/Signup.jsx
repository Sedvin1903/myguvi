import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import  './style.css';


const Signup = () => {
   
    const [inputs, setInputs] = useState({
      name: "",
      email: "",
      password: "",
      cpass: "",
    });
    const [err, setError] = useState(null);
    const history = useNavigate();

    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const hsubmit = async (e) => {
        e.preventDefault();

        try{

            await axios.post("https://myguvi-backend.onrender.com/api/user/signup",inputs);
                   alert('User Successfully Registered')
                    history('/login');
        }
        catch(err){
            console.log(err);
            setError(err.response.data);

        }

    };


    return (
        <div className="login">

            <center>
            <br /><br />
            <h1>Signup</h1>
            <br /><br />
            <form >

            <div className="mb-3">
            <label>Name</label>
            <input
            required
              type="text"
              className="form-group row"
              placeholder="First name"
              name = "name"
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
            /></div>
          <div className="mb-3">
                    <label>Password</label>
                    <input
                    required
                    type="password"
                    className="form-group row"
                    name = "password"
                    placeholder="Password"
                    onChange={handleChange}
                    />
                     </div>
          <div className="mb-3">
                    <label>Confirm Password</label>
                    <input
                    required
                    type="password"
                    className="form-group row"
                    name = "cpass"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    />     </div>

          <br /><br />
                <input type="submit"class="btn btn-primary" onClick={hsubmit} />
                {err && <p>{err}</p>}
            </form>
            </center>
            

        </div>
    );
};

export default Signup;
