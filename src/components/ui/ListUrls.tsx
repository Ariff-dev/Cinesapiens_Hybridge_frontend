import { Link, useLocation } from 'react-router-dom'
import { Dispatch, SetStateAction } from 'react'
interface ListUrls {
  menu: boolean
  setMenu?: Dispatch<SetStateAction<boolean>>
}

const urls = [
  {
    title: 'Inicio',
    path: '/',
  },
  {
    title: 'Cátalogo',
    path: '/catalog',
  },
]

export const ListUrls = ({ menu }: ListUrls) => {
  const pathName = useLocation().pathname

  return (
    <div className='w-full'>
      <div className='hidden lg:flex w-full justify-between '>
        <ul className='flex items-center justify-center gap-4'>
          {urls.map(({ title, path }) => (
            <li key={title} className={` ${pathName == path ? 'active' : ''}`}>
              <Link to={path}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex justify-center  w-56'>
          <button className='link-login'>
            <Link to={'/login'}>Iniciar Sesión</Link>
          </button>
        </div>
      </div>
      <div
        className={`${
          !menu
            ? 'hidden'
            : 'w-3/4 fixed h-screen  right-0 float-end border-t-2 border-l-2 border-gray-500/20 rounded-md bg-primary-color lg:hidden'
        }`}
      >
        <ul className='flex flex-col '>
          {urls.map(({ title, path }) => (
            <li
              key={title}
              className={`link-items ${pathName == path ? 'active' : ''}`}
            >
              <Link to={path}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex justify-center mt-4'>
          <button className='link-login'>
            <Link to={'/login'}>Iniciar Sesión</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
