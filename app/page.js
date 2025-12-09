import { Button } from "@/components/ui/button";
import Hero from "./(components)/Hero";

import Features from "./(components)/features";
import NewArrivals from "./(components)/NewArrivals";

export default function page() {
  return (
    <>
      <Hero />
      <Features />
      <NewArrivals />
    </>
  );
}
