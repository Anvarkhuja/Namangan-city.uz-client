import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Destinations from './components/pages/Destinations';
import Hotels from './components/pages/Hotels';
import Aboutcity from './components/pages/Aboutcity';
import AdminHot from './components/pages/AdminHot';
import Restourants from './components/pages/Restourants';
import AdminDes from './components/pages/AdminDes';
import AdminRes from './components/pages/AdminRes';
import Admin from './components/pages/Admin';
import Single from './components/pages/Single';
import EditHotel from './components/edits/EditHotel';
import UpHotel from './components/edits/UpHotel';
import User from './components/pages/User';
import Login from './components/admin/Login';
import Signup from './components/admin/Signup';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' exact element={<Home/>} />
          <Route path='/destinations' element={<Destinations/>} />
          <Route path='/hotels' element={<Hotels/>} />
          <Route path='/restourants' element={<Restourants/>} />
          <Route path='/aboutcity' element={<Aboutcity/>} />
          <Route path='/adminHot' element={<AdminHot/>} />
          <Route path='/adminDes' element={<AdminDes/>} />
          <Route path='/adminRes' element={<AdminRes/>} />
          <Route path='/editHotel' element={<EditHotel/>} />
          <Route path='/upHotel/:id' element={<UpHotel/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/user' element={<User/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/single' element={<Single/>} />
          <Route path='/hotels/:id' element={<Single/>} />
         
    </Routes>
    </Router>
    </>
  );
}

export default App;
