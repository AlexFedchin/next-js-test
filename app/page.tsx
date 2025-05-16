import NavigationButton from "./components/NavigationButton";
import CounterCard from "./components/CounterCard";
import ComponentsCard from "./components/ComponentsCard";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center max-w-7xl mx-auto mt-8 gap-6">
        <h1 className="font-bold text-4xl text-center">WELCOME, MASTER JOHN</h1>

        {/* Navigation Buttons Section */}
        <div className="flex flex-row items-center justify-center relative w-full gap-3">
          <NavigationButton text="See Users" link="/users" />
          <NavigationButton text="See Posts" link="/posts" />
        </div>

        {/* Counter Section */}
        <CounterCard />

        {/* Dynamic Components Section */}
        <ComponentsCard />
      </div>
    </main>
  );
}
