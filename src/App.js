import './App.css';
import Navbar from './Components/Navcomp';
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Profile from './Components/Profile';
function App() {
  return (
    <div className="bg-black h-screen w-screen  text-slate-200">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;