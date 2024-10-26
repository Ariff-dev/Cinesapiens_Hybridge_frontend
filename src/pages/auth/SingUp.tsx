import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function SingUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const navigate = useNavigate() // Inicializar useNavigate para redirigir

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          user_password: password,
        }),
      })

      if (response.status === 201) {
        // Mostrar mensaje de éxito si el código de estado es 201
        setSuccess(true)
        setUsername('')
        setEmail('')
        setPassword('')

        // Redirigir a la página de login después de un breve retraso
        setTimeout(() => {
          navigate('/login') // Redirige a /login
        }, 1500) // 1.5 segundos de espera para que el usuario vea el mensaje
      } else {
        throw new Error('Error en el registro')
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
        <h1 className='font-bold text-xl text-white'>Registro</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-3/4'>
        <input
          type='text'
          name='username'
          id='username'
          className='rounded-lg p-1 placeholder:text-sm placeholder:text-center'
          placeholder='Nombre de usuario'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type='email'
          name='user_email'
          id='email'
          className='rounded-lg p-1 placeholder:text-sm placeholder:text-center'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          name='user_pass'
          id='password'
          className='rounded-lg p-1 placeholder:text-sm placeholder:text-center'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className='text-red-500'>{error}</p>}{' '}
        {/* Muestra el error si hay */}
        {success && (
          <p className='text-green-500'>
            Cuenta creada con éxito! Redirigiendo...
          </p>
        )}{' '}
        {/* Muestra el mensaje de éxito y luego redirige */}
        <button
          type='submit'
          className='bg-secondary-color-component p-1 rounded-lg font-bold'
        >
          {loading ? (
            'Cargando...'
          ) : (
            <span className='text-white'>Crear Cuenta</span>
          )}
        </button>
      </form>
      <p className='mt-4 text-gray-600'>
        ¿Ya tienes cuenta?{' '}
        <Link to='/login' className='text-blue-500 underline'>
          Iniciar sesión
        </Link>
      </p>
    </section>
  )
}
