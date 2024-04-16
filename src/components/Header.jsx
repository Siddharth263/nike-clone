import Navbar from "./Navbar";
import MySlider from "./Slider";

import JordanLogo from "../assets/top-navbar/jordan-logo.svg";

const Header = () => {
  return (
    <header className="bg-[#f5f5f5]">
      <section className="flex flex-row gap-2 max-lg:hidden">
        <div className="px-10 m-2 w-2/3">
          <img src={JordanLogo} alt="Jordan Logo" width={25} height={22} />
        </div>
        <div className="flex gap-3 ms-52">
          <h5 className="h5">Find a Store</h5>
          <h5 className="h5">Help</h5>
          <h5 className="h5">Join Us</h5>
        </div>
      </section>
      <Navbar />
      <MySlider />
    </header>
  );
};

export default Header;
