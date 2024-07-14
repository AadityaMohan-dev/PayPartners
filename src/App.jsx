import "./App.css";
import Header from "./components/navbar/Header";
import Home from "./components/home/Home";
import AddNewExpense from "./components/AddNewExpense";
import { ToastContainer } from 'react-toastify';
import { CgAdd } from "react-icons/cg";
import UserContextProvider, { UserContext } from "./components/context/UserContextProvider";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

function App() { 
  const { isExpenseWindowOpen, setIsExpenseWindowOpen, user } = useContext(UserContext);
  return (
    <div id="main-container" className="w-full min-w-xs">
      <div id="header" className="shadow-lg fixed w-full">
        <Header />
      </div>

      <div id="groups" className="py-20">
        <div id="content" className="min-w-xs max-w-full px-5 fixed w-full">
          <div
            id="greeting"
            className="flex flex-col sm:flex-row justify-between shadow-lg rounded-lg p-5 bg-gradient-to-r from-gray-900 to-gray-600"
          >
            <h1 className="text-2xl capitalize text-white mb-4 sm:mb-0 sm:text-3xl">
              <span>👋 </span>
              <span className="text-blue-500">Hi</span> Welcome  {user ? user.name : "Guest"} !!
            </h1>

            <button
              className="text-white flex gap-2 sm:gap-10 capitalize justify-between md:justify-normal font-semibold text-lg hover:text-blue-400"
              onClick={() => {
                setIsExpenseWindowOpen(true);
              }}
            >
              <span className="sm:inline-block">Add New expense</span>
              <CgAdd className="text-4xl sm:text-3xl" />
            </button>
          </div>

          {isExpenseWindowOpen && (
            <div
              id="expense-window"
              className="backdrop-blur-sm flex justify-center absolute inset-0"
            >
              <AddNewExpense />
            </div>
          )}
        </div>
      </div>

      <div id="outlet">
       <Outlet/>
      </div>
      
      <ToastContainer />
    </div>
  );
}

function AppWrapper() {
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
}

export default AppWrapper;
