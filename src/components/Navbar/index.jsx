import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../../assets/icons/home.png'

const Container = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const List = () => {
  return(
    <ul className='flex gap-6'>
      <li className='font-md cursor-pointer'>História</li>
      <li className='font-md cursor-pointer'>Doas</li>
      <li className='font-md cursor-pointer'>Contato</li>
    </ul>
  )
}

const Navbar = ({to}) => {
  const navigate = useNavigate()

  return (
    <>
      <Container className="w-full fixed px-6 py-3 md:py-5 bg-slate-50 shadow-lg">
        <div className='m-auto w-11/12'>
          <div className='flex justify-between'>
            <div className='flex cursor-pointer' onClick={() => to && navigate(to)}>
              <div>
                <img className='w-10/12' src={Home} alt="" srcset="" />
              </div>
              <span className='font-dm text-lg ml-3 indigo-700 text-indigo-500'>Comida em casa</span>
            </div>
            <div className='hidden md:block'>
              <List/>
            </div>
            <div className='md:hidden'>Botão</div>
          </div>
        </div>
      </Container>
    </>
  )
}
export default Navbar