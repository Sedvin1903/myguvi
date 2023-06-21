import React ,{useContext}from "react";
import { useNavigate } from 'react-router-dom';
import  './style.css';
import { AuthContext } from "../auth/Authcontext";

const UserProfile = () => {
  const history = useNavigate()
  
  const { currentUser , currentUserb ,logout } = useContext(AuthContext);

  const userid = currentUserb?.data?._id || currentUser?.data?._id;
  const username = currentUserb?.data?.name ||currentUser?.data?.name;
  const usermail = currentUserb?.data?.email ||  currentUser?.data?.email;
  const userage = currentUserb?.data?.age ||   currentUser?.data?.age ;
  const usermob = currentUserb?.data?.mobile || currentUser?.data?.mobile;
  const userdob = currentUserb?.data?.dob || currentUser?.data?.dob;

  const getprojprogressBar = () => {
    let p1 =  Math.floor(Math.random() * (100 - 45) + 45) ; 
    let p2 =  Math.floor(Math.random() * (100 - 45) + 45) ; 
    let p3 =  Math.floor(Math.random() * (100 - 45) + 45) ; 
    let p4 =  Math.floor(Math.random() * (100 - 45) + 45) ; 
    let p5 =  Math.floor(Math.random() * (100 - 45) + 45) ; 
    const p = { p1,p2,p3,p4,p5}
    return p ; // Generates a random age between 1 and 80
  };

  const getdesignationPlace = () => {

    const d = ["Full Stack Developer","Frontend Developer","Backend Developer","UI/UX Designer", "Data Scientist-I" ,"AI Specialist","Blockchain Developer", "UX/UI Designer", "Data Scientist-II","Gurugram, Haryana","Cloud Solutions Architect"]; 
    const p =  ["Bay Area, San Francisco, CA","New York City, NY","London, United Kingdom",    "Toronto, Canada" ,"Sydney, Australia","Bengaluru, Karnataka", "Hyderabad, Telangana","Pune, Maharashtra","Chennai, Tamil Nadu"];
    const choice= [Math.floor(Math.random() * 10)];
  
    const desigploc = { designation: d[choice], location: p[choice] };
   
  
    return desigploc;
  };


  const getdobsep = () => {
    const date = userdob.split("-")
    return date;
};

  async function handleLogout() {
    await logout();
    alert('"User has been logged out !!')
     history('/');
   };

   async function handleEdit() {
     history('/editlink');
   };

 const project = getprojprogressBar();
 const designloc = getdesignationPlace(); 
 const DATE = getdobsep();

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="containerpy-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="/home">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                {/* <button  onClick={handleLogout} style={{marginLeft : '60%'}}  className="btn btn-primary">Edit Link</button> */}
                <button  onClick={handleEdit} style={{marginLeft : '80%'}}  className="btn btn-primary">Logout</button>
              </ol>
             
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} />
                <h5 className="my-3">{userid}</h5>
                <p className="text-muted mb-1">{designloc.designation}</p>
                <p className="text-muted mb-4">{designloc.location}</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">Follow</button>
                  <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0" style={{marginLeft:'40%'}}>https://www.{username.toLowerCase()}.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                    <p className="mb-0">{username.toLowerCase()}{DATE[1]}</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fa-brands fa-linkedin -lg" style={{ color: "#55acee" }}></i>
                    <p className="mb-0">{username.toLowerCase()}{DATE[0]}</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
                    <p className="mb-0">@{username}{DATE[2]}</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                    <p className="mb-0">{username}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{username}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{usermail}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">DOB</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userdob}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Age</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userage}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">+91 {usermob}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Project Status</span> </p>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Web Development <i className="p" >{project.p1}%</i></p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width:`${project.p1}%` }} aria-valuenow={project.p1} aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>AI & ML<i className="p" >{project.p2}%</i></p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width:`${project.p2}%` }} aria-valuenow={project.p2} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Data Science <i className="p" >{project.p3}%</i></p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width:`${project.p3}%` }} aria-valuenow={project.p3} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Cloud Computing<i className="p" >{project.p4}%</i></p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width:`${project.p4}%` }} aria-valuenow={project.p4} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>SDE<i className="p" >{project.p5}%</i></p>
                    <div className="progress rounded mb-2" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width:`${project.p5}%` }} aria-valuenow={project.p5} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                  <p className="mb-4"><span className="text-primary font-italic me-1">Skill Sets</span> </p>
                  <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}> HTML - CSS - JS <i className="sk">{project.p1}%</i></p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width:`${project.p3}%` }} aria-valuenow={project.p1} aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>PHP<i className="sk">{project.p2}%</i></p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width:`${project.p1}%` }} aria-valuenow={project.p2} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Python - C - Java <i className="sk">{project.p3}%</i></p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width:`${project.p5}%` }} aria-valuenow={project.p3} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Flutter<i className="sk">{project.p4}%</i></p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width:`${project.p2}%` }} aria-valuenow={project.p4} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>MERN<i className="sk">{project.p5}%</i></p>
                    <div className="progress rounded mb-2" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width:`${project.p4}%` }} aria-valuenow={project.p5} aria-valuemin="0" aria-valuemax="100"></div>                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>

  )
};

export default UserProfile;
