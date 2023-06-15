import React from 'react';
import './AdminPanel.css';
import { Link } from 'react-router-dom';



function AdminPanel() {
    return (
        <div className='box'>
          <div class="card">
          <i class="fa-solid fa-hotel"></i>
          <h1>
          <Link to='/EditHotel'>HOTELS</Link>
          </h1>
          </div>

          <div class="card">
          <i class="fa-solid fa-location"></i>
          <h1>
          <Link to='/AdminDes'>DESTINATIONS</Link>
          </h1>
          </div>

          <div class="card">
          <i class="fa-solid fa-utensils"></i>
          <h1>
          <Link to='/AdminRes'>RESTOURANTS</Link>
          </h1>
          </div>  
          
          </div>

    );
}



export default AdminPanel;