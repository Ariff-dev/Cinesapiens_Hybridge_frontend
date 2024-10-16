import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import './navbar.css'
import { useState } from 'react'
import { ListUrls } from './ListUrls'

export const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <nav className=''>
      <div className='flex items-center justify-between'>
        <div className='mx-2'>
          <h1 className='text-lg font-bold'>
            Cine<span className='text-primary-text-color'>Sapines</span>
          </h1>
        </div>
        <div className='mx-2 text-primary-text-color lg:hidden'>
          {!menu ? (
            <button className='my-2' onClick={() => setMenu(!menu)}>
              <AiOutlineMenu size={16} />
            </button>
          ) : (
            <button className='my-2 ' onClick={() => setMenu(!menu)}>
              <AiOutlineClose size={16} />
            </button>
          )}
        </div>
      </div>
      {!menu ? <></> : <ListUrls />}
    </nav>
  )
}
