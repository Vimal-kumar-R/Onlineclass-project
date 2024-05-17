import logo from './logo.svg';
import './App.css';
import './components/Home.css';
import Hello from './components/Hello';
//import GetData from './components/GetData';
import Signup from './components/UserCrud';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import './components/Style.css';
import './components/Hello.css';
import './components/Fullstack.css';
import Fullstack from './components/Fullstack.js';
import Registration from './components/Registration';
import './components/Cyber.css'
import Cyber from './components/Cyber.js'
import Program from './components/Program'
import './components/Program.css'
import './components/Reg.css'
import './components/Login.css'
import Davops from './components/Davops.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/hello' element={<Hello/>}/>
     <Route path='/fullstack' element={<Fullstack/>}/>
     <Route path='/registration' element={<Registration/>}/>
     <Route path='/cyber' element={<Cyber/>}/>
     <Route path='/program' element={<Program/>}/>
     <Route path='/davpos' element={<Davops/>}/>
     
     </Routes>
    </div>
  );
}

export default App;
