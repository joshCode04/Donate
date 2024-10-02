import { useEffect, useState } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // User is scrolling down
      setIsVisible(true);
    } else if (currentScrollY < lastScrollY && currentScrollY > 50) {
      // User is scrolling up
      setIsVisible(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <footer
      className={`bg-[#093C5E] text-white p-4 flex max-md:flex-col max-md:justify-center justify-between fixed bottom-0 left-0 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div>
        <p>Paid for by Donald J Trump for President 2024, Inc.</p>
      </div>
      <div className="flex space-x-4 max-md:space-x-2 max-md:text-xs">
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/terms-and-conditions" className="hover:underline">
          Terms & Conditions
        </a>
        <a href="/press" className="hover:underline">
          Press
        </a>
        <a href="/careers" className="hover:underline">
          Careers
        </a>
        <span>Powered by Nucleus</span>
      </div>
    </footer>
  );
}

export default Footer;
