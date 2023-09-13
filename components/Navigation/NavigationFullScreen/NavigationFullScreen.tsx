import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import navigationItems from "./navItems";
import NavItem from "./NavItem";

const NavigationFullScreen: React.FC = () => {
  return (
    <header className={`w-full shadow-lg z-20 absolute bg-transparent`} >
      <nav className="flex justify-between m-auto max-w-screen-xl px-5 py-5">
        <div className="py-2 text-white">
          <Link href="/">
            <img src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Flogo-black.svg" alt="logo" width="210" height="29" aria-hidden="true" decoding="async" />
          </Link>
        </div>

        <div className="flex items-center">
          <div className="max-sm:hidden menu flex items-center h-full">
            {navigationItems.map((item, index) => (
              <NavItem
                key={index}
                pageLink={item.pageLink}
                copy={item.title}
                handleClick={() => { }}
              />
            ))}
            <button className="pl-5">
              <Link href="" className={`w-full h-full bg-primary text-white py-4 px-8 rounded font-bold`}>Contact Us</Link>
            </button>

          </div>
        </div>

        <BurgerMenu />
      </nav>
    </header>
  );
};

export default NavigationFullScreen;
