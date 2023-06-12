import React, { useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import  './style.css';
import { AuthContext } from "../auth/Authcontext";

function Login() {

    const history=useNavigate();
    const {login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isInputValid, setIsInputValid] = useState(false);
    const [err, setError] = useState(null);

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setIsInputValid(event.target.value.trim().length > 0 && password.trim().length > 0);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      setIsInputValid(email.trim().length > 0 && event.target.value.trim().length > 0);
    };
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
    async function submit(e){
        e.preventDefault();

        try{
              
              await login({email,password})
              history('/home')
              
          }
      catch(err)
      {
                alert("wrong details")
                console.log(err);
                setError(err.response.data);
            }

        }

  
    return (
        <div className="login">
            <center>
            <br />
            <br />
            <h1>Login</h1>
            <br /><br />
            <form action="POST" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
            <label>Email</label>
            <input required
              type="email"
              className="form-group row"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            /> </div>
          <div className="mb-3">
                    <label>Password</label>
                    <input required
                    type="password"
                    className="form-group row"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    />
            </div>
          <br />
          <input type="submit"class="btn btn-primary" onClick={submit} disabled={!isInputValid} />
          {err && <p>{err}</p>}
            </form>
            <br />
            <p>-----OR-----</p>
            <br />
<script>  
</script>
            <Link to="/signup">New User? Create Accout</Link>
</center>
        </div>

    )
}

export default Login