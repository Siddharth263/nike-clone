import NikeLogo from "../assets/top-navbar/NikeLogo.jsx";
import Hamburger from "../assets/top-navbar/Hamburger.jsx";
import FavouriteIcon from "../assets/top-navbar/FavouriteIcon.jsx";
import Cart from "../assets/top-navbar/Cart.jsx";
import SearchIcon from '../assets/top-navbar/SearchIcon.jsx'
import ProfileIcon from '../assets/top-navbar/ProfileIcon.jsx'
import { navItem } from "../constants/index.js";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="grid grid-flow-col gap-3">
        <div className="flex items-center">
          <a href="/">
            <NikeLogo />
          </a>
        </div>
        <div className="flex justify-end max-sm:hidden gap-28">
          <ul className="flex items-center gap-3">
            {navItem.map((item) => (
              <li
                key={item.label}
                className={`nav-heading-items tracking-tighter ${
                  item.label === "SNKRS" || item.label === "Customise"
                    ? "max-xl:hidden"
                    : "max-lg:hidden"
                }`}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full p-2 max-lg:hidden pl-5 w-44 bg-gray-200 outline-none"
            />
          </div>
        </div>
        <div className="nav-button">
          <button>
            <FavouriteIcon />
          </button>
          <button>
            <Cart />
          </button>
        </div>
        <div className="mobile-menu" id="mobile-menu">
          <SearchIcon/>
          <Cart/>
          <ProfileIcon />
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
