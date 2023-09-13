import React, { useState, useEffect, useRef } from "react";
import navigationItems from "./navItems";
import NavItem from "./NavItem";

const BurgerMenuIcon: React.FC = () => {
  return (
    <div className="space-y-2 cursor-pointer">
      {[...Array(3)].map((_, index) => (
        <span
          key={index}
          className={`block h-0.5 w-8 bg-black`}
        />
      ))}
    </div>
  );
};

const CloseButton: React.FC<{ handleClose: () => void }> = (props) => {
  return (
    <button
      aria-label="close menu"
      className={`text-black`}
      onClick={props.handleClose}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 max-sm:h8 max-sm:w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};


const BurgerMenu: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => {
    setIsNavOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { // Adjust the breakpoint as needed
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isNavOpen]);

  return (
    <div className="flex items-center sm:justify-between sm:hidden">
      <nav>
        <section className="flex">
          <div onClick={toggleNav}>
            <BurgerMenuIcon />
          </div>

          <div
            ref={menuRef}
            className={`z-10 flex flex-col bg-white transition-opacity duration-500 ease-in-out fixed w-full h-screen top-0 right-0  ${isNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          >
            <div className="flex px-5 py-2 justify-end">
              <CloseButton handleClose={toggleNav} />
            </div>

            <div className="flex flex-col pt-10 items-center">
              {navigationItems.map((item, index) => (
                <NavItem
                  key={index}
                  pageLink={item.pageLink}
                  copy={item.title}
                  handleClick={toggleNav}
                />
              ))}
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default BurgerMenu;
