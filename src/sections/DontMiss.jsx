import BigImage from "../assets/dont-miss/big-image.jpg";
import SmallImage from "../assets/dont-miss/small-image.jpg";

const DontMiss = () => {
  return (
    <section>
      <div>
        <a href="https://www.nike.com/in/w/jordan-clothing-37eefz6ymx6">
          <div className="flex justify-between p-8">
            <p className="trend-p1">Dont Miss</p>
          </div>
          <div className="p-8">
            <img className="max-sm:hidden" src={BigImage} alt="image" />
            <img className="sm:hidden" src={SmallImage} alt="image" />
          </div>
          <div className="hero-div2 p-8">
            <p className="hero-h1">classic refresh</p>
            <p className="mt-6 max-sm:text-balance text-lg max-md:text-base">
              Featuring a modern interpretation of classic peices, this
              collection introduces refined streetware style in a clean, minimal
              palette
            </p>
            <button className="hero-button">Shop</button>
          </div>
        </a>
      </div>
    </section>
  );
};

export default DontMiss;
