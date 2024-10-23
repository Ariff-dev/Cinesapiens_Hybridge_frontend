import { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthContext'

const SapiensProtectedRoute = ({ children }) => {
  const { isAuthenticated, userRole } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar si el rol está disponible antes de determinar si es admin
    if (userRole) {
      setLoading(false) // El rol ya está cargado
    }
  }, [userRole])

  if (loading) {
    return <div>Cargando...</div> // Puedes agregar un spinner u otro mensaje de carga
  }

  // Verifica si el usuario tiene el rol de sapiens
  if (!isAuthenticated || userRole !== 'sapiens') {
    return <Navigate to='/' /> // Redirige al login si no es admin o no está autenticado
  }

  return children // Renderiza el contenido protegido si es admin
}

export default SapiensProtectedRoute
