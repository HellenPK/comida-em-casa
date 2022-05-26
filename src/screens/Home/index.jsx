import React from 'react';
import AboutUs from './components/AboutUs';
import HeaderHome from "./components/HeaderHome"
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderHome/>
      <AboutUs/>
    </div>
  )
}
export default Home