import React, { Fragment, useState, useEffect, useCallback, useContext, useMemo } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import { UserContext } from "../context/UserContextProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const { isAuthClose, setIsAuthClose } = useContext(UserContext);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setShowLogin(false);
    setShowSignUp(false);
  }, [isAuthClose]);

  const handleCloseForms = useCallback(() => {
    setShowLogin(false);
    setShowSignUp(false);
  }, []);

  const handelLogin = useCallback(() => {
    setShowLogin(true);
    setShowSignUp(false);
    setIsAuthClose(false);
  }, [setShowLogin, setShowSignUp, setIsAuthClose]);

  const handelSignUp = useCallback(() => {
    setShowSignUp(true);
    setShowLogin(false);
    setIsAuthClose(false);
  }, [setShowSignUp, setShowLogin, setIsAuthClose]);

  const loginButtonDisabled = useMemo(() => {
    return showLogin || showSignUp; // Disable button when either form is shown
  }, [showLogin, showSignUp]);

  const signUpButtonDisabled = useMemo(() => {
    return showLogin || showSignUp; // Disable button when either form is shown
  }, [showLogin, showSignUp]);

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
        {!isMobile && (
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
        {!isMobile && (
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
                <button
                  className="px-3 py-1 rounded-md bg-blue-500 font-semibold text-white hover:bg-blue-600"
                  onClick={handelLogin}
                  disabled={loginButtonDisabled}
                >
                  Login
                </button>
                <button
                  className="px-3 py-1 rounded-md bg-blue-500 font-semibold text-white hover:bg-blue-600"
                  onClick={handelSignUp}
                  disabled={signUpButtonDisabled}
                >
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
              <button
                className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                onClick={handelLogin}
                disabled={loginButtonDisabled}
              >
                Login
              </button>
              <button
                className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                onClick={handelSignUp}
                disabled={signUpButtonDisabled}
              >
                Signup
              </button>
            </div>
          )}
        </DialogBody>
      </Dialog>

      {/* Conditional rendering for login and signup forms */}
      {showLogin && (
        <div id="siginpage" className="flex justify-center">
          <SignIn onClose={handleCloseForms} />
        </div>
      )}
      {showSignUp && (
        <div id="siguppage" className="flex justify-center">
          <SignUp onClose={handleCloseForms} />
        </div>
      )}
    </Fragment>
  );
}
