import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

function Home() {
  return (
    <>
      <HeroSection/>
      <Sidebar/>
      <Footer />
    </>
  );
}

export default Home;
