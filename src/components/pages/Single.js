import React from 'react';
import '../../App.css';

import Sidebar from '../Sidebar';

import Footer from '../Footer';
import SingleHotel from '../SingleHotel';

export default function Hotels() {
  return (
    <>
      
      <SingleHotel/>
      <Sidebar/>
      <Footer />
    </>
  );
}
