import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 py-10 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            About Us
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pharetra nisi vitae lectus dignissim, id varius elit condimentum.
            Vivamus sed risus quis libero suscipit ultrices. Nullam euismod
            augue non magna consectetur, a rhoncus lectus fermentum. Morbi
            facilisis luctus diam, quis convallis urna molestie nec. Aenean nec
            tellus vestibulum, ullamcorper nisl non, ultrices lorem. Mauris ac
            libero nec sapien feugiat scelerisque vel a neque. Aenean non
            tincidunt ex. Fusce at mauris a risus aliquet euismod at in leo.
            Donec consectetur fringilla arcu, in lacinia nunc convallis eu.
            Quisque pretium lobortis ex, eget ultricies quam fermentum vel.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mt-5">
            Donec auctor, nunc eget condimentum consectetur, nibh ligula
            pharetra lorem, sit amet fermentum quam dui et nibh. Nulla mattis
            tortor sit amet ante placerat, ac mattis elit vestibulum. Integer
            quis turpis non dolor finibus tempus. Sed ac elit nec mi consequat
            tincidunt ac at mauris. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 PayPartners. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Custom NavLink component for Tailwind CSS styling
const NavLink = ({ to, children, active, ...rest }) => {
  const activeClassName = active ? "text-blue-500" : "hover:text-blue-500";
  return (
    <Link
      to={to}
      className={`text-white ${activeClassName} px-3 py-2 rounded-md text-sm`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default AboutPage;