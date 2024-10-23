import { useState } from 'react'

const AdminDashboard = () => {
  const [sol, setSol] = useState(true)
  const [act, setAct] = useState(false)

  const handleSection = () => {
    setSol(!sol)
    setAct(!act)
  }

  if (act == true) {
    console.log('Funcion act')
  }

  if (sol == true) {
    console.log('Funcion sol')
  }

  return (
    <div className='mx-4 mt-8 flex flex-col gap-6'>
      <div className='flex gap-4'>
        <button
          onClick={handleSection}
          className='bg-primary-text-color text-black font-bold py-2 px-4 rounded-lg'
        >
          <samp>Solicitudes</samp>
        </button>
        <button
          onClick={handleSection}
          className='bg-primary-text-color text-black font-bold py-2 px-4 rounded-lg'
        >
          <span>Activos</span>
        </button>
      </div>
      <div>
        {sol ? <div> Textos sol</div> : ''}
        {act ? <div> Textos act</div> : ''}
      </div>
    </div>
  )
}

export default AdminDashboard
