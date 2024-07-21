import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/screens/Home.jsx';
import Groups from './components/screens/groups_list/Groups.jsx';
import AboutPage from './components/screens/About.jsx';
import Contact from './components/screens/Contact.jsx';



const routes = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {path:'', element : <Home/>},
      {path:'/groups', element :<Groups/>},
      {path:'/about',element:<AboutPage/>},
      {path:'/contact',element:<Contact/>}
    ]
  }
]) ;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
