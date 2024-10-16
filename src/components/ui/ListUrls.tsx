import { Link, useLocation } from 'react-router-dom'

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

export const ListUrls = () => {
  const pathName = useLocation().pathname

  return (
    <div className='w-3/4 fixed h-screen  right-0 float-end border-t-2 border-l-2 border-gray-500/20 rounded-md bg-primary-color lg:hidden'>
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
  )
}
