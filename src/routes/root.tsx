import { createBrowserRouter } from 'react-router-dom'
import LayoutMain from '../components/layouts/LayoutMain'
import { HomePage } from '../pages/app/HomePage'

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
      },
    ],
  },
])
