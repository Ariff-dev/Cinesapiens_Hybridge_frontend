import { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthContext'

const AdminProtectedRoute = ({ children }) => {
  const { isAuthenticated, userRole } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar si el rol está disponible antes de determinar si es admin
    if (userRole) {
      setLoading(false) // El rol ya está cargado
    }
  }, [userRole])

  if (loading) {
    return <div>Cargando...</div>
  }

  // Verifica si el usuario tiene el rol de administrador
  if (!isAuthenticated || userRole !== 'admin') {
    return <Navigate to='/login' /> // Redirige al login si no es admin o no está autenticado
  }

  return children // Renderiza el contenido protegido si es admin
}

export default AdminProtectedRoute
