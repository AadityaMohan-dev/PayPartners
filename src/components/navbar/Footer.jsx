import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About Us</h3>
            <p>If we command our wealth, we shall be rich and free.</p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Social Media</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p>Email: paypartners@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-800 pt-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} PayPartners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
