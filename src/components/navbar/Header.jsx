import { Fragment, useState } from "react";
import { Dialog, DialogBody, Input } from "@material-tailwind/react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchkey, setSearchkey] = useState("");

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

        {/* Center: Logo for desktop */}
        <div className="hidden md:flex items-center justify-center text-xl font-bold">
          <span className="text-blue-500">Pay</span>Partners
        </div>

        {/* Right side: Menu items, mode switch buttons, login/signup */}
        <div className="flex items-center space-x-4">
          {/* Menu items */}
          <div className="hidden md:flex space-x-4">
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

          {/* Search */}
          <div className="hidden md:flex items-center">
            <Input
              color="white"
              type="search"
              // label="Type here..."
              value={searchkey}
              onChange={(e) => setSearchkey(e.target.value)}
              className="bg-gray-800 px-2 py-1 rounded-md"
              name="searchkey"
              containerProps={{
                className: "min-w-[288px]",
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  // handleSearch();
                }
              }}
            />
            <button className="ml-2">
              <AiOutlineSearch size={24} />
            </button>
          </div>

          {/* Login/Signup */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
              Login
            </button>
            <button className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
              Signup
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        className="bg-gray-900 text-white"
        open={open}
        handler={() => setOpen(!open)}
      >
        <DialogBody>
          <div className="flex flex-col space-y-4">
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

            {/* Search */}
            <div className="flex items-center">
              <Input
                color="white"
                type="search"
                // label="Type here..."
                value={searchkey}
                onChange={(e) => setSearchkey(e.target.value)}
                className="bg-gray-800 px-2 py-1 rounded-md flex-grow"
                name="searchkey"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    // handleSearch();
                  }
                }}
              />
              <button className="ml-2">
                <AiOutlineSearch size={24} />
              </button>
            </div>

            {/* Login/Signup */}
            <div className="flex items-center space-x-4">
              <button className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                Login
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                Signup
              </button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
