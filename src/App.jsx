<<<<<<< HEAD
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
<<<<<<< Updated upstream
=======
import AddNewExpense from './components/AddNewExpense'
import { CgAdd } from "react-icons/cg";
import UserContextProvider from './components/context/UserContextProvider'
import TransactionList from './components/TransactionList'
import Footer from './components/navbar/Footer'
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0)
=======
import "./App.css";
import Header from "./components/navbar/Header";
import { ToastContainer } from 'react-toastify';
import UserContextProvider from "./components/context/UserContextProvider";
import { Outlet } from "react-router-dom";
>>>>>>> e57fdc93ff630fb5a3e53185362d415f2c6ffb4c

function App() { 
  
  return (
<<<<<<< HEAD
    <>
<<<<<<< Updated upstream
    <div id="main-container" className=''>
    <div id="header" className='p-8 bg-teal-800 shadow-lg sticky'><Header/></div>
   <div id="groups" className=''> <Groups/></div>
   <Home/>
    </div>
=======
    <div id="main-container" className='w-full min-w-xs'>
    <div id="header" className=' shadow-lg fixed w-full'>
      <UserContextProvider>
      <Header/>
      </UserContextProvider>
      </div>
      
   <div id="groups" className='pt-20'>
   <div
        id="content"
        className="min-w-xs max-w-full pt-5 px-10"
      >
        <div
          id="greeting"
          className="flex flex-col sm:flex-row justify-between shadow-lg rounded-lg p-5 bg-gradient-to-r from-gray-900 to-gray-600"
        >
          <h1 className="text-2xl capitalize text-white mb-4 sm:mb-0 sm:text-3xl">
            <span>👋 </span><span className="text-blue-500">Hi</span>, Aaditya Mohan !!
          </h1>
          <button className="text-white flex gap-2 sm:gap-10 capitalize justify-between md:justify-normal font-semibold text-lg hover:text-blue-400">
            <span className="sm:inline-block ">Add New expense</span>
            <CgAdd className="text-4xl sm:text-3xl " />
          </button>
        </div>
      </div>
     <Groups/>
     </div>
   <Home/>
    </div>
    <AddNewExpense/>
    <TransactionList/>
    <div className="footer">
      <Footer/>
    </div>
>>>>>>> Stashed changes
   </>

  )
=======
    <div id="main-container" className="w-full min-w-xs">
      <div id="header" className="shadow-lg fixed w-full">
        <Header />
      </div>
      <div id="outlet" className="h-full overflow-auto">
       <Outlet/>
      </div>
      
      <ToastContainer />
    </div>
  );
>>>>>>> e57fdc93ff630fb5a3e53185362d415f2c6ffb4c
}

function AppWrapper() {
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
}

export default AppWrapper;
