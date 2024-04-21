import {
  Header,
  Hero,
  Arrivals,
  Trends,
  DontMiss,
  ClassicSpotlight,
  Sport,
  Members,
  Footer,
} from "./sections/index";

const App = () => (
  <main className="overflow-hidden select-none">
    {/* Top section with navbar */}
    <Header />

    {/* Shoe video section */}
    <Hero />

    {/* Arrivals section */}
    <Arrivals />

    {/* Trend section */}
    <Trends />

    {/* Dont miss section */}
    <DontMiss />

    {/* Classic Spotlight */}
    <ClassicSpotlight />

    {/* Shop by Sport */}
    <Sport />

    {/* Members */}
    <Members />

    {/* Footer */}
    <Footer />
  </main>
);

export default App;
