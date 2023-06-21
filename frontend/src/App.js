import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Landing from "./components/Landing"
import NotFound from "./components/NotFound"
import UserProfile from "./components/Profile"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditHome from "./components/EditHome"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/user" element={<UserProfile/>}/>
          <Route path="/edithome" element={<EditHome/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
