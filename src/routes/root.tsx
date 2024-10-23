import { createBrowserRouter } from 'react-router-dom'
import LayoutMain from '../components/layouts/LayoutMain'
import { HomePage } from '../pages/app/HomePage'
import { Login } from '../pages/auth/Login'
import SingUp from '../pages/auth/SingUp'
import { Catalog } from '../pages/app/Catalog'
import AdminDashboard from '../pages/app/admin/AdminDashboard'
import AdminProtectedRoute from '../components/auth/AdminProtectedRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
      {
        path: '/admin-dashboard',
        element: (
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        ),
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
