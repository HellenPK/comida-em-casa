import React, { Children } from 'react';
import Home from '../../assets/icons/home.png'

const Container = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
const Navbar = () => {
  return (
    <>
      <Container className="w-full fixed px-6 py-5 bg-slate-50 shadow-lg">
        <div className='m-auto w-11/12'>
          <div className='flex justify-between'>
            <div className='flex'>
              <div>
                <img className='w-10/12' src={Home} alt="" srcset="" />
              </div>
              <span className='font-dm text-lg ml-3'>Comida em casa</span>
            </div>
            <div>
              Menu
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
export default Navbar