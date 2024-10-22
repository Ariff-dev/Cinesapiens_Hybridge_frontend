import { createBrowserRouter } from 'react-router-dom'
import LayoutMain from '../components/layouts/LayoutMain'
import { HomePage } from '../pages/app/HomePage'
import { Login } from '../pages/auth/Login'
import SingUp from '../pages/auth/SingUp'
// import ProtectedRoute from '../components/auth/ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/singup',
    element: <SingUp />,
  },
])
