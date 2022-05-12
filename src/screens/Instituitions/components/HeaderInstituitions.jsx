import React from 'react';
import PeploStudying from '../../../assets/images/piople-studying.png'
import DefaultButton from '../../../components/DefaultButton';

const HeaderInstituitions = () => {
  return (
    <div className='px-6'>
      <div className='flex h-screen m-auto w-11/12 md:justify-center items-center'>

        <div>
          <div className='px-1'>
            <h1 className='text-5xl text-bold text-cente text-center'>Uma doação tranforma <br />várias vidas</h1>
          </div>
          <img className='m-auto w-8/12' src={PeploStudying} alt="" srcset="" />
          <div className='flex justify-center mt-5'>
            <DefaultButton value="ONGs parceiras" to="/" />
          </div>
        </div>

      </div>
    </div>
  )
}
export default HeaderInstituitions