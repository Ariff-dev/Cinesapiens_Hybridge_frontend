import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className=''>
      <div className='flex items-center justify-between'>
        <div className='mx-2'>
          <h1 className='text-lg font-bold'>
            Cine<span className='text-primary-text-color'>Sapines</span>
          </h1>
        </div>
        <div className='mx-2 text-primary-text-color'>
          <button className='my-2'>
            <AiOutlineMenu size={16} />
          </button>
          <button className='my-2 hidden'>
            <AiOutlineClose size={16} />
          </button>
        </div>
      </div>
      <div className='min-h-screen w-3/4 right-0 float-end border-t-2  border-primary-text-color bg-primary-color'>
        <ul className=''>
          <li className='link-items'>
            <Link to={'/catalog'}>
              <p>Catálogo</p>
            </Link>
          </li>
          <li className='link-items'>
            <Link to={'/login'}>
              <p>Panel</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
