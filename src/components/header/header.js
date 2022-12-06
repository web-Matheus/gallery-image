import React from 'react'

const Header = () => {
  return (
    <header className='py-3 flex items-center justify-between'>
        <button className='text-white text-xl font-bold bg-black rounded-xl p-3'>
            Página inicial
        </button>
        <button className='text-black text-xl font-bold'>
            Criar 
        </button>
    </header>
  )
}

export default Header