import './App.css';
import { Routes, Route } from "react-router-dom";
import {
  useState,
  // useEffect
} from 'react';

import Navigation from "./pages/Navigation"

import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
function App() {
  const [submitall, setsubmitall] = useState(false)
  const [success, setSuccess] = useState(false)
  const [userDetails, setuserDetails] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',

  })





  return (
    <>
      <Navigation />
      <Routes>

        <Route index element={<Signup
          setuserDetails={setuserDetails}
          userDetails={userDetails}
          setsubmitall={setsubmitall}
          submitall={submitall}
          setSuccess={setSuccess}
          success={success}
        />} />
        <Route path="/profile" element={<Profile
          setSuccess={setSuccess}
          success={success}
        />} />



      </Routes>
    </>

  );
}

export default App;