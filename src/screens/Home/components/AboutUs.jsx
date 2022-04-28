import React from 'react';
import Woman from "../../../assets/images/mulher-abracando-planeta.png"
import DefaultButton from '../../../components/DefaultButton';

const AboutUs = () => {
  return (
    <div className='md:grid md:grid-cols-2'>
      <div className="flex justify-center md:justify-end items-center md:h-screen px-6">
        <img className='w-10/12' src={Woman} alt="" srcset="" />
      </div>
      <div className="flex justify-start items-center h-screen px-6">
        <div className='grid gap-8 mx-auto md:w-3/4'>

          <div>
              <h2 className='text-4xl serif text-indigo-500'>Quem somos ?</h2>
              <div className='w-3/12 my-5 border-b-4 border-indigo-500'></div>
          </div>
          <p className='text-xl text-slate-500'>Lorem ipsum dolor sit amet. Sed ducimus repellat non numquam laborum ea repellendus dolor aut recusandae a necessitatibus quisquam </p>
          <p className='text-xl text-slate-500'>Lorem ipsum dolor sit amet. Sed ducimus repellat non numquam laborum ea repellendus dolor aut recusandae a necessitatibus quisquam </p>
          <DefaultButton value="Visualizar ONGs"/>
        </div>
      </div>
    </div>
  )
}
export default AboutUs