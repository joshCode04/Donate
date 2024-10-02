import { useState, useEffect } from "react";

function Nav() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for toggling sidenav

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle sidenav
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`${
          scroll
            ? "bg-[#072F4B] py-1 transition-all duration-700 ease-in-out"
            : "bg-gradient-to-r from-[#051e2e] via-[#093C5E] to-[#051e2e]"
        } fixed w-full z-50 top-0 px-6 md:px-32 py-7 transition-colors duration-300`}
      >
        <div className="flex justify-between items-center z-10">
          {/* First div for the image */}
          <div>
            <img src="/logo.png" alt="Logo" className="h-16 border-[#051e2e]" />
          </div>

          {/* Hamburger Icon for medium and smaller screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <span className="text-white text-3xl">&#9776;</span>{" "}
              {/* Hamburger Icon */}
            </button>
          </div>

          {/* Second div for the links and buttons, hidden on small screens */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-4 montserrat uppercase gap-3 text-base">
              <a href="#platform" className="text-white hover:text-red-500">
                Platform
              </a>
              <a href="#news" className="text-white hover:text-red-500">
                News
              </a>
              <a href="#events" className="text-white hover:text-red-500">
                Events
              </a>
              <a href="#get-involved" className="text-white hover:text-red-500">
                Get Involved
              </a>
            </div>
            <div className="flex space-x-4 montserrat uppercase font-semibold text-base">
              <button className="bg-[#DA1333] text-white px-7 py-2.5 hover:bg-red-900 rounded-3xl">
                Contribute
              </button>
              <button className="bg-[#213875] text-white px-7 py-2.5 hover:bg-blue-950 rounded-3xl">
                Shop
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* SideNav - Fullscreen menu on mobile */}
      <div
        className={`fixed inset-0 bg-[#072F4B] z-50 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col items-center justify-center`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white text-3xl"
        >
          &times; {/* Close button */}
        </button>

        {/* Links for the sidenav */}
        <div className="flex flex-col space-y-8 items-center">
          <a
            href="#platform"
            className="text-white text-2xl hover:text-red-500"
          >
            Platform
          </a>
          <a href="#news" className="text-white text-2xl hover:text-red-500">
            News
          </a>
          <a href="#events" className="text-white text-2xl hover:text-red-500">
            Events
          </a>
          <a
            href="#get-involved"
            className="text-white text-2xl hover:text-red-500"
          >
            Get Involved
          </a>
          <button className="bg-[#DA1333] text-white px-7 py-2.5 hover:bg-red-900 rounded-3xl">
            Contribute
          </button>
          <button className="bg-[#213875] text-white px-7 py-2.5 hover:bg-blue-950 rounded-3xl">
            Shop
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
