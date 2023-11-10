import { FaBars } from 'react-icons/fa'; // Import the bars icon

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6">
      <img src="/logo.svg" alt="Logo" />

      {/* Navigation links on larger screens */}
      <ul className="hidden sm:flex space-x-4">
        <li>
          <button
            className="text-white hover:text-hoverColor transition-colors border-b hover:border-b-2 border-transparent hover:border-hoverColor mb-1"
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="text-white hover:text-hoverColor transition-colors border-b hover:border-b-2 border-transparent hover:border-hoverColor mb-1"
          >
            Pricing
          </button>
        </li>
        <li>
          <button
            className="text-white hover:text-hoverColor transition-colors border-b hover:border-b-2 border-transparent hover:border-hoverColor mb-1"
          >
            Community
          </button>
        </li>
        <li>
          <button
            className="text-white hover:text-hoverColor transition-colors border-b hover:border-b-2 border-transparent hover:border-hoverColor mb-1"
          >
            About Us
          </button>
        </li>
      </ul>

      {/* Menu button on small screens */}
      <div className="sm:hidden">
        <button className="text-white">
          <FaBars />
        </button>
      </div>

      <button
        className="hover:bg-hoverColor text-white font-bold py-2 px-6 rounded-3xl border"
      >
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
