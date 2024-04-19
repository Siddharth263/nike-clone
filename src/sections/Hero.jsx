import heroImage from "../assets/hero/hero-image.png";

const Hero = () => {
  return (
    <section>
      <a href="https://www.nike.com/in/w/air-max-dn-5ufej">
        <div className="hero-a-div1">
          <img src={heroImage} alt="Air Max Dn" />
        </div>
        <div className="hero-div2">
          <p className="font-semibold mt-6 text-sm">Feel the Unreal</p>
          <h1 className="hero-h1">air max dn</h1>
          <p className="mt-6 text-lg max-md:text-base">
            The next generation of Air Technology is here.
          </p>
          <div>
            <button className="hero-button">Shop Now</button>
          </div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
