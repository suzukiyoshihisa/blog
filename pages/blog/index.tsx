import Container from "components/container";
import Hero from "components/hero";

export default function Blog() {
  return (
    <Container>
      <Hero
        title="Blog"
        subtitle="This is a blog page."
        imageOn={true}
      />
    </Container>
  );
}