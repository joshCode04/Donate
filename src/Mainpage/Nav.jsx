import { useState, useEffect } from "react";

function Nav() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scroll
          ? "bg-[#072F4B] py-3 transition-all duration-700 ease-in-out"
          : "bg-gradient-to-r from-[#051e2e] via-[#093C5E] to-[#051e2e]"
      } fixed w-full top-0 px-32 py-7 transition-colors duration-300`}
    >
      <div className="flex justify-between items-center z-10">
        {/* First div for the image */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-16 border-[#051e2e]" />
        </div>
        {/* Second div for the links and buttons */}
        <div className="flex items-center space-x-6">
          <div className="flex space-x-4 montserrat uppercase gap-3">
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
          <div className="flex space-x-4 montserrat uppercase font-semibold">
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
  );
}

export default Nav;
