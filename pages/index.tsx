import Image from "next/image";
import Hero from "components/hero";

export default function Home() {
  return (
    <>
      <Hero
        title = "Home"
        subtitle = "This is an home page."
        imageOn = {true}
      />
    </>
  );
}
