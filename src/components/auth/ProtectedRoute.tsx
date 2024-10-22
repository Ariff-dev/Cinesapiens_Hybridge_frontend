import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthContext'

// Componente que protege una ruta
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return <Navigate to='/login' /> // Si no está autenticado, redirigir a login
  }

  return children // Si está autenticado, mostrar el componente protegido
}

export default ProtectedRoute
