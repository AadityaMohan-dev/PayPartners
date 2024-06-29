import { Fragment, useState, useEffect } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for user authentication
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  // Function to detect screen size
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Example breakpoint for mobile view
  };

  // Event listener for screen resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Initial check for mobile view on component mount
  useEffect(() => {
    handleResize();
  }, []);

  return (
    <Fragment>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        {/* Left side: Hamburger menu for mobile */}
        <div className="flex items-center">
          <div className="mr-4 md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
          {/* Logo */}
          <div className="text-xl font-bold">
            <span className="text-blue-500">Pay</span>Partners
          </div>
        </div>

        {/* Right side: Menu items */}
        {!isMobile && ( // Hide menu items on mobile view
          <div className="hidden md:flex items-center space-x-4">
            {/* Menu items */}
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
            <a href="#" className="hover:text-blue-500">
              Groups
            </a>
            <a href="#" className="hover:text-blue-500">
              About
            </a>
            <a href="#" className="hover:text-blue-500">
              Contact Us
            </a>
          </div>
        )}

        {/* Right side: Login/Signup */}
        {!isMobile && ( // Hide login/signup on mobile view
          <div className="hidden md:flex items-center space-x-4">
            {/* Conditional rendering based on authentication */}
            {isLoggedIn ? (
              // Show profile image when logged in
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gray-400"></div>
              </div>
            ) : (
              // Show Login and Signup buttons when logged out
              <Fragment>
                <button className="px-3 py-1 rounded-md bg-blue-500 font-semibold text-white hover:bg-blue-600">
                  Login
                </button>
                <button className="px-3 py-1 rounded-md bg-blue-500 font-semibold text-white hover:bg-blue-600">
                  Signup
                </button>
              </Fragment>
            )}
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      <Dialog
        className="bg-gray-900 text-white"
        open={open}
        handler={() => setOpen(!open)}
      >
        <DialogBody className="flex flex-col justify-center items-center space-y-4">
          {/* Menu items */}
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            Groups
          </a>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact Us
          </a>

          {/* Right side: Login/Signup for mobile */}
          {!isLoggedIn && (
            <div className="flex items-center space-x-4">
              <button className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                Login
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                Signup
              </button>
            </div>
          )}
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
