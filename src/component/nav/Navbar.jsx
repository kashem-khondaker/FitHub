import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Bell, UserCircle } from "lucide-react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fake auth
  const isLoggedIn = true;
  const user = {
    name: "John Doe",
    avatar:
      "https://ui-avatars.com/api/?name=John+Doe&background=random&size=128",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">FitHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/instructors">Instructors</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <button className="relative">
                <Bell className="text-gray-700" size={22} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="relative">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-9 h-9 rounded-full cursor-pointer border-2 border-gray-300"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-10">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            // <div className="hidden md:flex items-center space-x-3">
            //   <Link to="/login">
            //     <button className="px-5 py-2 rounded-full border border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white transition duration-200">
            //       Log In
            //     </button>
            //   </Link>
            //   <Link to="/register">
            //     <button className="px-5 py-2 rounded-full bg-primary  hover:bg-blue-500/90 hover:text-white transition duration-200">
            //       Sign Up
            //     </button>
            //   </Link>
            // </div>
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link to="/register">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {/* Main Navigation Items */}
          <div className="space-y-2">
            <NavLink
              to="/"
              className="block w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className="block w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </NavLink>
            <NavLink
              to="/about"
              className="block w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/instructors"
              className="block w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Instructors
            </NavLink>
            <NavLink
              to="/contact"
              className="block w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>

          {/* Divider */}
          <div className="pt-4 border-t space-y-3">
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-3">
                  <img
                    src={user.avatar}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border"
                  />
                  <span className="font-medium text-gray-800">{user.name}</span>
                </div>

                <Link
                  to="/profile"
                  className="block w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/dashboard"
                  className="block w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/settings"
                  className="block w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={() => {
                    // logout logic here
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
