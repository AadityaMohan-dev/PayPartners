import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Groups from './components/groups_list/Groups.jsx';



const routes = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {path:'', element : <Home/>},
      {path:'/groups', element :<Groups/>},
    ]
  }
]) ;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
