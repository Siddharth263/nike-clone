import backArrow from "../assets/back-arrow.svg";
import forwardArrow from "../assets/forward-arrow2.svg";

const Arrivals = () => {
  return (
    <section className="grid grid-rows-2 mt-24 px-12 py-12">
      <div>
        <div className="flex">
          <p className="w-11/12 tracking-tight font-bold text-2xl">
            New Arrivals Just Landed
          </p>
          <p className="mr-6 pt-2 text-lg">Shop</p>
          <button disabled className="arrivals-button">
            <img src={backArrow} alt="Back Arrrow" />
          </button>
          <button className="arrivals-button ml-2">
            <img src={forwardArrow} alt="Forward Arrow" />
          </button>
        </div>
      </div>

      <div>add images here for the carousel</div>
    </section>
  );
};

export default Arrivals;
