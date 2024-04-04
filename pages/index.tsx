import Image from "next/image";
import Container from "components/container";
import Hero from "components/hero";

export default function Home() {
  return (
    <Container>
      <Hero
        title = "Home"
        subtitle = "This is an home page."
        imageOn = {true}
      />
    </Container>
  );
}
