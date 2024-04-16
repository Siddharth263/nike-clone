import { useEffect } from "react";
import heroImage from "../assets/hero/hero-image.png";

const Hero = () => {
  const clickHandler = () => {
    window.location.href = "https://www.nike.com/in/w/air-max-dn-5ufej";
  };

  return (
    <section className="px-72 flex flex-col w-full">
      <img width={4000} height={2000} src={heroImage} alt="image" />
      <div className="p-2 text-center">
        <p className="font-semibold mt-6 text-sm">Feel the Unreal</p>
        <h1 className="hero-h1">air max dn</h1>
        <p className="mt-6 text-lg">
          The next generation of Air Technology is here.
        </p>
        <button className="hero-button" onClick={clickHandler}>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
