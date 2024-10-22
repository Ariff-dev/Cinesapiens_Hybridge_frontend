import { createContext, useState, useEffect } from 'react'

// Crear un contexto para la autenticación
export const AuthContext = createContext()

// Componente proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Cargar el estado de autenticación al montar el componente
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true) // Si hay un token, marcar como autenticado
    }
  }, [])

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token') // Eliminar el token
    setIsAuthenticated(false) // Cambiar el estado de autenticación
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
