import { createBrowserRouter } from 'react-router-dom'
import LayoutMain from '../components/layouts/LayoutMain'
import { HomePage } from '../pages/app/HomePage'
import { Login } from '../pages/auth/Login'
import SingUp from '../pages/auth/SingUp'
import { Catalog } from '../pages/app/Catalog'
import AdminDashboard from '../pages/app/admin/AdminDashboard'
import AdminProtectedRoute from '../components/auth/AdminProtectedRoute'
import SapiensProtectedRoute from '../components/auth/SapiensProtectedRoute'
import SapiensPost from '../pages/app/sapinens/SapiensPost'
import SapiensDashboard from '../pages/app/sapinens/SapiensDashboard'

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
      {
        path: '/sapiens-post',
        element: (
          <SapiensProtectedRoute>
            <SapiensPost />
          </SapiensProtectedRoute>
        ),
      },
      {
        path: '/sapiens-dashboard',
        element: (
          <SapiensProtectedRoute>
            <SapiensDashboard />
          </SapiensProtectedRoute>
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
