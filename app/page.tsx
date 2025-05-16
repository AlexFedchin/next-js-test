"use client";
import { useState } from "react";
import NavigationButton from "./components/NavigationButton";
import CounterCard from "./components/CounterCard";
import ComponentsCard from "./components/ComponentsCard";

export default function Home() {
  // State for dynamic components

  return (
    <main>
      <div className="flex flex-col items-center max-w-7xl mx-auto mt-8">
        <h1 className="font-bold text-4xl mb-6">WELCOME, MASTER JOHN</h1>
        {/* Navigation Buttons Section */}
        <div className="flex flex-row items-center justify-center mt-8 relative w-full max-w-16 gap-3">
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
