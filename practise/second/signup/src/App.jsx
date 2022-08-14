import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Signup from './components/Signup';
import Navbar from "./components/Navbar";
import Login from "./components/Login"; 
import Showdata from "./components/Showdata";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/showdata" element={<Showdata />}/>
       </Routes>
    </div>
  )
}

export default App
