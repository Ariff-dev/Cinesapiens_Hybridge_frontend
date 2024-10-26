import { useState } from 'react'

export default function Apply() {
  const [message, setMessage] = useState('')

  const handleApply = async () => {
    try {
      const token = localStorage.getItem('token')

      const response = await fetch('http://127.0.0.1:5000/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user_id: 1 }),
      })

      if (!response.ok) {
        // Manejar los errores del servidor
        const errorData = await response.json()
        throw new Error(errorData.message || 'Error al aplicar')
      }

      const data = await response.json()
      setMessage(data.message)
    } catch (err) {
      setMessage(err.message || 'Necesitas una cuenta')
    }
  }

  return (
    <div>
      <section className='bg-primary-text-color p-4 flex flex-col items-center gap-4 rounded-lg'>
        <p className='font-bold text-black text-center'>
          ¿Te gustaría ser un creador y compartir tu conocimiento evolutivo?
        </p>
        <button
          onClick={handleApply}
          className='bg-primary-color py-2 px-4 rounded-lg'
        >
          <span>Aplicar</span>
        </button>
        {message && (
          <p className='bg-secondary-color-component text-white-500 p-2 text-xs rounded-lg'>
            {message}
          </p>
        )}
      </section>
    </div>
  )
}
