import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HomePage } from './pages/app/HomePage.tsx'
import { Navbar } from './components/ui/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='bg-primary-color min-h-screen text-white'>
      <Navbar />
      <HomePage />
    </main>
  </StrictMode>
)
