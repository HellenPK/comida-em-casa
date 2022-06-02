import React from 'react';
import Navbar from '../../components/Navbar';
import HeaderInstituitions from './components/HeaderInstituitions'
import Instituitions from './components/Instituitions'

const Institutions = () => {
  return (
    <>
      <Navbar to="/"/>
      <HeaderInstituitions/>
      <Instituitions/>
    </>
  )
}
export default Institutions