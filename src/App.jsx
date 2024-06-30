
import './App.css'
import Header from './components/navbar/Header'
import Groups from './components/groups/Groups'
import Home from './components/home/Home'
import AddNewExpense from './components/AddNewExpense'
import { CgAdd } from "react-icons/cg";
import UserContextProvider from './components/context/UserContextProvider'
import TransactionList from './components/TransactionList'

function App() {


  return (
    <>
    <div id="main-container" className='w-full min-w-xs'>
    <div id="header" className=' shadow-lg fixed w-full'>
      <UserContextProvider>
      <Header/>
      </UserContextProvider>
      </div>
   <div id="groups" className='pt-20'>
   <div
        id="content"
        className="min-w-xs max-w-full p-5"
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
   </>
  )
}

export default App
