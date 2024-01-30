import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import Error from './pages/Error'
import User from './pages/User'
import axios from 'axios'
import Users from './pages/Users'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: '/', element: <App /> },
      {
        path: '/users',
        children: [
          { index: true, element: <Users /> },
          {
            path: ':id',
            element: <User />,
            loader: async ({ params }) => {
              const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users/' + params.id
              )
              return response.data
            },
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
