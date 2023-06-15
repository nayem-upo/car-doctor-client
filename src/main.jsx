import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AuthProvider from './Components/AuthProvider';
import Checkout from './Components/Checkout';
import Bookings from './Components/Bookings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <Bookings></Bookings>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
