import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import Header from './components/navbar/Header'
import Groups from './components/groups/Groups'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="main-container" className=''>
    <div id="header" className='p-8 bg-teal-800 shadow-lg sticky'><Header/></div>
   <div id="groups" className=''> <Groups/></div>
   <Home/>
    </div>
   </>
  )
}

export default App
