import { Header, Hero, Arrivals } from "./components/index";

const App = () => (
  <main className="overflow-hidden select-none">
    {/* Top section with navbar */}
    <Header />

    {/* Shoe video section */}
    <Hero />

    {/* Arrivals section */}
    <Arrivals />
    {/* Trend section */}
    <section>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>

    {/* Just in section */}
    <section>
      <div>
        <div></div>
        <div></div>
      </div>
    </section>

    {/* Dont miss section */}
    <section></section>
  </main>
);

export default App;
