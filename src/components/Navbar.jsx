import NikeLogo from "../assets/top-navbar/nike-logo.svg";
import hamburger from "../assets/hamburger.svg";
import SearchIcon from "../assets/search-icon.svg";
import FavouriteIcon from '../assets/top-navbar/favourite-icon.svg'
import CartIcon from '../assets/top-navbar/cart-icon.svg'

const Navbar = () => {
  return (
    <nav className="bg-white w-full px-10 m-1 flex">
      <div>
        <a href="/"><img src={NikeLogo} alt="Nike Logo" width={70} height={90} /></a>
      </div>
      <div className="w-5/6 pl-24">
        <div className="flex gap-4 h-full w-full justify-center">
          <span className="nav-heading-items">New & Featured</span>
          <span className="nav-heading-items">Men</span>
          <span className="nav-heading-items">Women</span>
          <span className="nav-heading-items">Kids</span>
          <span className="nav-heading-items">Sale</span>
          <span className="nav-heading-items">Customise</span>
          <span className="nav-heading-items">SNKRS</span>
        </div>
      </div>
      <div className="relative flex">
        <input
          className="bg-gray-100 hover:bg-gray-300 rounded-3xl pl-10 h-3/5 m-3 focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <img
          className="absolute bottom-[0.88rem] left-[0.8rem] rounded-full p-[0.40rem] hover:bg-gray-300"
          src={SearchIcon}
          alt="SearchIcon"
        />
      </div>
      <div className="flex gap-5 items-center">
        <div>
        <img width={30} height={30} src={FavouriteIcon} alt="favourite"/>
      </div>
      <div>
        <img width={30} height={30} src={CartIcon} alt="favourite"/>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
