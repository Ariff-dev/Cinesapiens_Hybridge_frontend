import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// Crear un contexto para la autenticación
export const AuthContext = createContext()

// Componente proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState(null) // Cambiar a null
  const [userRole, setUserRole] = useState('')

  // Cargar el estado de autenticación al montar el componente
  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      try {
        const decoded = jwtDecode(storedToken)
        setToken(decoded) // Guarda el token decodificado en el estado
        setUserRole(decoded.sub.role) // Establece el rol decodificado
        setIsAuthenticated(true)
      } catch (error) {
        console.error('Error decodificando el token:', error)
        setIsAuthenticated(false)
      }
    }
  }, [])

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token') // Eliminar el token
    setIsAuthenticated(false) // Cambiar el estado de autenticación
    setToken(null)
    setUserRole('')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        logout,
        token,
        setToken,
        userRole,
        setUserRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
