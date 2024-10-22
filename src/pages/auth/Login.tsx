import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthContext'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { setIsAuthenticated } = useContext(AuthContext) // Importar el contexto
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          user_password: password,
        }),
      })

      const data = await response.json()

      if (response.status === 200) {
        localStorage.setItem('token', data.access_token)
        setIsAuthenticated(true) // Actualizar el estado global
        navigate('/')
      } else {
        throw new Error('Email o contraseña incorrectos')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='  w-full flex flex-col gap-8 justify-center items-center min-h-screen bg-primary-color '>
      <div>
        <h1 className='font-bold text-xl text-white'>Login</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-3/4'>
        <input
          type='email'
          name='user_email'
          id='email'
          className='rounded-lg p-1 placeholder:text-sm placeholder:text-center'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Actualizar el estado del email
          required
        />
        <input
          type='password'
          name='user_pass'
          id='password'
          className='rounded-lg p-1 placeholder:text-sm placeholder:text-center'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualizar el estado de la contraseña
          required
        />
        {error && <p className='text-red-500'>{error}</p>}{' '}
        {/* Muestra el error si existe */}
        <button
          type='submit'
          className='bg-secondary-color-component p-1 rounded-lg font-bold'
        >
          {loading ? (
            'Cargando...'
          ) : (
            <span className='text-white'>Iniciar Sesión</span>
          )}
        </button>
      </form>
    </section>
  )
}
