import React from 'react';
import DefaultButton from '../../../components/DefaultButton';

const HeaderHome = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-2">

        <div className="flex justify-start items-center h-screen px-6">
          <div className="grid gap-12 mx-auto md:w-3/4">
            <h1 className="text-5xl serif">Sua doação <br /> transforma vida</h1>
            <p className="text-xl text-slate-700">faça a diferença na na vida dessas pessoas com apenas um clique</p>
            <DefaultButton value="Fazer diferença" to='/instituicoes' />
          </div>
        </div>
        <div className="hidden md:block h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        </div>

      </div>
    </>
  )
}
export default HeaderHome