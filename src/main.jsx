import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Loging from './components/Loging/Loging';
import Register from './components/Register/Register';
import RegisterTw from './components/TailwindF/RegisterTw';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:  <Home></Home>
      },
      {
        path:'loging',
        element:<Loging></Loging>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'registertw',
        element:<RegisterTw></RegisterTw>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
