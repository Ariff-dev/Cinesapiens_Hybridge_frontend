import { useState } from 'react'

const AdminDashboard = () => {
  const [applications, setApplications] = useState([])
  const [activeUsers, setActiveUsers] = useState([]) // Para manejar usuarios activos
  const [error, setError] = useState(null)

  const [sol, setSol] = useState(false)
  const [act, setAct] = useState(false)

  const handleSol = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(
        'http://127.0.0.1:5000/sapiens-applications',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText)
      }

      const data = await response.json()
      setApplications(data)
      setSol(true)
      setAct(false)
    } catch (err) {
      setError(err.message)
      console.error(err)
    }
  }

  const handleActiveUsers = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('http://127.0.0.1:5000/active-users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText)
      }

      const data = await response.json()
      setActiveUsers(data) // Actualiza el estado con los usuarios activos
      setAct(true)
      setSol(false)
    } catch (err) {
      setError(err.message)
      console.error(err)
    }
  }

  const handleDeny = async (userId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(
        `http://127.0.0.1:5000/deny-application/${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error('Failed to deny application: ' + response.statusText)
      }

      setApplications(applications.filter((app) => app.id !== userId))
    } catch (err) {
      setError(err.message)
    }
  }

  const handlePromote = async (userId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(
        `http://127.0.0.1:5000/promote-application/${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error('Failed to promote application: ' + response.statusText)
      }

      setApplications(applications.filter((app) => app.id !== userId))
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDescend = async (userId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(
        `http://127.0.0.1:5000/descend-application/${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error('Failed to descend application: ' + response.statusText)
      }

      // Actualiza la lista de usuarios activos
      setActiveUsers(activeUsers.filter((user) => user.id !== userId))
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className='mx-4 mt-8 flex flex-col gap-6'>
      <div className='flex gap-4'>
        <button
          onClick={handleSol}
          className='bg-primary-text-color text-black font-bold py-2 px-4 rounded-lg'
        >
          <samp>Solicitudes</samp>
        </button>
        <button
          onClick={handleActiveUsers}
          className='bg-primary-text-color text-black font-bold py-2 px-4 rounded-lg'
        >
          <span>Activos</span>
        </button>
      </div>
      {error && <p className='text-red-500'>{error}</p>}{' '}
      {/* Muestra error si hay */}
      {sol && (
        <div>
          <h3 className='font-bold'>Solicitudes:</h3>
          <ul>
            {applications.map((app) => (
              <div key={app.id} className='flex w-full justify-between'>
                <div className='flex border-2 items-center justify-centers'>
                  <p className='border-r-2 p-2 text-center'>{app.username}</p>
                  <p className='border-r-2 p-2 text-center'>{app.email}</p>
                </div>
                <div className='flex gap-4'>
                  <button
                    className='p-2 bg-red-500'
                    onClick={() => handleDeny(app.id)}
                  >
                    Denegar
                  </button>
                  <button
                    className='p-2 bg-green-500'
                    onClick={() => handlePromote(app.id)}
                  >
                    Ascender
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
      {act && (
        <div>
          <h3 className='font-bold'>Usuarios Activos:</h3>
          <ul>
            {activeUsers.map((user) => (
              <div key={user.id} className='flex w-full justify-between'>
                <div className='flex border-2 items-center justify-centers'>
                  <p className='border-r-2 p-2 text-center'>{user.username}</p>
                  <p className='border-r-2 p-2 text-center'>{user.email}</p>
                </div>
                <div className='flex gap-4'>
                  <button
                    className='p-2 bg-red-500'
                    onClick={() => handleDescend(user.id)}
                  >
                    Descender
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
