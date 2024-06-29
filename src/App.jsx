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
import AddNewExpense from './components/AddNewExpense'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="main-container" className='w-full min-w-xs'>
    <div id="header" className=' shadow-lg sticky'><Header/></div>
   <div id="groups" className=''> <Groups/></div>
   <Home/>
    </div>
    <AddNewExpense/>
   </>
  )
}

export default App
