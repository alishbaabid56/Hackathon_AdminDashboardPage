import Image from "next/image";
import { FaSearch, FaSlidersH, FaBell, FaHeart, FaCog, FaUser, FaCommentDots } from "react-icons/fa"; // Added FaCommentDots
import Link from "next/link";

export default function Navbar() {
  const userLoggedIn = false; // Change this to check if the user is logged in

  return (
    <nav className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-8 py-6 bg-white shadow-sm">
      {/* Top Section: Logo and Profile */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo */}
        <div className="text-blue-600 font-[700] text-[24px] md:text-[32px] cursor-pointer">
          <span className="px-2 py-1 rounded">MORENT</span>
        </div>

        {/* Profile Image (visible only on smaller screens) */}
        <div className="w-8 h-8 mt-3 overflow-hidden md:hidden">
          {userLoggedIn ? (
            <Image
              src="/images/Profile.png" // Replace with your profile image path
              alt="Profile"
              width={40}
              height={40}
            />
          ) : (
            <Link href="/signin" passHref>
              <FaUser className="text-gray-600 w-5 h-5 cursor-pointer" />
            </Link>
          )}
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex md:hidden items-center space-x-4 mt-4">
        {/* Icons visible only on small screens */}
        <button>
          <FaHeart className="text-gray-600 w-5 h-5" />
        </button>

        <button className="relative">
          <FaBell className="text-gray-600 w-5 h-5" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-3 h-3 flex items-center justify-center">
            •
          </span>
        </button>

        {/* Chat Icon for small screens */}
        <button>
          <FaCommentDots className="text-gray-600 w-5 h-5" />
        </button>

        <button>
          <FaCog className="text-gray-600 w-5 h-5" />
        </button>
      </div>

      {/* Icons Section for larger screens */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Icons visible only on larger screens */}
        <button>
          <FaHeart className="text-gray-600 w-5 h-5" />
        </button>

        <button className="relative">
          <FaBell className="text-gray-600 w-5 h-5" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-3 h-3 flex items-center justify-center">
            •
          </span>
        </button>

        {/* Chat Icon for larger screens */}
        <button>
          <FaCommentDots className="text-gray-600 w-5 h-5" />
        </button>

        <button>
          <FaCog className="text-gray-600 w-5 h-5" />
        </button>

        <div className="w-8 h-8 mt-3 overflow-hidden">
          {userLoggedIn ? (
            <Image
              src="/images/Profile.png"
              alt="Profile"
              width={40}
              height={40}
            />
          ) : (
            <Link href="/signin" passHref>
              <FaUser className="text-gray-600 w-5 h-5 cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}