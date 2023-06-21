import React, { useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import  './style.css';
import { AuthContext } from "../auth/Authcontext";

const Login = () => {

    const history=useNavigate();
    const {login} = useContext(AuthContext);

    const [input, setInputs] = useState({
      email: "",
      password: "",
    });
    const [isInputValid, setInputValid] = useState(false);
    const [err, setError] = useState(null);
   
/*

const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };
  
  const validatePassword = () => {
    if (password.length < 4) {
      setPasswordError('Password must be at least 4 characters long');
    } else {
      setPasswordError('');
    }
  }; */
  const handleChange = (e) => {
  setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  
  const { email, password } = input;
  setInputValid(email.trim().length > 0 && password.trim().length > 0);
  };

  const hsubmit = async (e) => {
        e.preventDefault();

        try{
              
              await login(input);
              alert('Logged In !!');
              history('/home');
              
          }
      catch(err)
      {
                alert("wrong details")
                console.log(err);
                setError(err.response.data);
            }

        };

  
    return (
        <div className="login">
            <center>
            <br />
            <br />
            <h1>Login</h1>
            <br /><br />
            <form >
            <div className="mb-3">
            <label>Email</label>
            <input required
              type="email"
              className="form-group row"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            /> </div>
          <div className="mb-3">
                    <label>Password</label>
                    <input required
                    type="password"
                    className="form-group row"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    />
            </div>
          <br />
          <input type="submit"className="btn btn-primary"  style={{marginLeft: '0%'}} onClick={hsubmit} disabled={!isInputValid} />
          {err && <p>{err}</p>}
            </form>
            <br />
            <p>-----OR-----</p>
            <br />
            <Link to="/signup">New User? Create Account</Link>
</center>
        </div>

    )
};

export default Login;