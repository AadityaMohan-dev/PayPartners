
import './App.css'
import Header from './components/navbar/Header'
import Groups from './components/groups/Groups'
import Home from './components/home/Home'
import AddNewExpense from './components/AddNewExpense'
import { CgAdd } from "react-icons/cg";
import UserContextProvider, { UserContext } from './components/context/UserContextProvider'
import TransactionList from './components/TransactionList'
import { useContext } from 'react'

function App() {

  const {isExpenseWindowOpen, setIsExpenseWindowOpen} = useContext(UserContext)
  console.log('expense window' ,isExpenseWindowOpen);
  return (
    <>
    <div id="main-container" className='w-full min-w-xs'>
    <div id="header" className=' shadow-lg fixed w-full'>
      <UserContextProvider>
      <Header/>
     </UserContextProvider>
      </div>
   <div id="groups" className='py-20 '>
   <div
        id="content"
        className="min-w-xs max-w-full px-5 fixed w-full"
        >
        <div
          id="greeting"
          className="flex flex-col sm:flex-row justify-between shadow-lg rounded-lg p-5 bg-gradient-to-r from-gray-900 to-gray-600"
          >
          <h1 className="text-2xl capitalize text-white mb-4 sm:mb-0 sm:text-3xl">
            <span>👋 </span><span className="text-blue-500">Hi</span>, Aaditya Mohan !!
          </h1>
          <button className="text-white flex gap-2 sm:gap-10 capitalize justify-between md:justify-normal font-semibold text-lg hover:text-blue-400"
          onClick={() => {setIsExpenseWindowOpen(true)}}>
            <span className="sm:inline-block ">Add New expense</span>
            <CgAdd className="text-4xl sm:text-3xl " />
          </button>
        </div>
        {isExpenseWindowOpen && (
      <div id="expense-window" className=' backdrop-blur-sm flex justify-center absolute  w-full' >
        <AddNewExpense/>
      </div>
    )}
      </div>
     </div>
     <div id="home" className=''>
     <Home/>
     </div>
     
    </div>
   </>
  )
}

export default App
