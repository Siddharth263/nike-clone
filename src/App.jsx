import { Header, Hero, Arrivals, Trends, DontMiss } from "./sections/index";

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
  </main>
);

export default App;
