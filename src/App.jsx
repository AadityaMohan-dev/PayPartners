import "./App.css";
import Header from "./components/navbar/Header";
import { ToastContainer } from 'react-toastify';
import UserContextProvider from "./components/context/UserContextProvider";
import { Outlet } from "react-router-dom";

function App() { 
  
  return (
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
}

function AppWrapper() {
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
}

export default AppWrapper;
