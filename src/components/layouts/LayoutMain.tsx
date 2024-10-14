// Layout.tsx
import { Outlet } from 'react-router-dom'
import { Navbar } from '../ui/Navbar'

const LayoutMain = () => {
  return (
    <div className='bg-primary-color min-h-screen text-white'>
      <Navbar />
      <Outlet /> {/* Esto renderiza los componentes de las rutas hijas */}
    </div>
  )
}

export default LayoutMain
